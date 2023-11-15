import eventData from '../../data/events.json' assert {type: "json"};
import ResourceNotFoundError from '../../errors/notFoundError.js';

const deleteEvent = (id) => {
    const index = eventData.events.findIndex((event) => event.id === id);
    if (index === -1) {
        throw new ResourceNotFoundError('Events', id)
    }
    eventData.events.splice(index, 1);
    return id;
}

export default deleteEvent