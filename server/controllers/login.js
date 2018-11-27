const DB = require('../utils/db.js')
// 登录授权接口
module.exports = async(ctx, next) => {

	if(ctx.state.$wxInfo.loginState) {
		let userInfo = ctx.state.$wxInfo.userinfo.userinfo;
		console.log(userInfo)
		//查询数据库有没有这个用户，没有就插入此用户id，存储用户信息到user表
		let hasornot = await DB.query("SELECT user_openid FROM user where user_openid='" + userInfo.openId + "';");
		if(hasornot.length == 0) {
			console.log('用户首次登录小程序,信息存入ing...')
			let sql = "INSERT INTO user (user_openid,nick_name,login_count) VALUES ";
			let param = []
			param.push(userInfo.openId);
			param.push(userInfo.nickName);
			param.push(0);

			let res = await DB.query(sql + '(?,?,?)', param);
			console.log("用户信息存入成功");

		} else {
			console.log('用户已登录过此小程序')
			let userInfo = ctx.state.$wxInfo.userinfo.userinfo;
			let res = await DB.query("SELECT login_count FROM user where user_openid='" + userInfo.openId + "';");
			let count = res[0].login_count + 1;
			let user = await DB.query("UPDATE `user` set login_count='" + count + "' where user_openid='" + userInfo.openId + "';");

		}
		// 通过 Koa 中间件进行登录之后
		// 登录信息会被存储到 ctx.state.$wxInfo
		// 具体查看：
		ctx.state.data = ctx.state.$wxInfo.userinfo
		ctx.state.data['time'] = Math.floor(Date.now() / 1000)
	} else {
		ctx.state.code = -1
	}

}