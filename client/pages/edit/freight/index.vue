<template>
	<div class="edit-wrapper">
		<div class="edit-item" @click="showDatePicker">
			<div class="item-tit">支出时间</div>
			<div class="item-section">{{item.date}}</div>
			<div class="item-unit">
				<div class="iconfont icon-more"></div>
			</div>
		</div>
		<div class="edit-item" @click="navToTruckSources">
			<div class="item-tit">车辆来源</div>
			<div class="item-section">{{ts}}</div>
			<div class='item-unit'>
				<div class='iconfont icon-more'></div>
			</div>
		</div>
		<div class="edit-item" @click='navToEdit' :data-param="item.truck_license">
			<div class="item-tit">车牌号码</div>
			<div class="item-section">{{item.truck_license}}</div>
			<div class='item-unit'>
				<div class='iconfont icon-more'></div>
			</div>
		</div>
		<div class="edit-item" @click='navToEdit' :data-param="item.sum">
			<div class="item-tit">支出金额</div>
			<div class="item-section">{{item.sum}}元</div>
			<div class='item-unit'>
				<div class='iconfont icon-more'></div>
			</div>
		</div>
		<!-- 保存按钮 -->
		<div class="edit-save" @click="saveEdit">保存</div>
		<!-- 遮罩层 -->
		<div class='mask' v-if="showDateModal"></div>
		<!-- 日期控件 -->
	</div>

</template>

<script>
	import globalStore from "../../../stores/global-store"
	export default {
		data() {
			return {
				item: {
					date: "2018-09-04",
					truck_license: "黑A8544",
					truck_source: {
						ts_name:"赵本山",
						ts_phone:"13703655206"
					},
					sum: "2000"
				},
				url: ""
			}
		},
		mounted(){
			globalStore.state.tsp = "";
			globalStore.state.tsn = "";
		},
		computed: {
			ts() {
				var ts = this.item.truck_source.ts_name;
				if(globalStore.state.tsp && globalStore.state.tsn) {
					ts = globalStore.state.tsn
				}
				return ts
			}
		},
		methods: {
			navToEdit(e) {
				var param = e.currentTarget.dataset.param;
				wx.navigateTo({
					url: '../edit/main?param=' + param,
				})
			},
			navToTruckSources() {
				//进入添加车辆来源页
				wx.navigateTo({
					url: '../../list/truckSources/main'
				});
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