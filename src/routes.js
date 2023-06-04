const router = require('express').Router();

const homeController = require('./controllers/homeController');
const catController = require('./controllers/catsController');

router.use(homeController);
router.use('/cats', catController);

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;