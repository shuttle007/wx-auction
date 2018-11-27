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
			<div class="filter-title" @click="showCompaniesModal">
				<div class="filter-title-text">
					全部去向
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
					<div v-for="(info,i) in item.infos" class="infos-wrapper" @click="navToDetail" :data-id="info.id">
						<div class="item-company">
							<div class='item-company-tit'>去向单位</div>
							<div class='item-company-detail'>{{info.company}}</div>
						</div>
						<div class="item-sum">
							<div class='item-sum-tit'>装货吨数</div>
							<div class='item-sum-detail'>{{info.amount}}吨</div>
						</div>
						<div class="item-license">
							<div class='item-license-tit'>车牌号</div>
							<div class='item-license-detail'>{{info.license}}</div>
						</div>
						<div class='iconfont icon-more'></div>
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
					month: "7"
				},
				items: [{
						date: "07-21",
						infos: [{
								id: "1",
								company: "双胞胎牧业有限公司",
								amount: 30,
								license: "黑A3Q906"
							},
							{
								id: "2",
								company: "大牧人牧业有限公司",
								amount: 80,
								license: "黑AX1823"
							},
							{
								id: "3",
								company: "哈尔滨乐平牧业有限公司",
								amount: 40,
								license: "黑AL8533"
							}
						]
					},
					{
						date: "07-25",
						infos: [{
								id: "4",
								company: "双胞胎牧业有限公司",
								amount: 50,
								license: "黑AL8533"
							},
							{
								id: "5",
								company: "远大牧业有限公司",
								amount: 65,
								license: "黑A9897"
							}
						]
					}
				]
			}
		},
		methods: {
			navToDetail(e) {
				var param = e.currentTarget.dataset.id;
				wx.navigateTo({
					url: "../../detail/trans/main?param=" + param
				});
			},
			showCompaniesModal() {
				var that = this;
				//modal of expends type
				wx.showActionSheet({
					itemList: ['大牧人', '双胞胎', '海大'],
					success: function(res) {
						var type = "filters.type";
						switch(res.tapIndex) {
							case 0:
								that.setData({

								});
								break;
							case 1:
								that.setData({

								});
								break;
							case 2:
								that.setData({

								});
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
		min-height: 100%;
		background-color: rgb(245, 245, 247);
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
		width: 100%;
		overflow: hidden;
		font-size: 40rpx;
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
	
	.item-wrapper .infos-wrapper {
		height: 300rpx;
		line-height: 100rpx;
		background: #fff;
		border-bottom: 1px solid #ddd;
		position: relative;
	}
	
	.icon-more {
		position: absolute;
		top: 110rpx;
		right: 30rpx;
	}
	
	.item-company,
	.item-sum,
	.item-license {
		overflow: hidden;
	}
	
	.item-company-tit,
	.item-company-detail,
	.item-sum-tit,
	.item-sum-detail,
	.item-license-tit,
	.item-license-detail {
		float: left;
	}
	
	.item-company-tit,
	.item-sum-tit,
	.item-license-tit {
		width: 200rpx;
		padding-left: 20rpx;
		text-align: left;
	}
	
	.item-company-detail,
	.item-sum-detail,
	.item-license-detail {
		width: 530rpx;
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