//显示日期
var D = new Date();
var yy = D.getFullYear();
var mm = D.getMonth() + 1;
var dd = D.getDate();
var ww = D.getDay();
var ss = parseInt(D.getTime() / 1000);
document.querySelector(".time p").innerHTML = yy + "年" + mm + "月" + dd + "日 " + showCal();
//时间
function getDate() {

    var timezone = 8;
    var offset_GMT = new Date().getTimezoneOffset();
    var nowDate = new Date().getTime();

    var today = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
    var time = twoDigits(today.getHours()) + ":" + twoDigits(today.getMinutes()) + ":" + twoDigits(today.getSeconds());
    document.querySelector(".time h1").innerHTML = time;
}

function twoDigits(val) {
    if (val < 10) return "0" + val;
    return val;
}

//显示日历
function getYMD(date) {
    var D = date;
    var yy = D.getFullYear();
    var mm = D.getMonth() + 1;
    var dd = D.getDate();
    return yy + "-" + mm + "-" + dd;
}
//时间加一天
function addDate(date, days) {
    if (days === undefined || days === '') {
        days = 1;
    }
    var date = new Date(date);
    date.setDate(date.getDate() + days);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return date.getFullYear() + '-' + getFormatDate(month) + '-' + getFormatDate(day);
}
//时间减一天
function cutDate(date, days) {
    if (days === undefined || days === '') {
        days = 1;
    }
    var date = new Date(date);
    date.setDate(date.getDate() - days);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return date.getFullYear() + '-' + getFormatDate(month) + '-' + getFormatDate(day);
}

function getFormatDate(arg) {
    if (arg == undefined || arg == '') {
        return '';
    }

    var re = arg + '';
    if (re.length < 2) {
        re = '0' + re;
    }

    return re;
}

function setCalendar(D) {
    //设置日历
    //计算当前日期
    if (typeof(D) == "string") {
        D = new Date(D);
    } else if (!D) {
        D = new Date();
    }
    var yy = D.getFullYear();
    var mm = D.getMonth() + 1;
    var dd = D.getDate();
    document.querySelector(".date .d").innerHTML = yy + "-" + getFormatDate(mm) + "-" + getFormatDate(dd);
    //计算当前日期所在月份的1号
    D = new Date(yy + "-" + mm + "-" + 1);
    yy = D.getFullYear();
    mm = D.getMonth() + 1;
    dd = D.getDate();
    week = D.getDay(); //本月一号是星期几
    if (week == 0) { //当为周日时，将其置为7
        week = 7;
    }
    //计算日历中第一天的日期
    var firstDay = cutDate(yy + "-" + mm + "-" + dd, week - 1);
    //获取日期格
    var dateBox = document.querySelectorAll("td");
    for (let index = 0; index < dateBox.length; index++) {
        let dayArr = firstDay.split("-");
        let son = dateBox[index].children;
        if (dayArr[1] == mm) {
            if (getYMD(new Date(firstDay)) == getYMD(new Date())) {
                dateBox[index].classList = "light_hover active";
            } else {
                dateBox[index].classList = "light_hover";
            }
            son[0].innerHTML = dayArr[2];
            son[1].innerHTML = showDay(firstDay);
        } else {
            dateBox[index].classList = "light_hover disable";
            let son = dateBox[index].children;
            son[0].innerHTML = dayArr[2];
            son[1].innerHTML = showDay(firstDay);
        }

        firstDay = addDate(firstDay);
    }
}