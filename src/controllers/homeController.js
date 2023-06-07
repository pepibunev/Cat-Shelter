const router = require('express').Router();
const catsManager = require('../managers/catManager');

router.get('/', async (req, res) => {
    const cats = await catsManager.getAll();

    res.render('index', { cats });
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;