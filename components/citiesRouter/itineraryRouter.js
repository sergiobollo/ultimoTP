const express = require('express');
const router = express.Router();
const itineraryModel = require('../citiesModel/itineraryModel');

router.get('/iteneraris',(req, res) => {
    itineraryModel.find((err, iteneraris) => {
        if (err) {
            console.log('Error find users: ', error);
            return res.status(500).json({ err: 'Error al consultar usuarios.'})
        }
        res.status(200).json({iteneraris });
    });
});

router.get('/itineraries/:cityid',
(req, res) => {
    console.log(req.params.cityid)
    console.log("hola")
      let cityRequested = req.params.cityid;
      itineraryModel.find({ cityid: cityRequested })
        .then(itinerary => {
            res.send(itinerary);
            console.log(itinerary)
        })
        .catch(err => console.log(err));
});

/* router.route('/itineraries/:idCity').get(function (req, res) {
    console.log('entro  abuscar ');
    console.log(req.params.idCity);
    
    itineraryModel.find({
            cityIn: req.params.idCity  // search query
        }).populate({path:'cityId'})
        .catch(err => {
            console.error(err)
        })
        .then(doc => {
            console.log(res.send(doc));
            return res.send(doc)
           
            
        })
        
}); */



router.post('/itinerary', (req, res) => {
    const newCity = new itineraryModel(req.body);
    newCity.save((err, city) => {
        if (err) {
            console.log('Error save user: ', error);
            return res.status(500).json({ err: 'Error al guardar usuario.'})
        }
        res.status(200).json({city});
    })
});

router.put('/itinerary/:id',(req,res) =>{
    itineraryModel.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
        if (err) {
            console.log('Error update cities: ', error);
            return res.status(500).json({ err: 'Error al actualizar usuario.'})
        }
        res.status(200).json({ cityUpdated: updated });
    });
})

router.delete('/itinerary/:id',(req,res) => {
    itineraryModel.findByIdAndRemove(req.params.id, (err, deleted) => {
        if (err) {
            console.log('Error delete user: ', error);
            return res.status(500).json({ err: 'Error al borrar usuario.'})
        }
        res.status(200).json({ cityDeleted: deleted });
    });
});

module.exports = router;