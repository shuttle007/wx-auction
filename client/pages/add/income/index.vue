<template>
	<div class="add-wrapper">
		<!-- date -->
		<div class="add-date-item index_picker">
			<picker mode="date" :value="pickDate" :start="startDate" :end="endDate" @change="bindChange($event)">
				<span class="add-tit">回款时间</span>
				<div class="add-section">{{ pickDate }}</div>
				<div class="add-unit">
					<div class="iconfont icon-more"></div>
				</div>
			</picker>
		</div>
		<!-- company -->
		<div class="add-item-header">来源公司</div>
		<div class="add-item" @click="navToCompanies">
			<div class="add-section">{{comp}}</div>
			<div class="add-unit">
				<div class="iconfont icon-more"></div>
			</div>
		</div>
		<!-- sum -->
		<div class="add-item-line">
			<div class='add-tit'>回款金额（元）</div>
			<div class="add-section">
				<input placeholder="请输入" v-model="item.unitprice" />
			</div>
		</div>
		<!-- 保存按钮 -->
		<div class="add-save" @click="saveAdd">保存</div>
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
				startDate: '2000-01-01',
				endDate: '2200-12-31',
				pickDate: '',
				item: {
					year: "",
					month: "",
					day: "",
					date: "",
					company: "请选择",
					sum: ""
				},
				url: ""
			}
		},
		onShow() {
			//清空数据
			this.pickDate = this.getDateofAll().today;
			this.item = {};
			this.item.company = "请选择";
		},
		mounted(){
			//初始化数据
			this.pickDate = this.getDateofAll().today;
			this.item.year = this.getDateofAll().year;
			this.item.month = this.getDateofAll().month;
			this.item.day = this.getDateofAll().day;
		},
		computed: {
			comp(){
				var comp = "请选择";
				if(globalStore.state.comp) {
					comp = globalStore.state.comp;
				}
				return comp
			}
		},
		methods: {
			getDateofAll() {
				let myDate = new Date();
				let myMonth = myDate.getMonth() + 1;
				if(myMonth < 10) {
					myMonth = '0' + myMonth; //补齐
				}
				let mydate = myDate.getDate();
				if(myDate.getDate() < 10) {
					mydate = '0' + myDate.getDate(); //补齐
				}
				let today = myDate.getFullYear() + '-' + myMonth + '-' + mydate;
				return {
					year: myDate.getFullYear(),
					month: myMonth,
					day: mydate,
					today: today
				}
			},
			bindChange(e) {
				console.log(e.target.value)
//				this.item.date = e.target.value;
				this.pickDate = e.target.value;
				this.item.year = e.target.value.split('-')[0];
				this.item.month = e.target.value.split('-')[1];
				this.item.day = e.target.value.split('-')[2];
			},
			navToCompanies() {
				// 进入客户单位
				wx.navigateTo({
					url: "../../list/companies/main"
				});
			},
			saveAdd() {
				//回到标的正文页
				wx.navigateBack({
					delta:1
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
	
	.icon-more {
		color: #868686;
	}
	
	.add-wrapper {
		overflow: hidden;
		position: relative;
	}
	/* 类别条目 */
	
	.add-item-type {
		height: 120rpx;
		line-height: 120rpx;
		margin-top: 30rpx;
		background: #fff;
	}
	
	.add-item-type .add-tit,
	.add-item-type .add-section,
	.add-item-type .add-unit {
		height: 120rpx;
		line-height: 120rpx;
		text-align: right;
		float: left;
	}
	
	.add-item-type .add-tit {
		width: 200rpx;
		padding-left: 20rpx;
		text-align: left;
	}
	
	.add-item-type .add-section {
		float: left;
		color: #868686;
		width: 420rpx;
		text-align: right;
	}
	
	.add-item-type .add-unit {
		float: right;
		width: 110rpx;
		text-align: center;
	}
	/* 时间条目 */
	
	.add-date-item {
		margin-top: 30rpx;
		background: #fff;
		overflow: hidden;
		width: 750rpx;
		height: 120rpx;
	}
	
	.add-date-item .add-tit,
	.add-date-item .add-section,
	.add-date-item .add-unit {
		height: 120rpx;
		line-height: 120rpx;
		text-align: right;
		float: left;
	}
	
	.add-date-item .add-tit {
		width: 220rpx;
		text-align: center;
	}
	
	.add-date-item .add-section {
		float: left;
		color: #868686;
		width: 420rpx;
		text-align: right;
	}
	
	.add-date-item .add-unit {
		float: right;
		width: 110rpx;
		text-align: center;
	}
	/* 一行条目 */
	
	.add-item-line {
		width: 750rpx;
		height: 120rpx;
		background: #fff;
		overflow: hidden;
		margin-top: 30rpx;
	}
	
	.add-item-line .add-tit,
	.add-item-line .add-section {
		height: 120rpx;
		line-height: 120rpx;
	}
	
	.add-item-line .add-tit {
		width: 400rpx;
		float: left;
		text-align: left;
		padding-left: 20rpx;
	}
	
	.add-section {
		width: 330rpx;
		text-align: right;
		float: right;
		color: #868686;
	}
	
	.add-section input {
		height: 120rpx;
		line-height: 120rpx;
		display: block;
		width: 280rpx;
		text-align: right;
		padding-right: 50rpx;
	}
	/* 车牌号码 */
	
	.add-item-license {
		height: 120rpx;
		line-height: 120rpx;
		margin-top: 30rpx;
		background: #fff;
	}
	
	.add-item-license .add-tit,
	.add-item-license .add-license,
	.add-item-license .add-section {
		height: 120rpx;
		line-height: 120rpx;
	}
	
	.add-item-license .add-tit {
		width: 210rpx;
		float: left;
		text-align: left;
		padding-left: 20rpx;
	}
	
	.add-item-license .add-license {
		width: 100rpx;
		float: left;
	}
	
	.add-section-province {
		width: 80rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-indent: 10rpx;
		color: #009beb;
		margin: 20rpx auto;
		border: 1px solid #81b6e2;
		background: #d7edff;
		margin-bottom: 0;
		position: relative;
		border-radius: 6rpx;
	}
	
	.add-section-province .icon-triangle {
		position: absolute;
		bottom: -22rpx;
		right: 2rpx;
		font-size: 14px;
	}
	
	.add-item-license .add-section {
		width: 420rpx;
		float: left;
	}
	
	.add-item-license .add-section input {
		display: block;
		height: 120rpx;
		width: 370rpx;
		padding-right: 50rpx;
		line-height: 120rpx;
	}
	/* 两行条目 */
	
	.add-item-header {
		/* font-size: 40rpx; */
		padding: 20rpx;
	}
	
	.add-item {
		width: 750rpx;
		height: 120rpx;
		background: #fafafa;
		overflow: hidden;
		border-bottom: 1px solid rgb(241, 241, 241);
		border-top: 1px solid rgb(241, 241, 241);
	}
	
	.add-item .add-section,
	.add-item .add-unit {
		height: 120rpx;
		line-height: 120rpx;
	}
	
	.add-item .add-section {
		width: 620rpx;
		float: left;
		text-align: left;
		padding-left: 20rpx;
		color: #868686;
	}
	
	.add-item .add-unit {
		float: right;
		width: 110rpx;
		text-align: center;
	}
	
	.add-save {
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
		background: #fff;
	}
	
	.datepicker-header {
		/* background: #fff; */
		height: 2rem;
		width: 100%;
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
	
	.item-info {
		height: 80rpx;
		line-height: 80rpx;
		padding-left: 20rpx;
		font-size: 44rpx;
		color: #868686;
	}
</style>