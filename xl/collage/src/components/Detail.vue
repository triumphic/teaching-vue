<template>
	<div id="container">
		<banner :bannerData = 'bannerList'></banner>
		<div class="detailInfo">
			<div class="detail_one">
				<span><i>{{volume}}人</i>已免费拿</span>
				<span>价值{{price}}元</span>
			</div>
			<h3>{{title}}</h3>
			<div class="collage_gl">
				<div><span><i></i>拼团免费拿</span><span @click="goPupop(4)">免单攻略</span></div>
				<div>邀请好友，免费得好货</div>
			</div>
		</div>
		<collage-recommend @popup='popupReset'></collage-recommend>
		<div class="detail-bottom">
			<div class="more" @click="goCommodityList">免费拿更多</div>
			<div class="collage" @click="launchSpellGroup">拼团免费拿</div>
		</div>
		<popup :choice = 'choice' @reset="popupReset"></popup>
	</div>
</template>

<script>
	import Banner from './detailAssembly/BannerDetail'
	import CollageRecommend from './assembly/CollageRecommend'
	import Popup from './assembly/Popup'
	
	import { Indicator } from 'mint-ui';
	import { Toast } from 'mint-ui';
	
	export default {
		name:'detail',
		components:{
			Banner,
			CollageRecommend,
			Popup//弹窗
		},
		data () {
			return {
				bannerList:[],
				choice:'0',
				goods_id:'',//商品id
				is_coupon:'',//1有优惠券 0无优惠券
				volume:'',//多少人以拿
				price:'',//价格
				title:'',//商品描述
				token:'',
			}
		},
		created () {
			this.goods_id = this.$route.query.goods_id;
			this.is_coupon = this.$route.query.is_coupon;
			this.token = localStorage.getItem('token');
			this.tdetail();
		},
		mounted () {
		},
		methods: {
			goPupop (num) {
				this.choice=num;
			},
			popupReset (data) {
		     	this.choice=data;
		    },
		    //免费拿更多
		    goCommodityList () {
		    	this.$router.push({path:'/'})
		    },
		     //拼团免费拿   去邀请好友页
		    launchSpellGroup () {
		    	//发起拼团接口
		    	var _this = this;
		    	this.$axios({
		    		url: this.URL.BASEURL + this.URL.launchSpellGroup,
		    		method:'post',
		    		headers:{
		    			token:this.token
		    		},
		    		data:{
		    			'goods_id':this.goods_id
		    		}
		    	}).then((res) => {
		    		res = res ? res.data : null;
		    		if(res && res.errno == 0){
						_this.$router.push({path:'/invitingRegiment',query:{goods_id:res.rst.goods_id,group_id:res.rst.group_id,time:(new Date()).getTime()}});
		    		}else if(res.errno == 2008){//9001 该商品正在拼团   2008 用户不存在  9002 商品不存在
		    			_this.goPupop (5);
		    		}else {
		    			Toast({
						  message: res.rst.msg,
						  duration: 1500
						});
		    		}
		    	})
		    },
		    //详情信息
		    tdetail () {
			   	Indicator.open('加载中...');
			   	var _this = this;
			   	this.$axios({
			   		url: this.URL.BASEURL + this.URL.tdetail,
			   		method: 'post',
			   		data: {
			   			'goods_id':this.goods_id,
			   			'is_coupon':this.is_coupon,
			   		}
			   	}).then((res) => {
			   		Indicator.close();
			   		res = res ? res.data : null;
			   		if(res && res.errno == 0) {
			   			_this.bannerList = res.rst.data.small_img;
			   			_this.volume = res.rst.data.volume;
			   			_this.price = res.rst.data.price;
			   			_this.title = res.rst.data.title;
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
	background: #FFFFFF;
	padding-bottom: 0.49rem;
}
.detail_one{
	margin-top: 0.09rem;
	margin-left: 0.15rem;
	span{
		&:nth-of-type(1){
			color: #FB3D38;
			font-size: 0.14rem;
			i{
				font-size: 0.18rem;
			}
		}
		&:nth-of-type(2){
			color: #BEBDBD;
			font-size: 0.11rem;
			margin-left: 0.22rem;
		}
	}
}
.detailInfo{
	h3{
		font-size: 0.16rem;
		color: #333333;
		margin-left: 0.16rem;
		line-height: 0.26rem;
		margin-top: 0.19rem;
		margin-bottom: 0.19rem;
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		/*! autoprefixer: off */
		 -webkit-box-orient: vertical;
		/* autoprefixer: on */
		-webkit-line-clamp:2; 
	}
	.collage_gl{
		padding: 0 0.15rem;
		height: 0.7rem;
		background: rgba(255,46,46,0.13);
		div{
			&:nth-of-type(1){
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 0.08rem;
				span{
					font-size: 0.15rem;
					color: #FF2E2E;
					&:nth-of-type(1){
						i{
							display: inline-block;
							width: 0.21rem;
							height: 0.21rem;
							vertical-align: bottom;
							margin-right: 0.05rem;
							background: url(../assets/img/collage.png) no-repeat;
							background-size:100% 100% ;
						}
					}
					&:nth-of-type(2){
						color: #42210B;
						font-size: 0.12rem;
						text-decoration: underline;
					}
				}
			}
			&:nth-of-type(2){
				font-size: 0.13rem;
				color: #333333;
				margin-top: 0.17rem;
			}
		}
	}
}
.detail-bottom{
	width: 100%;
	height: 0.49rem;
	display: flex;
	position: fixed;
	bottom: 0;
	border-top: 0.01rem solid #CCCCCC;
	div{
		width: 50%;
		height: 100%;
		line-height: 0.49rem;
		font-size: 0.17rem;
		text-align: center;
	}
	.more{
		background: #ffffff;
		color: #333333;
	}
	.collage{
		background: #FF2E2E;
		color: #FFFFFF;
	}
}
</style>