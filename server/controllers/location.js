const DB = require('../utils/db.js')
module.exports = async ctx => {
	let user_openid = ctx.state.$wxInfo.userinfo.openId
	console.log(user_openid);

	let location = ctx.request.body;

	let user = await DB.query("UPDATE `user` set latitude='" + location.latitude + "',longitude='" + location.longitude + "',province='" + location.province + "',city='" + location.city + "',area='" + location.area + "' where user_openid='" + user_openid + "';");
	ctx.state.data = {}

}