const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Create a new 
router.post('/', async (req, res) => {
  const { title, image, details } = req.body;

  try {
    const newEvent = new Event({
      title,
      image,
      details,
    });

    const event = await newEvent.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update an event
router.put('/:id', async (req, res) => {
    const { title, image, details } = req.body;
  
    try {
      let event = await Event.findById(req.params.id);
      if (!event) return res.status(404).json({ msg: 'Event not found' });
  
      event.title = title;
      event.image = image;
      event.details = details;
  
      await event.save();
      res.json(event);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });  

// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    await Event.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Event removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
