const DB = require('../utils/db.js')
module.exports = {
	/**
	 *新增出库记录
	 */
	add: async ctx => {
		let trans_info = ctx.request.body.trans_info;
		let auction_id = ctx.request.body.aid;
		//存入auction_order表
		
		//存入transorder表
		
		
		//		console.log('auction')
		//		console.log(auction)
		//		let auction_id = auction.insertId;
		//
		//		let sql = "INSERT INTO auction (auction_id,create_year,create_month,create_day,price,amount,waterin,trans_all,trans_now) VALUES ";
		//		let param = []
		//		let auctionInfo = ctx.request.body;
		//		param.push(auction_id);
		//		param.push(auctionInfo.create_year);
		//		param.push(auctionInfo.create_month);
		//		param.push(auctionInfo.create_day);
		//		param.push(auctionInfo.price);
		//		param.push(auctionInfo.amount);
		//		param.push(auctionInfo.waterin);
		//		param.push(auctionInfo.trans_all);
		//		param.push(auctionInfo.trans_now);
		//
		//		let res = await DB.query(sql + '(?,?,?,?,?,?,?,?,?)', param);
		//		ctx.state.data = {}
	}
}