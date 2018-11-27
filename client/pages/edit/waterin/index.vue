<template>
	<div class="edit-auction-wrapper">
		<!-- waterin -->
		<div class="edit-auction-item">
			<div class="edit-auction-tit">贴水贴杂</div>
			<div class="edit-auction-section">
				<input v-model="waterin" />
			</div>
			<div class="edit-auction-unit">个</div>
		</div>
		<!-- 保存按钮 -->
		<div class="edit-auction-save" @click="saveEditWaterin">保存</div>

	</div>
</template>

<script>
	import globalStore from "../../../stores/global-store";
	export default {
		data() {
			return {
				waterin:""
			}
		},
		methods: {
			saveEditWaterin(){
				globalStore.commit("get_waterin",this.waterin)
				console.log(this.waterin);
				wx.navigateBack({
					delta: 1 //返回上一级页面
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
	
	.edit-auction-wrapper {
		font-size: 46rpx;
		padding-top: 30rpx;
		overflow: hidden;
		position: relative;
	}
	
	.edit-auction-item {
		width: 750rpx;
		height: 120rpx;
		margin-bottom: 30rpx;
		background: #fff;
		overflow: hidden;
	}
	
	.edit-auction-tit,
	.edit-auction-section,
	.edit-auction-unit {
		display: block;
		height: 120rpx;
		line-height: 120rpx;
		background: #fff;
	}
	
	.edit-auction-tit {
		float: left;
		width: 250rpx;
		padding-left: 20rpx;
		text-align: center;
	}
	
	.edit-auction-section {
		width: 380rpx;
		float: left;
		text-align: right;
	}
	
	.edit-auction-unit {
		float: right;
		width: 100rpx;
		text-align: center;
	}
	
	.edit-auction-section input {
		height: 120rpx;
		line-height: 120rpx;
		display: block;
		background: #fff;
		color: #999;
	}
	
	.icon-date {
		font-size: 20px;
	}
	
	.edit-auction-save {
		width: 100%;
		height: 120rpx;
		position: fixed;
		bottom: 0;
		text-align: center;
		line-height: 120rpx;
		background: #3396fb;
		color: #fff;
	}
</style>