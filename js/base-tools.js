let mOutEvt = new MouseEvent('mouseout', {
    bubbles: true,
    cancelable: true,
    view: window
});
let mOverEvt = new MouseEvent('mouseover', {
    bubbles: true,
    cancelable: true,
    view: window
});
let mEnterEvt = new MouseEvent('mouseenter', {
    bubbles: false,
    cancelable: true,
    view: window
});
let mLeaveEvt = new MouseEvent('mouseleave', {
    bubbles: false,
    cancelable: true,
    view: window
});
let mMoveEvt = new MouseEvent('mousemove', {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: 700,
    clientY: 700,
    pageX: 700,
    pageY: 700
});

let videoForward = () => {  //快进操作，通过模拟按一次右方向键实现
    let ARKeydown = new KeyboardEvent('keydown', {
        key: "ArrowRight",
        keyCode: "39"
    });
    let ARKeyup = new KeyboardEvent('keyup', {
        key: "ArrowRight",
        keyCode: "39"
    });
    let ARKeypress = new KeyboardEvent('keypress', {
        key: "ArrowRight",
        keyCode: "39"
    })

    window.dispatchEvent(ARKeydown);
    window.dispatchEvent(ARKeypress);
    window.dispatchEvent(ARKeyup);
}

let videoBackword = () => { //回退操作，由模拟按一次左方向键实现
    let ALKeydown = new KeyboardEvent('keydown', {
        key: "ArrowLeft",
        keyCode: "37"
    });
    let ALKeyup = new KeyboardEvent('keyup', {
        key: "ArrowLeft",
        keyCode: "37"
    });
    let ALKeypress = new KeyboardEvent('keypress', {
        key: "ArrowLeft",
        keyCode: "37"
    })

    window.dispatchEvent(ALKeydown);
    window.dispatchEvent(ALKeypress);
    window.dispatchEvent(ALKeyup);
}

let volumeUp = () => {
    let AUKeydown = new KeyboardEvent('keydown', {
        key: "ArrowUp",
        keyCode: "38"
    });
    let AUKeyup = new KeyboardEvent('keyup', {
        key: "ArrowUp",
        keyCode: "38"
    });
    let AUKeypress = new KeyboardEvent('keypress', {
        key: "ArrowUp",
        keyCode: "38"
    })

    window.dispatchEvent(AUKeydown);
    window.dispatchEvent(AUKeypress);
    window.dispatchEvent(AUKeyup);
}

let volumeDown = () => {
    let ADKeydown = new KeyboardEvent('keydown', {
        key: "ArrowUp",
        keyCode: "40"
    });
    let ADKeyup = new KeyboardEvent('keyup', {
        key: "ArrowUp",
        keyCode: "40"
    });
    let ADKeypress = new KeyboardEvent('keypress', {
        key: "ArrowUp",
        keyCode: "40"
    })

    window.dispatchEvent(ADKeydown);
    window.dispatchEvent(ADKeypress);
    window.dispatchEvent(ADKeyup);
}

let addTap1 = (elem) => {
    elem.setAttribute("flag-tap", '0');
    elem.addEventListener('touchstart', (e) => {
        e.preventDefault(); //使触摸事件结束后不默认产生后续鼠标事件
        if (elem.getAttribute('flag-tap') == '0') {
            elem.dispatchEvent(mEnterEvt);
            elem.dispatchEvent(mOverEvt);
            elem.setAttribute("flag-tap", '1');
        }
        else {
            elem.dispatchEvent(mLeaveEvt);
            elem.dispatchEvent(mOutEvt);
            elem.setAttribute("flag-tap", '0');
        }
    });
}

let addTap2 = (videoContainer) => {
    let x, y;   //不要问为什么这里不像addTap1一样用设置attribute的方法保存listener里要用的外部变量，问就是写着太麻烦了，执行起来也麻烦。
    let countTouchmove; //什么?你问为什么addTap1用attribute保存？因为好看吧
    let deltaX, deltaY;
    videoContainer.addEventListener('touchstart', (e) => {
        e.preventDefault(); //阻止触摸产生click事件，避免不想要的视频暂停
        x = e.touches[0].pageX; //保存触摸开始时的触点坐标
        y = e.touches[0].pageY;
        countTouchmove = 0;
        videoContainer.dispatchEvent(mEnterEvt);
        videoContainer.dispatchEvent(mOverEvt);
        videoContainer.dispatchEvent(mMoveEvt);
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

let TheFun = (selectors, action) => { //The Fun，强调'The'！
    for (let i in selectors) {
        let times = 1;
        let selector = selectors[i];
        let interval = setInterval(() => {
            try {
                let element = document.querySelector(selector)
                if (element) {
                    action(element);
                    clearInterval(interval);
                    console.log('成功啦“ヽ(´▽｀)ノ” 好耶，link start !!!🎉')
                }
                else if (times >= 30) {
                    clearInterval(interval);
                    throw ('都这么久了还没得到回应，累了，不干了(︶︹︺) 就是它-> ' + selector);
                }
                else {
                    times++;
                }
            } catch (err) {
                console.log('(>﹏<。)～嘤嘤嘤……失败了捏');
                console.log(err);
            }
        }, 300);
    }
}