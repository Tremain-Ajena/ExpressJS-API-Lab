const express = require('express');
// const jQuery= require('jquery');
const chirpsStore = require('../chirpstore');

let router= express.Router();

router.get('/:id?', (request,response) => {
    let id= request.params.id
    if(id) {
        response.json(chirpsStore.GetChirp(id));
    } else{
        response.send(chirpsStore.GetChirps());
    }

});

router.post('/', (request,response) => {
    chirpsStore.CreateChirp(request.body);
    response.sendStatus(200);

});

router.put('/:id?', function (request,response) {
    // this updates the chirps

    // chirpsStore.DeleteChirp(request.body);
    // I didn't need to invoke the DeleteChirp function because the UpdateChirp function knows to clear out the previous info
    chirpsStore.UpdateChirp(request.params.id, {
        "user":request.body.user,
        "text":request.body.text
    });
    // chirpsStore.CreateChirp(request.body);
    response.sendStatus(200);
});

router.delete('/:id', function (request,response) {
    // this deletes chirps

    // the '?' after '/:id' does not have to be after the id
    chirpsStore.DeleteChirp(request.params.id);
    response.sendStatus(200);
})

module.exports = router;