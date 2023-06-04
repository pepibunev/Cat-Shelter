const router = require('express').Router();

const catManager = require('../managers/catManager'); 

router.get('/add-breed', (req, res) => {
    res.render('addBreed');
});

router.get('/add-cat', (req, res) => {
    res.render('addCat');
});

router.post('/add-cat', (req, res) => {
    const {
        name,
        description,
        imageUrl,
        breed,
    } = req.body;

    catManager.create({
        name,
        description,
        imageUrl,
        breed,
    });
    res.redirect('/');
});

module.exports = router;