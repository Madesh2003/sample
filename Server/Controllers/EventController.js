
const EventRouter = require("express").Router();
const Event = require('../Models/EventModel');

// Define routes

// Get all events
EventRouter.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new event
EventRouter.post('/', async (req, res) => {
  const event = new Event({
    Id: req.body.Id,
    Subject: req.body.Subject,
    Location: req.body.Location,
    StartTime: req.body.StartTime,
    EndTime: req.body.EndTime,
    CategoryColor: req.body.CategoryColor
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an event
EventRouter.put('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (req.body.Subject != null) {
      event.Subject = req.body.Subject;
    }
    if (req.body.Location != null) {
      event.Location = req.body.Location;
    }
    if (req.body.StartTime != null) {
      event.StartTime = req.body.StartTime;
    }
    if (req.body.EndTime != null) {
      event.EndTime = req.body.EndTime;
    }
    if (req.body.CategoryColor != null) {
      event.CategoryColor = req.body.CategoryColor;
    }

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an event
EventRouter.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: 'Event not found' });
    }
    await event.remove();
    res.json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = EventRouter;