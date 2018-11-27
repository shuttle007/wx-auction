const DB = require('../utils/db.js')
module.exports = {
	list: async ctx => {
		let user_openid = ctx.state.$wxInfo.userinfo.openId
		//根据openid获取user的标的列表
		let list = await DB.query("SELECT auction_id FROM auction_user where user_openid='" + user_openid + "';");
		let results = [];
		for(var i=0;i<list.length;i++){
			let item = await DB.query("SELECT * FROM auction where auction_id='" + list[i].auction_id + "';");
			results.push(item[0]);
		}
		console.log(ctx.state)
		ctx.state.data = results;
	}
}