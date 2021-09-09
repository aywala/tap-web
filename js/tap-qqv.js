/*适用于腾讯视频
**腾讯视频网页的视频播放器本身就对触屏做了适配，点明表扬（客户端没有，至少上次我用时还没有，点名批评 >_< ）
*/

let qqv = () => {
    let history = ["#modHistory > a"];
    TheFun(history, addTap1);
}

qqv();