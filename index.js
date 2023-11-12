import express from "express";
import log from './middleware/logMiddleware.js';
import categoriesRouter from './routes/categories.js';
import eventsRouter from './routes/events.js';
import usersRouter from './routes/users.js';
import loginRouter from './routes/login.js';
import * as Sentry from '@sentry/node'
import 'dotenv/config'
import errorHandler from './middleware/errorHandler.js';

const app = express();
 
Sentry.init({
  dsn: 'https://b4fcf4281c6db05eb31fe2cb014eea13@o4506167694196736.ingest.sentry.io/4506197809758208',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    // Automatically instrument Node.js libraries and frameworks
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations()
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
})

// RequestHandler creates a separate execution context, so that all
// transactions/spans/breadcrumbs are isolated across requests
app.use(Sentry.Handlers.requestHandler())
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler())

app.use(express.json());
app.use(log)

app.use('/categories', categoriesRouter);
app.use('/events', eventsRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler())

app.use(errorHandler)

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
