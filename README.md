# 触碰改造计划

一款chromium系浏览器插件

**功能：** 
1. 优化哔哩哔哩弹幕网顶部导航栏右侧的“动态”、“收藏”和“历史”按钮以及视频播放器在触屏设备下的交互体验。给视频播放器增加了在屏幕上左右滑动快进回退、上下滑动调节音量的功能。
2. 顺便优化了腾讯视频网页版顶部观看历史按钮的触屏交互体验。（腾讯视频网页版的视频播放器本身就有为触屏设备写的一套交互逻辑，挺好用的）

**说明：**
* 本插件只影响上述网页在使用触屏时（包括使用手写笔时）的交互方式，不影响原本的鼠标交互方式。因为在浏览器中手写笔接触屏幕期间的动作与手指接触屏幕期间的动作都生成同样的事件，所以改了使用手指触摸时的交互方式也就改了使用手写笔时的交互方式。但手写笔（surface pen或wacom之类的）悬浮在屏幕（或数位板）上一小段距离内而没有接触屏幕(或数位板)时在网页中产生的事件则只有鼠标事件，这时的交互逻辑并没有受到影响。但混杂了两种交互逻辑后可能用起来不如原来舒服。
* 本插件不收集任何信息，没有联网功能。只有在上述网站中才被浏览器启动。
