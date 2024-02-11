const { model } = require('mongoose');
const Eventmodel = require('../Models/EventModel')


function getevent(req, res, next){
    Eventmodel.find()
    .then((response) => {
        if(response.length > 0){
            return res.status(200).json(response);
        } else {
            return res.status(200).json({
                success: true,
                message: "No Event found",
                data: []  // Return an empty array if no products are found
            });
        }
    })
    .catch((error) =>
      res.status(500).json({
        success: false,
        error: error,
      })
    );
  }


  function createevent(req, res, next) {
    const event = Eventmodel({
        Id: req.body.Id,
        Subject: req.body.Subject,
        Location: req.body.Location,
        StartTime: req.body.StartTime,
        EndTime: req.body.EndTime,
      });
      
  try {
    const newEvent = event.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


function updateevent(req, res){
    try {
      const event = Eventmodel.findById(req.params.id);
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
  
      const updatedEvent = event.save();
      res.json(updatedEvent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }


  async function deleteEvent(req, res){
    try {
      const event = await Eventmodel.findById(req.params.id);
      if (event == null) {
        return res.status(404).json({ message: 'Event not found' });
      }
      await event.remove();
      res.json({ message: 'Event deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  module.exports={
    getevent,
    updateevent,
    deleteevent,
    createevent
  }