const router = require('express').Router();

const catManager = require('../managers/catManager'); 

router.get('/add-cat', (req, res) => {
    res.render('addCat');
});

router.post('/add-cat', (req, res) => {
    const {
        imageUrl,
        name,
        breed,
        description,
    } = req.body;

    catManager.create({
        imageUrl,
        name,
        breed,
        description,
    });
    res.redirect('/');
});

router.get('/:catId/edit', (req, res) => {
    const cat = catManager.getOne(req.params.catId);
    
    if(!cat){
        return res.redirect('/404');
    }

    res.render('editCat');
});

router.get('/add-breed', (req, res) => {
    res.render('addBreed');
});



module.exports = router;