
/*
*解析歌词字符串
*得到一个歌词对象数组
*每个歌词对象：{time:时间,word：歌词内容}
*/
function parseLrc() {
    var lines = lrc.split('\n');
    var result = []
    for (let i = 0; i < lines.length; i++) {
        var str = lines[i];
        var parts = str.split(']')
        var timeStr = parts[0].substring(1)
        var obj = { time: parseTime(timeStr), words: parts[1] }
        result.push(obj)
    }
    return result;
}
var lrcData = parseLrc()

var doms = {
    audio: document.querySelector('audio'),
    ul: document.querySelector('.container ul'),
    container: document.querySelector('.container')
}

function parseTime(timeStr) {
    var parts = timeStr.split(':')
    return +parts[0] * 60 + +parts[1]
}
/**
 * 计算出当前情况下
 * lrcData数组中，应该高亮显示的歌词下标
 */
function findIndex() {
    var curTime = doms.audio.currentTime
    for (let i = 0; i < lrcData.length; i++) {
        if (curTime < lrcData[i].time) {
            return i - 1;
        }
    }
    //找遍了都没找到，则显示最后一个下标
    return lrcData.length - 1;
}

//界面

/**
 * 显示歌词
 */
function createLrcElements() {
    var frag = document.createDocumentFragment()
    for (let i = 0; i < lrcData.length; i++) {
        var li = document.createElement('li')
        li.textContent = lrcData[i].words
        frag.appendChild(li)
    }
    doms.ul.appendChild(frag)
}

createLrcElements()

var containerHeight = doms.container.clientHeight;
var liHeight = doms.ul.children[0].clientHeight;
//最大偏移量
var maxOffset = doms.ul.clientHeight - containerHeight;

//设置ul元素的偏移量 
function setOffset() {
    var index = findIndex()
    var offset = liHeight * index + liHeight / 2 - containerHeight / 2;
    if (offset < 0) {
        offset = 0
    }
    if (offset > maxOffset) {
        offset = maxOffset
    }
    doms.ul.style.transform = `translateY(-${offset}px)`
    var li = doms.ul.querySelector('.active')
    if (li) {
        li.classList.remove('active')
    }
    li = doms.ul.children[index];
    if (li) {
        li.classList.add('active')
    }
}

//事件
doms.audio.addEventListener('timeupdate', setOffset);

//点击歌词跳转到指定位置并且在该位置高亮显示且音频播放到该位置
doms.ul.addEventListener('click', function (e) {
    var li = e.target
    console.log(li)
    if (li.tagName.toLowerCase() === 'li') {
        var index = Array.prototype.indexOf.call(doms.ul.children, li)
        var time = lrcData[index].time
        console.log(time)
        //设置音频播放位置
        doms.audio.currentTime = time
        setOffset()
    }
})