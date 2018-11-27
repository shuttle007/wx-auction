<template>
	<div class="detail-wrapper">
		<div class="item-wrapper">
			<div class="item-title">支付时间</div>
			<div class="item-detail">{{item.date}}</div>
		</div>
		<div class="item-wrapper">
			<div class="item-title">车辆来源</div>
			<div class="item-detail">{{item.truck_source}}</div>
		</div>
		<div class="item-wrapper">
			<div class="item-title">车牌号码</div>
			<div class="item-detail">{{item.truck_license}}</div>
		</div>
		<div class="item-wrapper">
			<div class="item-title">支付情况</div>
			<div class="item-detail">{{item.payed?"已付":"未付"}}</div>
		</div>
		<!-- 编辑和删除 -->
		<div class='edit-del-wrapper'>
			<div class='edit-btn' @click='navToEdit'>编辑</div>
			<div class='delete-btn' @click="showDelModal">删除</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				item: {
					date: "2018-09-04",
					truck_license: "黑A8544",
					truck_source: "小王",
					sum: "2000",
					payed: true
				}
			}
		},
		methods: {
			navToEdit(e) {
				wx.navigateTo({
					url: "../../edit/freight/main"
				});
			},
			showDelModal() {
				wx.showModal({
					title: '提示',
					content: '确认删除此记录？',
					success: function(res) {
						if(res.confirm) {
							console.log('是')
							//删除操作
						} else if(res.cancel) {
							console.log('已取消')
						}
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
		font-size: 46rpx;
	}
	
	.detail-wrapper {
		overflow: hidden;
		position: relative;
	}
	
	.item-header {
		height: 80rpx;
		line-height: 80rpx;
		padding-left: 3%;
	}
	
	.item-wrapper {
		height: 120rpx;
		line-height: 120rpx;
		border-bottom: 1px solid #ddd;
		background: #fff;
	}
	
	.item-detail,
	.item-title {
		float: left;
	}
	
	.item-title {
		width: 200rpx;
		padding-left: 20rpx;
		text-align: left;
	}
	
	.item-detail {
		width: 500rpx;
		color: rgb(129, 129, 129);
		padding-right: 30rpx;
		text-align: right;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.edit-del-wrapper {
		width: 730rpx;
		height: 120rpx;
		position: fixed;
		bottom: 20rpx;
		text-align: center;
		line-height: 120rpx;
		padding: 0 20rpx;
	}
	
	.edit-btn {
		float: left;
		width: 345rpx;
		color: #fff;
		margin-right: 20rpx;
		background: rgb(89, 226, 96);
	}
	
	.delete-btn {
		float: left;
		width: 345rpx;
		color: #fff;
		background: rgb(250, 124, 124);
	}
</style>