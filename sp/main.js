Date.prototype.format = function(fmt) {
    var o = {
        "y+": this.getFullYear, //年
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        // "h+": this.getHours(), //小时
        // "m+": this.getMinutes(), //分
        // "s+": this.getSeconds() //秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
setInterval("document.getElementById('dateTime').innerHTML = (new Date()).format('dd-MM-yyyy');", 1000);

function Diffdate(dend, dstart) {
    var dif = dend - dstart;
    var day = Math.floor(dif / (24 * 60 * 60 * 1000));
    if (dif < 0) {
        day = null;
    }
    return day;
}
setInterval("Diffdate(dend, dstart)", 1000);
var currentTime = new Date();
var startTime1 = new Date("2019/5/9");
var startTime2 = new Date("1998/10/24");
var startTime3 = new Date("2021/10/24");

var met = Diffdate(currentTime, startTime1);
var bor = Diffdate(currentTime, startTime2);
var nex = Diffdate(startTime3, currentTime);

document.getElementById('met').innerHTML = met;
document.getElementById('bor').innerHTML = bor;
document.getElementById('nex').innerHTML = nex;