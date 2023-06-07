const router = require('express').Router();

const catManager = require('../managers/catManager');
const breedManager = require('../managers/breedManager');

router.get('/add-cat', async (req, res) => {
    const breed = await breedManager.getAll();
    res.render('addCat', { breed});
});

router.post('/add-cat', async (req, res) => {
    const {
        imageUrl,
        name,
        breed,
        description,
    } = req.body;

    await catManager.create({
        imageUrl,
        name,
        breed,
        description,
    });
    res.redirect('/');
});

router.get('/:catId/edit', (req, res) => {
    const cat = catManager.getOne(req.params.catId);

    if (!cat) {
        return res.redirect('/404');
    }

    res.render('editCat', { cat });
});

router.get('/add-breed', (req, res) => {
    res.render('addBreed');
});

router.post('/add-breed', async (req, res) => {
    const { name } = req.body;

    await breedManager.create({
        name,
    });

    res.redirect('/');
});

router.get('/:catId/new-home', async (req, res) => {
    const cat = await catManager.getOne(req.params.catId).lean();
     
    res.render('newHome', { cat });
});

// router.delete('/:catId/new-home', async (req, res) => {
//     res.
// });


module.exports = router;