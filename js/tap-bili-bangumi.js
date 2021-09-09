//适用于哔哩哔哩番剧页面

let addTapBangumi = (videoContainer) => {
    let x, y;   //不要问为什么这里不像addTap1一样用设置attribute的方法保存listener里要用的外部变量，问就是写着太麻烦了，执行起来也麻烦。
    let countTouchmove; //什么?你问为什么addTap1用attribute保存？因为好看吧
    let deltaX, deltaY;
    let flag = false;
    videoContainer.addEventListener('touchstart', (e) => {
        e.preventDefault(); //阻止触摸产生click事件，避免不想要的视频暂停
        x = e.touches[0].pageX; //保存触摸开始时的触点坐标
        y = e.touches[0].pageY;
        countTouchmove = 0;
        let controller = document.querySelector("#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-control-wrap > div.squirtle-controller.squirtle-pgc > div.squirtle-controller-wrap");
        let topWrap = document.querySelector("#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-top-wrap");
        let highEnergyProgressBar = document.querySelector("div.squirtle-high-energy");
        let progressBar = document.querySelector("div.squirtle-progress-wrap.squirtle-progress-common");
        let hEB = document.querySelector("#bilibili_pbp");
        if (!flag) {
            videoContainer.dispatchEvent(mEnterEvt);
            videoContainer.dispatchEvent(mOverEvt);
            videoContainer.dispatchEvent(mMoveEvt);
            controller.style.display = 'flex';
            topWrap.style.visibility = "visible";
            topWrap.style.opacity = '1';
            progressBar.className = 'squirtle-progress-wrap squirtle-progress-common';
            highEnergyProgressBar.className = "squirtle-high-energy";
            hEB.className = "show";
        }
        else {
            controller.style.display = 'none';
            videoContainer.dispatchEvent(mMoveEvt);
            videoContainer.dispatchEvent(mLeaveEvt);
            videoContainer.dispatchEvent(mOutEvt);
            topWrap.style.visibility = "hidden";
            topWrap.style.opacity = '0';
            progressBar.className = 'squirtle-progress-wrap squirtle-progress-common ease';
            highEnergyProgressBar.className = "squirtle-high-energy ease";
            hEB.className = "";
        }
        flag = !flag;
    })
    videoContainer.addEventListener('touchmove', (e) => {   //滑动快进或回退、调节音量
        countTouchmove++;
        if (countTouchmove > 15) {//15次之后
            if (Math.abs(deltaX) > Math.abs(deltaY)) {//判定为左右滑动手势。看到这你可能想问deltaX和Y不是还没赋值吗怎么就开始比较了，别急往下看
                if (e.touches[0].pageX > x) {   //此次触发touchmove时的触点横坐标大于前一次保存的，即右划
                    videoForward(); //执行一次快进
                }
                else if (e.touches[0].pageX < x) {  //小于，左划
                    videoBackword();    //执行一次回退
                }
                x = e.touches[0].pageX; //保存此次触点坐标用于下次比较   
                y = e.touches[0].pageY;
            }
            else {//上下滑动手势
                if (countTouchmove % 10 == 0) {    //降低音量调节的速率
                    if (e.touches[0].pageY > y) {   //此次触发touchmove时的触点纵坐标大于前一次保存的，即下划
                        volumeDown();   //降低音量
                    }
                    else if (e.touches[0].pageY < y) {  //小于，上划
                        volumeUp(); //提高音量
                    }
                    x = e.touches[0].pageX; //保存此次触点坐标用于下次比较   
                    y = e.touches[0].pageY;
                }
            }
        }
        else if (countTouchmove == 15) {//在第15次时计算触发touchstart时的触点坐标与此次触发touchmove时的触点坐标的位移差用来判定此次触摸过程是左右滑还是上下滑
            //可能有人想问为什么把判定第15次的代码放到判定大于15次的之后。我只想说懂不懂优化代码执行效率的含金量啊！什么你说代码可读性变差了？可是会去改这个代码的人只有我罢了😞
            deltaX = e.touches[0].pageX - x;
            deltaY = e.touches[0].pageY - y;
        }
    })
}
let bili_3 = () => {
    let videoContainer = ['#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-video-perch'];
    let bottomBtns = [
        'div.squirtle-video-quality > div.squirtle-select-header',
        'div.squirtle-video-pagelist > div.squirtle-select-result',
        'div.squirtle-video-speed > div.squirtle-select-result',
        'div.squirtle-volume-icon',
        'div.squirtle-setting-icon',
    ];
    TheFun(videoContainer, addTapBangumi);
    //TheFun(bottomBtns, addTap1);
}

bili_3();