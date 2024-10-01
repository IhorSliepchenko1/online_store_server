const Router = require(`express`);
const router = new Router();

const userRoutes = require(`./userRoutes.js`);
const typeRoutes = require(`./typeRoutes.js`);
const brandRoutes = require(`./brandRoutes.js`);
const deviceRoutes = require(`./deviceRoutes.js`);

router.use(`/user`, userRoutes);
router.use(`/type`, typeRoutes);
router.use(`/brand`, brandRoutes);
router.use(`/device`, deviceRoutes);

module.exports = router;
