<template>
	<div class="edit-wrapper">
		<div class="edit-item" @click="showDatePicker">
			<div class="item-tit">成交时间</div>
			<div class="item-section">{{year}}/{{month}}/{{day}}</div>
			<div class="item-unit">
				<div class="iconfont icon-more"></div>
			</div>
		</div>
		<!-- sum -->
		<div class="edit-item" @click="navToEdit" :data-param="auction.sum">
			<p class="item-tit">成交金额</p>
			<div class="item-section">
				{{auction.sum}}元
			</div>
			<div class='item-unit'>
				<div class='iconfont icon-more'></div>
			</div>
		</div>
		<!-- amount -->
		<div class="edit-item" @click="navToEdit" :data-param="auction.amount">
			<p class="item-tit">成交总量</p>
			<div class="item-section">
				{{auction.amount}}吨
			</div>
			<div class='item-unit'>
				<div class='iconfont icon-more'></div>
			</div>
		</div>
		<!-- waterin -->
		<div class="edit-item" @click="navToEdit" :data-param="auction.waterin">
			<div class="item-tit">贴水贴杂</div>
			<div class="item-section">
				{{auction.waterin}}个
			</div>
			<div class='item-unit'>
				<div class='iconfont icon-more'></div>
			</div>
		</div>
		<!-- 保存按钮 -->
		<div class="edit-save" @click="saveEdit">保存</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				auction: {
					date: "2018年9月8日",
					sum: "1340",
					amount: "800",
					waterin: "20"
				},
				url: ""
			}
		},
		methods: {
			saveEditAuction() {
				this.auction.date = this.year + " " + this.month + " " + this.day
				// 提交信息
//				util.ajax(url, auction, 'POST', res => {
//
//				});
				//回到标的列表页
				wx.navigateTo({
					url: '../startlist/main',
				})
			},
			navToEdit(e) {
				var param = e.currentTarget.data.param;

				//进入编辑页
				wx.navigateTo({
					url: '../edit/main?param=' + param,
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
	
	.edit-wrapper {
		padding-top: 30rpx;
		overflow: hidden;
		position: relative;
	}
	
	.edit-item {
		width: 750rpx;
		height: 120rpx;
		margin-bottom: 30rpx;
		background: #fff;
		overflow: hidden;
	}
	
	.edit-item .item-tit,
	.edit-item .item-section,
	.edit-item .item-unit {
		display: block;
		height: 120rpx;
		line-height: 120rpx;
	}
	
	.edit-item .item-tit {
		width: 350rpx;
		float: left;
		padding-left: 20rpx;
		text-align: left;
	}
	
	.edit-item .item-section {
		float: left;
		color: #868686;
		width: 270rpx;
		text-align: right;
	}
	
	.edit-item .item-unit {
		width: 100rpx;
		float: left;
		text-align: center;
	}
	
	.item-section {
		width: 180rpx;
		float: left;
		text-align: left;
		color: rgb(102, 102, 102);
	}
	
	.item-unit {
		float: right;
		width: 80rpx;
	}
	
	.icon-date {
		font-size: 20px;
	}
	
	.edit-save {
		width: 100%;
		height: 120rpx;
		position: fixed;
		bottom: 0;
		text-align: center;
		line-height: 120rpx;
		background: #3396fb;
		color: #fff;
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
	
	.datepicker {
		width: 100%;
		bottom: 0;
		position: fixed;
		z-index: 201;
	}
	
	.datepicker-header {
		background: #fff;
		height: 2rem;
		line-height: 2rem;
		display: flex;
		flex-direction: row;
	}
	
	.datepicker-header-item {
		flex: 1;
		text-align: center;
	}
	
	.datepicker-header-cancel {
		text-align: left;
		text-indent: 1rem;
	}
	
	.datepicker-header-confirm {
		text-align: left;
		text-indent: 4rem;
	}
</style>