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
			<div class="filter-title" @click="showSourcesModal">
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
            <div class="iconfont icon-date"></div>
        </div> -->
			</div>
		</div>
		<div class="list-wrapper">
			<div v-for="(item,index) in items" class="item-wrapper">
				<div class="date-wrapper">{{item.date}}</div>
				<div class="sources-wrapper">
					<div v-for="(source,index2) in item.sources">
						<div class="item-source">
							<div class="item-source-name">{{source.name}} / {{source.phone}}</div>
							<div class="item-source-icon">
								<div class="iconfont icon-select"></div>
							</div>
						</div>
						<div v-for="(info,index3) in source.infos">
							<div class="trucks-wrapper" @click="navToDetail" :data-id="info.id">
								<div class="item-truck-license">{{info.license}}</div>
								<div class="item-truck-sum">运费：{{info.sum}}</div>
								<div class="item-truck-icon">
									<div class="iconfont icon-more"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
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
						sources: [{
								name: "小赵",
								phone: "13703655206",
								infos: [{
										id: "1",
										license: "辽A89833",
										sum: 34000
									},
									{
										id: "2",
										license: "辽C8454",
										sum: 34000
									},
									{
										id: "3",
										license: "黑A8644",
										sum: 34000
									}
								]
							},
							{
								name: "小刘",
								phone: "13703655206",
								infos: [{
									id: "4",
									license: "辽A89833",
									sum: 34000
								}]
							}
						]
					},
					{
						date: "08-11",
						sources: [{
							name: "小王",
							phone: "13703655206",
							infos: [{
									id: "5",
									license: "辽A89833",
									sum: 34000
								},
								{
									id: "6",
									license: "辽C8454",
									sum: 34000
								}
							]
						}]
					}
				]
			}
		},
		methods: {
			navToDetail(e) {
				var param = e.currentTarget.dataset.id;
				wx.navigateTo({
					url: "../../detail/freight/main?param=" + param
				});
			},
			showSourcesModal() {
				var that = this;
				//modal of expends type
				wx.showActionSheet({
					itemList: ['小王', '小赵', '小刘'],
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
		width: 100%;
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
	
	.item-source {
		height: 110rpx;
		line-height: 110rpx;
		background: rgb(237, 244, 248);
	}
	
	.item-source-name {
		float: left;
		width: 600rpx;
		padding-left: 50rpx;
	}
	
	.item-source-icon {
		float: left;
		width: 100rpx;
	}
	
	.trucks-wrapper {
		height: 120rpx;
		line-height: 120rpx;
		background: #fff;
		border-bottom: 1px solid #eee;
	}
	
	.item-truck-license {
		float: left;
		width: 400rpx;
		padding-left: 20rpx;
	}
	
	.item-truck-sum {
		float: left;
		width: 260rpx;
	}
	
	.item-truck-icon {
		float: left;
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