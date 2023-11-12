import eventData from '../../data/events.json' assert {type: "json"};
import ResourceNotFoundError from '../../errors/notFoundError.js';

const getEventById = (id) => {
    const event = eventData.events.find(event => event.id === id);
    
    if (!event) {
        throw new ResourceNotFoundError('Event', id)
    }

    return event
}

export default getEventById;