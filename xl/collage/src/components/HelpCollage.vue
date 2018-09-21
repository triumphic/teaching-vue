<template>
	<div id="container">
		<div class="collage_con">
			<user-info :userName = 'userName' :userImg = 'userImg'></user-info>
			<collage-commodity :commodityDetail = 'commodityDetail'></collage-commodity>
			<help-collage :goCollageData = 'goCollageData' :message = 'message'></help-collage>
			<partake-collage  :userList = 'friendsList'></partake-collage>
		</div>
		<take-good-goods takegoodgoods = '0'></take-good-goods>
		<collage-recommend @popup='popupReset'></collage-recommend>
		<popup :choice = 'choice' @reset="popupReset"></popup>
	</div>
</template>

<script>
	import UserInfo from './assembly/UserInfo'
	import CollageCommodity from './assembly/CollageCommodity'
	import PartakeCollage from './assembly/PartakeCollage'
	import CollageRecommend from './assembly/CollageRecommend'
	import HelpCollage from './assembly/GoHelpCollage'
	import TakeGoodGoods from './assembly/TakeGoodGoods'
	import Popup from './assembly/Popup'
	
	import { Indicator } from 'mint-ui';
	import { Toast } from 'mint-ui';
	
	export default {
		name:'invitingRegiment',
		components:{
			UserInfo,//用户信息
			CollageCommodity,//助力拼团商品
			PartakeCollage,//购买过这个商品的用户--动画
			CollageRecommend,//推荐商品列表
			HelpCollage,//去助力button
			TakeGoodGoods,//如何免费拿好货
			Popup,//弹窗
		},
		data () {
			return {
				choice:'0',
				userName:"",//发起人名字
				userImg:"",//发起人头像
				goods_id:'',//商品编号
				group_id:'',//拼团id
				token:'',
				commodityDetail:{},//拼团商品信息
				goCollageData:{},//拼团状态
				friendsList:[],//好友帮助列表
				message:'**',//淘口令
			}
		},
		created () {
			this.goods_id = this.$route.query.goods_id;
			this.group_id = this.$route.query.group_id;
			this.helpSpllGroupShow()
		},
		methods : {
			goPupop () {
				this.choice=5;
			},
			popupReset (data) {
		     	this.choice=data;
		    },
		    helpSpllGroupShow () {
		    	//好友砍价信息页面
		    	var _this = this;
		    	Indicator.open('加载中...');
		    	this.$axios({
		    		url: this.URL.BASEURL + this.URL.helpSpllGroupShow,
		    		method: 'post',
		    		data: {
		    			'goods_id': this.goods_id,
		    			'group_id': this.group_id
		    		}
		    	}).then((res) => {
		    		console.log(res)
		    		Indicator.close();
		    		res = res ? res.data : null;
		    		if(res && res.errno == 0){
		    			_this.userName = res.rst.name;
	   					_this.userImg = res.rst.user_pic;
	   					_this.commodityDetail = {"goods_title":res.rst.goods_title,"goods_price":res.rst.goods_price,"over_num":res.rst.over_num,"goods_img":res.rst.goods_img,"goods_id":res.rst.goods_id,"is_coupon":res.rst.is_coupon}
	   					_this.goCollageData = {'left_money':res.rst.left_money,'remain_time':res.rst.remain_time,'status':res.rst.status,'total_pop_price':res.rst.total_pop_price}
	   					_this.friendsList = res.rst.friendsList;
	   					_this.h5CopyOfTheNaughtyPassword (res.rst.goods_id,res.rst.user_id,res.rst.is_coupon)
		    		}else{
	   					Toast({
						  message: res.err,
						  duration: 1500
						});
	   				}
		    	})
		    },
		    h5CopyOfTheNaughtyPassword (goods_id,user_id,is_coupon) {
				//复制淘口令接口
				var _this = this;
				this.$axios({
					url: this.URL.BASEURL + this.URL.h5CopyOfTheNaughtyPassword,
					method: 'post',
					data: {
						'goods_id': goods_id,
						'user_id': user_id,
						'is_coupon': is_coupon
					}
				}).then((res) => {
					console.log(res);
					res = res ? res.data : null;
					if(res && res.errno == 0){
						_this.message = res.rst.data;
					}else{
						Toast({
						  message: res.err,
						  duration: 1500
						});
					}
				})
			},
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#container{
		min-height: calc(100% - 0.11rem);
		background: #FF2E2E;
		padding-top: 0.11rem;
		padding-bottom: 0.25rem;
	}
	.collage_con{
		width: 3.25rem;
		background: #FFFFFF;
		border-radius: 0.12rem;
		margin: auto;
		padding: 0.15rem 0.1rem;
	}
</style>!