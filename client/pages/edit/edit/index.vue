<template>
	<div class="edit-wrapper">
		<div class="item-wrapper">
			<input type="text" class="item-input" v-model="value" auto-focus />
		</div>
		<div class="edit-save" @click="saveEdit">完成</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: ""
			}
		},
//		created(options) {
//			console.log(options)
//			this.value = options.param
//			console.log(this.value)
//		},
		methods: {
			saveEdit() {
				console.log('已保存');
				//传后台成功后进行跳转页面
				//...
			}
		}
	}
</script>

<style>
	page {
		display: block;
		min-height: 100%;
		background-color: rgb(245, 245, 247);
		position: relative;
	}
	
	.edit-wrapper {
		padding-top: 30rpx;
		height: 120rpx;
		line-height: 120rpx;
		font-size: 46rpx;
		overflow: hidden;
		position: relative;
	}
	
	.item-input {
		height: 120rpx;
		width: 100%;
		background: #fff;
		padding: 5rpx 0 5rpx 20rpx;
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
</style>