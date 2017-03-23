
var user = require('./postUsers.controller');

module.exports = function (app) {


app.route('/postUsers')
    .post(user.createUsers);
// app.route('/postUsers')
//     .post(user.createUsers);
app.route('/postUsers/:filename')
    .get(user.read);
// app.route('/test')
// 	.get(user.test);
app.route('/all/users')
	.get(user.getUserAll);
app.route('/g/:username')
	.get(user.getUser);
app.route('/g/delete/:username')
	.delete(user.deleteUsers);
app.route('/g/update/:username')
	.post(user.updateUsers);
};