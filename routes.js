const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const bookController = require("./controllers/bookController");
const messageController = require("./controllers/messageController");
const connectEnsureLogin = require('connect-ensure-login');
const passport = require('passport');

router.get('/', connectEnsureLogin.ensureLoggedIn(), homeController.getDashboard);
router.get('/login', homeController.getLogin);
router.get('/logout', connectEnsureLogin.ensureLoggedIn(),  homeController.logOut);
router.get("/book-list", connectEnsureLogin.ensureLoggedIn(), bookController.getBookList);
router.get("/books", connectEnsureLogin.ensureLoggedIn(), bookController.getBook);
router.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), homeController.getDashboard);
router.get('/register', homeController.getRegister);
router.post('/register', homeController.postRegister);
router.post("/books", connectEnsureLogin.ensureLoggedIn(), bookController.postBook);
router.post(
	'/login',
	passport.authenticate('local', {
		failureRedirect: '/login',
		successRedirect: '/dashboard',
	}), homeController.postLogin);
router.get("/send-message", connectEnsureLogin.ensureLoggedIn(), messageController.getSendMessage);
router.post("/send-message", connectEnsureLogin.ensureLoggedIn(), messageController.postSendMessage);
router.get("/messages", connectEnsureLogin.ensureLoggedIn(), messageController.getMessages);
router.get("/messages/:id", connectEnsureLogin.ensureLoggedIn(), messageController.getMessagesForUser);

module.exports = router;
