//适用于哔哩哔哩视频播放页面(部分)

let bili_2 = () => {
    let videoContainer = ["div.bilibili-player-dm-tip-wrap"];
    let bottomBtns = [
        "div.bilibili-player-video-btn.bilibili-player-video-btn-quality.bilibili-player-video-is-vip > div > div > div > div.bui-select-header",
        "div.bilibili-player-video-btn.bilibili-player-video-btn-pagelist > button",
        "div.bilibili-player-video-btn.bilibili-player-video-btn-speed > button",
        "div.bilibili-player-video-btn.bilibili-player-video-btn-subtitle > button > span",
        "div.bilibili-player-video-btn.bilibili-player-video-btn-setting > button",
        "button.bilibili-player-iconfont-volume",
        "button.bilibili-player-iconfont-volume-max",
        "button.bilibili-player-iconfont-volume-min"
    ];
    TheFun(videoContainer, addTap2);
    TheFun(bottomBtns, addTap1)
}

bili_2();