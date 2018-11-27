/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
//var host = 'https://5ohemy0f.qcloud.la';
var host = 'http://localhost:5757';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`,
        
        // 拉取用户信息
    	user: `${host}/weapp/user`,
    	
    	// 获取用户标的列表
    	auctions: `${host}/weapp/auctions`,
    	//	创建标的
    	addAuction:`${host}/weapp/auction/add`,
    	//	删除标的
    	delAuction:`${host}/weapp/auction/del`,
    	// 存入location
    	location:`${host}/weapp/location`,
    	
    	//添加出库信息
    	addTrans:`${host}/weapp/trans/add`,
    }
};

module.exports = config;
