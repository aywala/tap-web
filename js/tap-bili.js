/************************************************************
**适用于哔哩哔哩
**作为中国的Youtube，却没有Youtube网页的触屏体验，差评
**虽然B站有官方UWP版，但实话实说界面和交互都做得挺烂，远不如爱奇艺UWP
**最后批评一下微软稀烂的UWP生态，微软业务范围广但很多项目都没做好，差评
*************************************************************/

let bili_1 = () => {  //适用于旧版哔哩哔哩（当前主要版本）
    let selecters = [//顶部导航栏右侧的动态、收藏、历史三个元素
        "#internationalHeader > div.mini-header.m-header > div > div.nav-user-center > div.user-con.signin > div:nth-child(4) > div",//动态
        "#internationalHeader > div.mini-header.m-header > div > div.nav-user-center > div.user-con.signin > div:nth-child(5) > span > div.mini-favorite.van-popover__reference",//收藏
        "#internationalHeader > div.mini-header.m-header > div > div.nav-user-center > div.user-con.signin > div:nth-child(6) > span > div.mini-history.van-popover__reference"
    ]
    TheFun(selecters, addTap1); //懂不懂 The Fun 的 The 啊
}

bili_1();