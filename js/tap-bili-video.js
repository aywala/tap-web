//适用于哔哩哔哩视频播放页面(部分)

let bili_2 = () => {  //适用于旧版哔哩哔哩（当前主要版本）
    let videoContainer = ["#bilibiliPlayer > div.bilibili-player-area.video-state-blackside.progress-shadow-show > div.bilibili-player-video-wrap > div.bilibili-player-dm-tip-wrap"];
    let bottomBtns = [
        "#bilibiliPlayer > div.bilibili-player-area.video-state-blackside.progress-shadow-show > div.bilibili-player-video-wrap > div.bilibili-player-video-control-wrap > div.bilibili-player-video-control > div.bilibili-player-video-control-bottom > div.bilibili-player-video-control-bottom-right > div.bilibili-player-video-btn.bilibili-player-video-btn-quality.bilibili-player-video-is-vip > div > div > div > div.bui-select-header",
        "#bilibiliPlayer > div.bilibili-player-area.video-state-blackside.progress-shadow-show > div.bilibili-player-video-wrap > div.bilibili-player-video-control-wrap > div.bilibili-player-video-control > div.bilibili-player-video-control-bottom > div.bilibili-player-video-control-bottom-right > div.bilibili-player-video-btn.bilibili-player-video-btn-pagelist > button",
        "#bilibiliPlayer > div.bilibili-player-area.video-state-blackside.progress-shadow-show > div.bilibili-player-video-wrap > div.bilibili-player-video-control-wrap > div.bilibili-player-video-control > div.bilibili-player-video-control-bottom > div.bilibili-player-video-control-bottom-right > div.bilibili-player-video-btn.bilibili-player-video-btn-speed > button",
        "#bilibiliPlayer > div.bilibili-player-area.video-state-blackside.progress-shadow-show > div.bilibili-player-video-wrap > div.bilibili-player-video-control-wrap > div.bilibili-player-video-control > div.bilibili-player-video-control-bottom > div.bilibili-player-video-control-bottom-right > div.bilibili-player-video-btn.bilibili-player-video-btn-subtitle > button > span",
        "#bilibiliPlayer > div.bilibili-player-area.video-state-blackside.progress-shadow-show > div.bilibili-player-video-wrap > div.bilibili-player-video-control-wrap > div.bilibili-player-video-control > div.bilibili-player-video-control-bottom > div.bilibili-player-video-control-bottom-right > div.bilibili-player-video-btn.bilibili-player-video-btn-setting > button",
        "button.bilibili-player-iconfont-volume",
        "button.bilibili-player-iconfont-volume-max",
        "button.bilibili-player-iconfont-volume-min"
    ];
    TheFun(videoContainer, addTap2);
    TheFun(bottomBtns, addTap1)
}

bili_2();