var api = {
	BASEURL : '/api',//解决跨域
//	BASEURL : 'https://tbk.726p.com',//线上地址
	
	
	
	//接口relativeURL
	//首页导航栏列表
	list : '/api/v2/channel/list',
	//轮播图
	bannerList : '/api/v2/homeact/list',
	//省-钱-达-人---广告位
	groupNewGoldGroups : '/api/v2/channel/groupNewGoldGroups',
	
	//修改性别
	userSetSex : '/api/v2/users/userSetSex',
	
}

export{
	api
}
