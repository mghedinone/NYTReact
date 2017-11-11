const router = require("express").Router();
const bookRoutes = require("./books");
const gradesRoutes = require("./grades");
const newsRoutes = require("./news");
// Book routes
router.use("/books", bookRoutes);
router.use("/grades", gradesRoutes);
router.use("/news", newsRoutes);


module.exports = router;
