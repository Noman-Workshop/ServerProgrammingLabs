const passport = require('passport');
const UserDetails = require('../models/userDetails');

const getHome = (req, res) => {
	res.render('index', { title: 'Home' });
};

const getLogin = (req, res) => {
	res.render('login', { title: 'Login' });
};

const postLogin = (req, res) => {
	console.log(req.user);
}

const getDashboard = (req, res) => {
	res.render('dashboard', { title: 'Dashboard' })
}

const logOut = (req, res) => {
	req.logout(() => {
		console.log("Logging out!")
	});
	res.redirect('/');
}

const getRegister = (req, res) => {
	res.render('register');
}

const postRegister = (req, res) => {
	console.log(req.body);
	UserDetails.register({ username: req.body.username, active: false }, req.body.password, (err, user) => {
		if (err) {
			console.log(err);
			res.redirect('/register');
		} else {
			console.log(user);
			passport.authenticate('local')(req, res, () => {
				res.redirect('/dashboard');
			});
		}
	});
}


module.exports = { getHome, getLogin, postLogin, getDashboard, logOut, getRegister, postRegister };
