module.exports = app => {
    const scheduleService = require("../Routers/EventRouter");
    const router = require("express").Router();

    router.post("/getData", scheduleService.getData);
    router.post("/crudActions", scheduleService.crudActions);

    app.use('/api/scheduleevents', router);
};
