const SchedulerEvent = require("../Models/Events");

exports.crudActions = async (req, res) => {
    try {
        if (req.body.added !== null && req.body.added.length > 0) {
            const addedEvents = await SchedulerEvent.insertMany(req.body.added);
            res.send(addedEvents);
        }

        if (req.body.changed !== null && req.body.changed.length > 0) {
            for (const changedEvent of req.body.changed) {
                const updatedEvent = await SchedulerEvent.findByIdAndUpdate(changedEvent.id, changedEvent, { new: true });
                res.send(updatedEvent);
            }
        }

        if (req.body.deleted !== null && req.body.deleted.length > 0) {
            for (const deletedEvent of req.body.deleted) {
                const deletedEvent = await SchedulerEvent.findByIdAndDelete(deletedEvent.id);
                res.send(deletedEvent);
            }
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while performing CRUD operations."
        });
    }
};

exports.getData = async (req, res) => {
    try {
        const data = await SchedulerEvent.find();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Events."
        });
    }
};
