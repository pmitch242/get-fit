const router = require("express").Router();
const path = require("path");
const mongojs = require('mongojs');

const db = require("../models/index");

// html routes
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

// api routes
router.post('/api/workouts', ({ body }, res) => {
    db.Workout.create(body)
        .then(results => {
            console.log(results);
            res.json(results);
        })
        .catch(({ message }) => {
            console.log(message);
        })
})

router.put('/api/workouts/:id', (req, res) => {
    const body = req.body;

    db.Workout.updateOne(
        { _id: mongojs.ObjectId(req.params.id) },
        {
            $push: {
                exercises: {
                    type: body.type,
                    name: body.name,
                    distance: body.distance,
                    duration: body.duration,
                    weight: body.weight,
                    sets: body.sets,
                    reps: body.reps
                }
            }
        })
        .then(update => {
           res.json(update)
        }).catch(err => {
            res.status(400).json(err)
        })
})


router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    })
})

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    })
})
module.exports = router;