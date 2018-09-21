<template>
	<div id="tab">
		<div class="tab">
			<ul>
				<li :class="!tabFlag ? 'tabActive' : '' " @click="tabSwitch(0)">拼团商品</li>
				<li :class="tabFlag ? 'tabActive' : '' " @click="tabSwitch(1)">我的拼团</li>
			</ul>
		</div>
		<div class="tabCon">
			<ul class="my-collage" v-show="!tabFlag">
				<li v-for="item in commodityList"  @click="goDetail(item.goods_id,item.is_coupon)">
					<img v-lazy="item.goods_img" />
					<div class="commodity-detail">
						<h3>{{item.goods_title}}</h3>
						<div class="my-collage-price">价值{{item.goods_price}}元</div>
						<div class="commodity-time">
							<div class="left">{{item.over_num}}人已免费拿</div>
							<div class="right" @click.stop="launchSpellGroup(item.goods_id)">点击0元拿</div>
						</div>
					</div>
				</li>
			</ul>
			
			<ul class="collage-commodity" v-show="tabFlag">
				<li v-for="item in myCommodityList" @click="goDetail(item.goods_id,item.is_coupon)" >
					<img v-lazy="item.goods_img" />
					<div class="commodity-detail">
						<h3>{{item.goods_title}}</h3>
						<div class="state" v-if="item.status == 1">
							<div class="price">已拼<span>{{item.total_pop_price}}</span>元&ensp;还剩<span>{{item.left_money}}</span>元</div>
							<div class="commodity-time">
								<div class="left"><i>{{item.djs.hour}}</i><i>{{item.djs.minute}}</i><i>{{item.djs.second}}</i>后结束</div>
								<div class="right" @click.stop="goCollage(item.goods_id,item.id)">继续拼团</div>
							</div>
						</div>
						<div class="state" v-if="item.status == 0">
							<div class="price" style="margin-bottom: 0.2rem;margin-top:0.2rem ;">未在24小时之内完成，拼团已过期</div>
							<div class="commodity-time">
								<div class="left"></div>
								<!--<div class="right" @click.stop="launchSpellGroup(item.goods_id)">重新拼团</div>-->
							</div>
						</div>
						<div class="state" v-if="item.status == 2 && item.order_status == 2">
							<div class="price"><span>拼团成功</span></div>
							<div class="commodity-time" style="align-items: flex-start">
								<div class="left">交易中</div>
								<div class="right" @click.stop="goOrderEditing(item.goods_id)">填写单号</div>
							</div>
						</div>
						<div class="state" v-if="item.status == 2 && item.order_status == 3">
							<!--<div class="price"><span></span></div>-->
							<div class="commodity-time" style="align-items: flex-start;margin-top:0.1rem ;margin-bottom: 0.2rem; ">
								<div class="left">拼团成功</div>
								<div class="right_02">已返款</div>
							</div>
						</div>
						<div class="state" v-if="item.status == 2 && item.order_status == 1">
							<!--<div class="price"><span></span></div>-->
							<div class="commodity-time" style="align-items: flex-start;margin-top:0.1rem ;margin-bottom: 0.2rem;">
								<div class="left">拼团成功</div>
								<div class="right_03">订单已失效</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<popup :choice = 'choice' @reset="popupReset"></popup>
	</div>
</template>
<script>
	import { Indicator } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { mapState, mapMutations } from 'vuex'
	
	import Popup from '../assembly/Popup'
	
	
	export default {
		name:"tab",
		components:{
			Popup//弹框
		},
		data () {
			return {
				choice:'0',
				tabFlag:false,
				tabNum : 0,
				commodityList:[],
				commodityLoadingFlag:false,
				commodityPageNum:1,
				commodityMaxPage:1,
				myCommodityList:[],//我的拼团商品
				myCommodityLoadingFlag:false,
				myCommodityPageNum:1,
				myCommodityMaxPage:1,
				token:'5b58535461d5b8275455dd910afb845275'
			}
		},
		created () {
			this.spellGroupGoodsList ();
			localStorage.setItem("token",this.token);
		},
		mounted () {
			this.pullUpLoading();
//			this.changeToken('5b58535461d5b8275455dd910afb845275')
//			console.log(this.token)
		},
		computed:{
//			...mapState(['token'])
		},
		methods: {
//			...mapMutations(['changeToken']),
			goPupop () {
				this.choice='5';
			},
			popupReset (data) {
		     	this.choice=data;
		   	},
			//去拼团
			goCollage (goods_id,id) {
				//商品id  团id
				this.$router.push({path:'/invitingRegiment',name:'invitingRegiment',params:{token:this.token},query:{goods_id:goods_id,group_id:id,time:(new Date()).getTime()}});
			},
			//去详情页
			goDetail (goods_id,is_coupon) {
				this.$router.push({path:'/detail',query:{'goods_id':goods_id,'is_coupon':is_coupon,'time':(new Date()).getTime()}});
			},
			//去填写订单
			goOrderEditing () {
				this.$router.push({path:'/orderEditing'})
			},
			timer () {
				var _this = this;
				_this.myCommodityList.map( (obj,index)=>{
					if(obj.order_status == 0){
						_this.timerDown(index,obj.remain_time)
					}
		        })
			},
			timerDown (indexNum,intDiff) {
		   	//倒计时
		   		var _this = this;
			    var countDownTime = setInterval(function(){
				    var day=0,
				        hour=0,
				        minute=0,
				        second=0;//时间默认值        
				    if(intDiff > 0){
				        day = Math.floor(intDiff / (60 * 60 * 24));
				        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
				        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
				        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
				    }else{
				    	clearInterval(countDownTime)
				    }
				    if (hour <= 9) hour = '0' + hour;
				    if (minute <= 9) minute = '0' + minute;
				    if (second <= 9) second = '0' + second;
				    _this.myCommodityList.map( (obj,index)=>{
						if(indexNum == index){
							_this.$set(
							    obj,"djs",{'hour':hour,'minute':minute,'second':second}
							);
						}
			       })
				    intDiff--;
				    
			    }, 1000);
			},
			tabSwitch (index) {
				//1 我的拼团商品
				$(window).scrollTop(0)
				if(index == 0){
					this.tabFlag = false;
					this.tabNum = 0;
				}else if(index == 1){
					this.isWeixinEvent ();
				}
			},
			//拼团商品列表
			spellGroupGoodsList () {
				var _this = this;
				this.commodityLoadingFlag = false;
				if(this.commodityMaxPage < this.commodityPageNum){
					Toast({
					  message: '没有更多了',
					  duration: 1000
					});
					return;
				}
				Indicator.open('加载中...');
				this.$axios({
	   				url: this.URL.BASEURL + this.URL.spellGroupGoodsList,
	   				method: 'post',
	   				data:{
	   					page:this.commodityPageNum
	   				}
	   			}).then((res) => {
	   				console.log(res)
	   				Indicator.close();
	   				res = res ? res.data : null;
	   				if(res && res.errno == 0 && res.rst){
	   					_this.commodityMaxPage = res.rst.pageInfo.maxPage;
	   					if(res.rst.data.length > 0){//接口返回有数据
	   						if(_this.commodityList.length != 0 ){
	   							//已经不是第一页数据了
	   							_this.commodityList = _this.commodityList.concat(res.rst.data);
	   						}else{
	   							//第一页数据
	   							_this.commodityList = res.rst.data;
	   						}
	   						_this.commodityLoadingFlag = true;
	   					}else{
	   						Toast({
							  message: '暂无更多数据了',
							  duration: 1500
							});
	   					}
	   				}else{
	   					Toast({
						  message: res.err,
						  duration: 1500
						});
	   				}
	   			})
		    },
		    //我的拼团接口
		    mySpellGroup () {
		    	var _this = this;
				this.myCommodityLoadingFlag = false;
				if(this.myCommodityMaxPage < this.myCommodityPageNum){
					Toast({
					  message: '没有更多了',
					  duration: 1000
					});
					return;
				}
				Indicator.open('加载中...');
				this.$axios({
	   				url: this.URL.BASEURL + this.URL.mySpellGroup,
	   				method: 'post',
	   				headers:{
		    			token:this.token
		    		},
	   				data:{
	   					page:this.myCommodityPageNum
	   				}
	   			}).then((res) => {
	   				console.log(res)
	   				Indicator.close();
		    		_this.tabFlag = true;//显示我的拼团列表
	   				res = res ? res.data : null;
	   				if(res && res.errno == 0 && res.rst){
	   					_this.myCommodityMaxPage = res.rst.pageInfo.maxPage;
	   					if(res.rst.data.length > 0){//接口返回有数据
	   						if(_this.myCommodityList.length != 0 ){
	   							//已经不是第一页数据了
	   							_this.myCommodityList = _this.myCommodityList.concat(res.rst.data);
	   						}else{
	   							//第一页数据
	   							_this.myCommodityList = res.rst.data;
	   						}
	   						_this.myCommodityList.map( (obj,index)=>{
					            _this.$set(
					                obj,"djs",{'hour':'00','minute':'00','second':'00'}
					            );
					        })
	   						_this.myCommodityLoadingFlag = true;
	   					}else{
	   						Toast({
							  message: '暂无更多数据了',
							  duration: 1500
							});
	   					}
	   					_this.timer();
	   					console.log(_this.myCommodityList)
	   				}else{
	   					Toast({
						  message: res.err,
						  duration: 1500
						});
	   				}
	   			})
		    },
		    isWeixinEvent () {
		    	this.myCommodityList = [];
		    	//判断是不是微信端，选择app方法获取token 还是后端提供
				if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger"){
					//微信
					this.mySpellGroup()
					this.tabNum = 1;
				}else{
					//app端
					this.tabNum = 1;
					this.mySpellGroup()
				}
		    },
		    pullUpLoading () {
		    	//上拉加载更多
		    	var _this = this;
		    	$(window).scroll(function(){
					if($(window).scrollTop()>= $(document).height()-$(window).height() - 60){
						//到达底部加载数据
						if(this.tabNum == 0) {
							//拼团商品列表
							if(_this.commodityLoadingFlag){
								_this.commodityPageNum ++ ;
								_this.spellGroupGoodsList();
							}
						}else if(this.tabNum == 1){
							//我的拼团商品列表
							if(_this.myCommodityLoadingFlag){
								_this.myCommodityPageNum ++ ;
								_this.spellGroupGoodsList();
							}
						}
					}
				});
		    },
		    launchSpellGroup (id) {
		    	//发起拼团接口
		    	var _this = this;
		    	this.$axios({
		    		url: this.URL.BASEURL + this.URL.launchSpellGroup,
		    		method:'post',
		    		headers:{
		    			token:this.token
		    		},
		    		data:{
		    			'goods_id':id
		    		}
		    	}).then((res) => {
		    		res = res ? res.data : null;
		    		if(res && res.errno == 0){
						_this.$router.push({path:'/invitingRegiment',query:{goods_id:res.rst.goods_id,group_id:res.rst.group_id,time:(new Date()).getTime()}});
		    		}else if(res.errno == 2008){//9001 该商品正在拼团   2008 用户不存在  9002 商品不存在
		    			_this.goPupop ();
		    		}else {
		    			Toast({
						  message: res.rst.msg,
						  duration: 1500
						});
		    		}
		    	})
		    }
		}
		
	}
</script>

<style scoped="scoped" lang="scss">
#tab{
	/*margin-top: 0.05rem;*/
}
.tab{
    width: 100%;
    background: #f4f4f4;
    position: fixed;
    top: 1.22rem;
    padding-top: 0.05rem;
    border-bottom: 0.01rem solid #f4f4f4;
    z-index: 1;
	ul{
		display:flex;
		height: 0.42rem;
		background: #FFFFFF;
		li{
			width: 50%;
			text-align: center;
			line-height: 0.42rem;
			font-size: 0.16rem;
			color: #666666;
		}
		.tabActive{
			color: #FA2C36;
		}
	}
}
.tabCon{
	background: #FFFFFF;
	position: relative;
	top:1.69rem ;
	ul{
		li{
			display: flex;
			align-items: center;
			padding: 0.1rem;
			border-top: 0.01rem solid #DDDDDD;
			&:first-of-type{
				border-top: none;
			}
			img{
				width: 1.05rem;
				height: 1.05rem;
				background: #F4F4F4;
			}
			.commodity-detail{
				margin-left: 0.1rem;
				h3{
					width: 2.4rem;
					overflow:hidden; 
					text-overflow:ellipsis;
					display:-webkit-box; 
					/*! autoprefixer: off */
					 -webkit-box-orient: vertical;
					/* autoprefixer: on */
					-webkit-line-clamp:2; 
					color: #333333;
					font-size: 0.15rem;
					line-height: 0.21rem;
				}
				.price{
					font-size: 0.12rem;
					color: #262626;
					margin-top: 0.1rem;
					margin-bottom: 0.14rem;
					span{
						color: #F90823;
					}
				}
				.commodity-time{
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					.left{
						color: #333333;
						font-size: 0.12rem;
						line-height: 0.16rem;
						i{
							display: inline-block;
							width: 0.16rem;
							height: 0.16rem;
							background: #666666;
							color: #FFFFFF;
							font-size: 0.12rem;
							margin-right: 0.05rem;
							text-align: center;
							line-height: 0.18rem;
							vertical-align: bottom;
						}
					}
					.right{
						color: #FFFFFF;
						font-size: 0.1rem;
						line-height: 0.22rem;
						padding: 0 0.13rem;
						background: #FA2C36;
						border-radius: 0.05rem;
					}
					.right_02{
						width: 0.68rem;
						text-align: center;
						color: #FA2C36;
						font-size: 0.12rem;
					}
					.right_03{
						width: 0.68rem;
						text-align: center;
						color: #666666;
						font-size: 0.12rem;
					}
				}
			}
		}
	}
	.my-collage{
		li{
			.commodity-detail{
				.my-collage-price{
					color: #999999;
					font-size: 0.11rem;
					line-height: 0.16rem;
					margin-top: 0.25rem;
				}
				.commodity-time{
					.left{
						color: #FA2C36;
						font-size: 0.12rem;
					}
				}
			}
		}
	}
}
</style>