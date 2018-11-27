const DB = require('../utils/db.js')
module.exports = {
	/**
	 *创建auction 
	 */
	add: async ctx => {
		let user_openid = ctx.state.$wxInfo.userinfo.openId
		//		//插入auction至auction_user表
		let auction = await DB.query("insert into `auction_user` (`user_openid`) values (?)", [user_openid])
		console.log('auction')
		console.log(auction)
		let auction_id = auction.insertId;

		let sql = "INSERT INTO auction (auction_id,create_year,create_month,create_day,price,amount,waterin,trans_all,trans_now) VALUES ";
		let param = []
		let auctionInfo = ctx.request.body;
		param.push(auction_id);
		param.push(auctionInfo.create_year);
		param.push(auctionInfo.create_month);
		param.push(auctionInfo.create_day);
		param.push(auctionInfo.price);
		param.push(auctionInfo.amount);
		param.push(auctionInfo.waterin);
		param.push(auctionInfo.trans_all);
		param.push(auctionInfo.trans_now);

		let res = await DB.query(sql + '(?,?,?,?,?,?,?,?,?)', param);
		ctx.state.data = {}
	},
	del: async ctx => {

	},
	getById: async ctx => {
		let auction_id = ctx.request.body.aid;
		let auction = await DB.query("SELECT * FROM auction where auction_id='" + auction_id + "';");
		ctx.state.data = auction[0]
	}
}