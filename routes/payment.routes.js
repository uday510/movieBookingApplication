const paymentController = require("../controllers/payment.controller");
const {authTheatre} = require("../middlewares/index");
const {authMovie} = require("../middlewares/index");
const {authBooking} = require("../middlewares/index");
const {authUser} = require("../middlewares/index");
const {authPayment} = require("../middlewares/index");



module.exports = (app) => {

app.post("/mba/api/v1/payments/", [authUser.verifyToken, authPayment.isValidBookingDetails], paymentController.makePayment);

}