// TODO: Require Controllers...
const cubicController = require('../controllers/cubeController');
const accessoryController = require('../controllers/accessoryController')

module.exports = (app) => {
    app.get('/', cubicController.getHomePage);

    app.get('/about', cubicController.getAboutPage);

    app.get('/create', cubicController.getCreateCube);

    app.post('/create', cubicController.postCreateCube);

    app.get('/details/:cubeId', cubicController.getDetailsPage);

    app.get('/create/accessory', accessoryController.getAccessoryPage);
};