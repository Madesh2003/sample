const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const env = require("dotenv");
const AuthMiddleware = require("./Middleware/Auth.middleware")
const { dbconnect }= require("./db.config");
const mongoose =  require("mongoose")

dbconnect();

const APP_SERVER = express();

APP_SERVER.use(bodyparser.json()); 

APP_SERVER.use(cors())

env.config();


APP_SERVER.use('/user',require('./Controllers/AuthenticationControllers'));
// APP_SERVER.use(
//   "/dashboard",
//   AuthMiddleware,
//   require("./controllers/Cart.controller")
// );
APP_SERVER.use('/product',require("./Controllers/ProductController"))

APP_SERVER.use('/api',require('./Controllers/ProductUpdatecontroller'))

APP_SERVER.use('/soldproducts',require('./Controllers/Soldproducts.Controller'))

APP_SERVER.use('/customers',require('./Controllers/Customer'))




const schedulerEventSchema = new mongoose.Schema({
    Id: Number,
    Subject: String,
    Location: String,
    StartTime: Date,
    EndTime: Date,
    IsAllDay: Boolean,
    description: String,
  })

  const Schedule = mongoose.model('Schedule', schedulerEventSchema);


APP_SERVER.get('/api/schedule', async (req, res) => {
    try {
      const scheduleData = await Schedule.find();
      res.json(scheduleData);
    } catch (error) {
      console.error('Error fetching schedule data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Add new schedule
  APP_SERVER.post('/api/schedule', async (req, res) => {
    try {
      const newSchedule = req.body;
      console.log(req.body)
      const createdSchedule = await Schedule.create(newSchedule);
      res.status(201).json(createdSchedule);
    } catch (error) {
      console.error('Error creating schedule:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Update existing schedule
// Update existing schedule
APP_SERVER.put('/api/schedule/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedSchedule = req.body;
  
      // Ensure that _id field is present in the request body
      if (!updatedSchedule._id) {
        return res.status(400).json({ error: 'Missing _id field in request body' });
      }
  
      const result = await Schedule.findByIdAndUpdate(id, updatedSchedule, { new: true });
      res.json(result);
    } catch (error) {
      console.error('Error updating schedule:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  // Delete existing schedule
  APP_SERVER.delete('/api/schedule/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Schedule.findByIdAndDelete(id);
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting schedule:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

APP_SERVER.all("/", (req, res, next) => {
    res.status(200).json({
        message: "server is working"
    });
});

APP_SERVER.listen(process.env.PORT, () => console.log(`Server is running ${process.env.PORT}`));