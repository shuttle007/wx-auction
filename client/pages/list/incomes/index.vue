<template>
	<div>
		<div class="filter-wrapper">
			<div class="filter-date">
				<div class="filter-date-year">{{filters.year}}年</div>
				<div class="filter-date-month" @click="showDatePicker">
					{{filters.month}}月
					<div class="iconfont icon-select"></div>
				</div>
			</div>
			<div class="filter-title" @click="showTypeModal">
				<div class="filter-title-text">
					全部来源
					<div class="iconfont icon-select"></div>
				</div>
			</div>
			<div class="filter-others">
				<div class="filter-others-search">
					<div class="iconfont icon-search"></div>
				</div>
				<!-- <div class="filter-others-dateplus">
            <text class="iconfont icon-date"></text>
        </div> -->
			</div>
		</div>
		<div class="list-wrapper">
			<div v-for="(item,index) in items" class="item-wrapper">
				<div class="date-wrapper">{{item.date}}</div>
				<div v-for="(company,i) in item.companies" class="companies-wrapper" @click="navToDetail" :data-id="info.id">
					<div class="item-company" :title="company.company_name">{{company.company_name}}</div>
					<div class="item-sum">{{company.company_sum}}</div>
					<div class='item-icon'>
						<div class='iconfont icon-more'></div>
					</div>
				</div>
			</div>
		</div>
		<!-- 遮罩层 -->
		<div class='mask' v-if="showDateModal"></div>
		<!-- 日期控件 -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				filters: {
					year: "2018",
					month: "8"
				},
				items: [{
						date: "08-01",
						companies: [{
								id: "1",
								company_name: "黑龙江双胞胎牧业有限公司",
								company_sum: 100000
							},
							{
								id: "2",
								company_name: "大牧人牧业有限公司",
								company_sum: 120000
							},
							{
								id: "3",
								company_name: "海大牧业有限公司",
								company_sum: 120000
							}
						]
					},
					{
						date: "08-11",
						companies: [{
								id: "4",
								company_name: "海大牧业有限公司",
								company_sum: 80000
							},
							{
								id: "5",
								company_name: "远大牧业有限公司",
								company_sum: 220000
							}
						]
					}
				]
			}
		},
		methods: {
			navToDetail(e) {
				var id = e.currentTarget.dataset.id;
				wx.navigateTo({
					url: "../../detail/income/main?id=" + id
				});
			},
			showTypeModal() {
				var that = this;
				//modal of expends type
				wx.showActionSheet({
					itemList: ['大牧人牧业有限公司', '海大牧业有限公司', '双胞胎牧业有限公司'],
					success: function(res) {
						var type = "filters.type";
						switch(res.tapIndex) {
							case 0:
								that.setData({
									[type]: "类别（送礼）"
								});
								//送礼列表
								break;
							case 1:
								that.setData({
									[type]: "类别（请客）"
								});
								//请客吃饭列表
								break;
							case 2:
								that.setData({
									[type]: "类别（其他）"
								});
								//其他
								break;
							case 3:
								//取消
								break;
						}
					},
					fail: function(res) {
						console.log(res.errMsg)
						console.log('已取消');
					}
				})
			}
		}
	}
</script>

<style>
	page {
		display: block;
		min-height: 120%;
		background-color: rgb(245, 245, 247);
		font-size: 40rpx;
	}
	
	.filter-wrapper {
		height: 140rpx;
		background: rgb(240, 247, 248);
		color: rgb(68, 74, 86);
	}
	
	.filter-date,
	.filter-title {
		float: left;
		height: 140rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
	}
	
	.filter-date {
		width: 250rpx;
		padding-top: 20rpx;
	}
	
	.filter-title {
		width: 350rpx;
		line-height: 140rpx;
	}
	
	.filter-others {
		float: left;
		height: 140rpx;
		width: 130rpx;
		padding-left: 20rpx;
		overflow: hidden;
		text-align: center;
	}
	
	.filter-others-search {
		float: left;
		width: 95rpx;
		height: 140rpx;
		line-height: 140rpx;
		text-align: center;
	}
	/* .filter-others-dateplus{
    float: left;
    width: 95rpx;
    height: 140rpx;
    line-height: 140rpx;
    text-align: center;
} */
	
	.icon-search,
	.icon-date {
		font-size: 26px;
	}
	
	.list-wrapper {
		width: 750rpx;
		overflow: hidden;
	}
	
	.item-wrapper {
		overflow: hidden;
	}
	
	.date-wrapper {
		height: 100rpx;
		padding-left: 30rpx;
		background: #3396fb;
		line-height: 100rpx;
		color: #fff;
	}
	
	.companies-wrapper {
		height: 120rpx;
		line-height: 120rpx;
		background: #fff;
		border-bottom: 1px solid #ddd;
	}
	
	.item-company {
		float: left;
		width: 480rpx;
		padding-left: 20rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.item-sum {
		float: left;
		width: 180rpx;
		text-align: right;
	}
	
	.item-icon {
		float: left;
		text-align: center;
		width: 70rpx;
	}
	/* 遮罩层 */
	
	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		background-color: #999;
		z-index: 200;
		top: 0;
		left: 0;
		opacity: 0.5;
	}
</style>