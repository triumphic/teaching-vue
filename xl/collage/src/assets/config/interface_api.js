var api = {
	BASEURL : '/api',//解决本地跨域
//	BASEURL : 'http://yhq.quyaqu.com',//测试环境
	//接口relativeURL
	//拼团商品列表
	spellGroupGoodsList : '/api/v2/spellgroup/spellGroupGoodsList',
	//已拼团成功轮播数据
	shufflingData : '/api/v2/spellgroup/shufflingData',
	//我的拼团接口
	mySpellGroup : '/api/v2/spellgroup/mySpellGroup',
	//拼团信息页面接口
	spllGroupShow : '/api/v2/spellgroup/spllGroupShow',
	//发起拼团接口
	launchSpellGroup : '/api/v2/spellgroup/launchSpellGroup',
	//复制淘口令接口
	h5CopyOfTheNaughtyPassword : '/api/v2/adzoneCreate/h5CopyOfTheNaughtyPassword',
	//商品详情接口
	tdetail : '/api/v2/goods/tdetail',
	//好友砍价信息页面
	helpSpllGroupShow : '/api/v2/spellgroup/helpSpllGroupShow',
	//砍价接口
	spellCutDown : '/api/v2/spellgroup/spellCutDown'
	
}

export{
	api
}