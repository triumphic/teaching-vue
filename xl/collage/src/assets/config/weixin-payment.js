//微信方法（点击按键调用）
let wx = require("weixin-js-sdk");
/*
微信分享方法
获取微信加签信息
@param{data}:获取的微信加签
@param{cb}:成功回调
*/
let wexinPay = (objective,payData,cb,errorCb) => {
  let data = payData;
  console.log(wx);
  console.log(data)
  let appId = data.appId;
  let timestamp = data.timeStamp;
  let nonceStr = data.nonceStr;
  let signature = data.signature;
  let packages = data.package;
  let paySign = data.paySign;
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId, // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature, // 必填，签名，见附录1
    jsApiList: [
    	'onMenuShareTimeline',//分享到朋友圈
    	'onMenuShareAppMessage'//分享给朋友
    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });
  wx.ready(function(){
  	if(objective == '朋友'){
  		// 分享给朋友
  		 wx.onMenuShareAppMessage({
  		   title: '让我们一起千丁吧', // 分享标题
  		   desc: '快来邀请您的物业朋友一起加入千丁参与智慧社区转型升级，一起开启智慧转型之路！', // 分享描述
  		   link: wxurl, // 分享链接
  		   imgUrl: "https://lwmwx.qdingnet.com/mis-qdym/images/fx.png", // 分享的图标
  		   success: function (res) {
  		   	//分享成功的回调
  		   	cb(res);
  		   },
  		   fail: function (res) {
  		     errorCb(res);
  		   }
  		 });
  	}
		if(objective == '朋友圈'){
			// 分享到朋友圈
			wx.onMenuShareTimeline({
			  title: '让我们一起千丁吧', // 分享标题
			  desc: '快来邀请您的物业朋友一起加入千丁参与智慧社区转型升级，一起开启智慧转型之路！', // 分享描述
			  link: wxurl, // 分享链接
			  imgUrl: "https://lwmwx.qdingnet.com/mis-qdym/images/fx.png", // 分享的图标
			  success: function (res) {
			  	//分享成功的回调
			  	cb(res);
			  },
			  fail: function (res) {
			    errorCb(res);
			  }
			});
		}
  });
  wx.error(function(res) {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    /*alert("config信息验证失败");*/
  });
}
export default wexinPay;