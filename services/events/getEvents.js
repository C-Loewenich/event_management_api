import eventData from '../../data/events.json' assert {type: "json"};

const getEvents = (title, location) => {
    let events = eventData.events;

    if (title) {
        console.log(title)
        events = events.filter(event => event.title === title)
    }

    if (location) {
        events = events.filter(event => event.location === location)
    }
    console.log(events)
    return events
}

export default getEvents    