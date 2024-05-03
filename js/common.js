document.write("<script language='javascript' src ='/js/polyfill.min.js'></script>");

function loadStart() {
    $('.loading_wrap').fadeIn();
    // $('body').css('overflow','hidden');
    $('body').fadeOut();
}

function loadEnd() {

}

function loadEnds() {
    $('.loading_wrap').fadeOut();
    $('body').css('overflow-y', 'auto');
    $('body').fadeIn();

}
$('.rightBar .toTop').on('click', function() {
    $('html,body').animate({
            scrollTop: 0,
        },
        800
    )
})

function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg) //匹配目标参数
    if (r != null) return decodeURIComponent(r[2])
    return null //返回参数值
}

function dateFormat(date, fmt) {
    var d = date;
    if (date.indexOf('T') < 0) {
        d = date.replace(new RegExp(/-/gm), "/");
    }
    var time = new Date(d);
    var o = {
        'M+': time.getMonth() + 1, //月份
        'd+': time.getDate(), //日
        'h+': time.getHours(), //小时
        'm+': time.getMinutes(), //分
        's+': time.getSeconds(), //秒
        'q+': Math.floor((time.getMonth() + 3) / 3), //季度
        S: time.getMilliseconds(), //毫秒
    }
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(
            RegExp.$1,
            (time.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
    for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ?
                o[k] :
                ('00' + o[k]).substr(('' + o[k]).length)
            )
    return fmt
}


function PagePre() {
    if ($(".uk-pagination-previous").hasClass('no-click')) {
        return false
    }
    var Pages = $(".pagination li.active");
    var pagesPreUrl = Pages.prev().find('a').attr('href')
    console.log(pagesPreUrl)

    window.location.href = pagesPreUrl;
}

function PageNext() {
    if ($(".uk-pagination-next").hasClass('no-click')) {
        return false
    }
    var pages = $(".pagination li.active");
    var pagesNextUrl = pages.next().find('a').attr('href')
    window.location.href = pagesNextUrl;

}
var countDownTime = {
    init: function(a, b, c, d, e) {
        this.t = a, this.d = b, this.h = c, this.m = d, this.s = e
    },
    start: function() {
        var a = this;
        setInterval(a.timer, 1e3)

    },
    timer: function(a) {
        var b, c, d, e, f, g, h;
        a = this.countDownTime, b = new Date, c = new Date(a.t), d = c.getTime() - b.getTime(), e = Math.floor(a.formatTime(d, "day")), f = Math.floor(a.formatTime(d, "hours")), g = Math.floor(a.formatTime(d, "minutes")), h = Math.floor(a.formatTime(d, "seconds")), a.d && (a.d.innerText = a.formatNumber(e)), a.h && (a.h.innerText = a.formatNumber(f)), a.m && (a.m.innerText = a.formatNumber(g)), a.s && (a.s.innerText = a.formatNumber(h))
    },
    formatNumber: function(a) {
        if (a <= 0) { a = 0 }
        return a = a.toString(), a[1] ? a : "0" + a
    },
    formatTime: function(a, b) {
        switch (b) {
            case "day":
                return a / 1e3 / 60 / 60 / 24;
            case "hours":
                return a / 1e3 / 60 / 60 % 24;
            case "minutes":
                return a / 1e3 / 60 % 60;
            case "seconds":
                return a / 1e3 % 60
        }
    }
};
//登录注册
var na = /^[\u4E00-\u9FA5]{2,4}$/; //姓名正则
var ph = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/; //手机号正则
var yzm = /^\d{6}$/; //手机号正则
$(function() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        window.location.href = '/mobile_home'
    } else {
        // 不是移动设备访问
    }
    var isInView = true
    $(".odometer").each(function(index) {
        $(this).isInViewport(function(v) {
            if (v === "entered") {
                console.log(index)
                if (isInView) {
                    if (index == 0) {
                        $(this).numberRock({
                            speed: 15,
                            count: $(this).attr("data-odometer-final")
                        })
                    } else if (index == 1) {
                        $(this).numberRock({
                            speed: 25,
                            count: $(this).attr("data-odometer-final")
                        })
                    } else if (index == 2) {
                        $(this).numberRock({
                            speed: 25,
                            count: $(this).attr("data-odometer-final")
                        })
                    } else if (index == 3) {
                        $(this).numberRock({
                            speed: 205,
                            count: $(this).attr("data-odometer-final")
                        })
                    } else if (index == 4) {
                        $(this).numberRock({
                            speed: 25,
                            count: $(this).attr("data-odometer-final")
                        })
                        isInView = false
                    }

                }


            }


        })


    })

    $(".sign a").click(function() {
        $("#login").addClass('login-show')
    })
    $("#login .ax-dialog-overlay").click(function(s) {

            if (!$('#login_name').hasClass('ax-show') && !$('#login_weibo').hasClass('ax-show')) {
                $('.login.wrapper').removeClass('ax-hide')
                $('#login_name').removeClass('ax-show')
                $("#login").removeClass('login-show')
                $("#loginTel").val('')
                $("#verificationCode").val('')
                $("#verificationCode1").val('')
            }

        })
        /************************  失焦判断  **********************************/
    $("input").blur(function() {
            if ($(this).is("#loginTel")) { //手机号判断
                if ($("#loginTel").val() != "") {
                    if (!(ph.test($("#loginTel").val()))) {
                        $(".spa2").text("请输入正确手机号");
                        return false;
                    } else if (ph) {
                        $(".spa2").text("");
                        return true;
                    }
                } else {
                    $(".spa2").text("");
                }
            }
        })
        /*********************** 提交验证 ***************************/
    $("#sub").click(function() {

        if ($("#loginTel").val() == "") {
            $(".spa2").text('请填写手机号')
            return false;
        }
        if (!(ph.test($.trim($("#loginTel").val())))) {
            $(".spa2").text("请输入正确手机号");
            return false;
        }
        if ($("#verificationCode").val() == "") {
            $(".spa3").text('请填写验证码')
        }
        if (!(yzm.test($.trim($("#verificationCode").val())))) {
            $(".spa3").text("请输入正确验证码");
            return false;
        }
        if (!$("#login input[type=\"checkbox\"]").prop("checked")) {
            new axMessage({
                content: '请阅读并同意服务条款、隐私政策！',
                result: 'waring',
                iconShow: true,
            });
            return false;
        }
        $.ajax({
            type: "post",
            url: baseUrl + '/api/web/message/validate?phone=' + $.trim($("#loginTel").val()) + '&code=' + $.trim($("#verificationCode").val()),
            contentType: 'application/json',
            success: function(res) {
                console.log(res)
                if (res.code == 200) {
                    if (res.temp.name != null) {
                        localStorage.setItem('token', res.mark)
                        localStorage.setItem('user', JSON.stringify(res.temp));
                        new axMessage({
                            content: '登录成功',
                            result: 'success',
                            iconShow: true,
                        });
                        $('.login.wrapper').removeClass('ax-hide')
                        $('#login_name').removeClass('ax-show')
                        $("#login").removeClass('login-show')
                        getUser();
                    } else {
                        localStorage.setItem('token', res.mark)
                        $('.login.wrapper').addClass('ax-hide')
                        $('#login_name').addClass('ax-show')
                        new axMessage({
                            content: '请完善资料',
                            result: 'waring',
                            iconShow: true,
                        });
                    }
                } else {
                    new axMessage({
                        content: res.msg,
                        result: 'waring',
                        iconShow: true,
                    });
                }
            }
        });
    })
    $("#sub_name").click(function() {

        if ($("#loginName").val() == "") {
            $(".spa4").text('请填写姓名')
            return false;
        }
        $.ajax({
            type: "post",
            url: baseUrl + '/api/web/message/updateUserName?name=' + $.trim($("#loginName").val()),
            contentType: 'application/json',
            headers: {
                Accept: 'application/json; charset=utf-8',
                token: localStorage.getItem('token')
            },
            success: function(res) {
                if (res.code == 200) {
                    localStorage.setItem('token', res.mark)
                    new axMessage({
                        content: '登录成功',
                        result: 'success',
                        iconShow: true,
                    });
                    $('.login.wrapper').removeClass('ax-hide')
                    $('#login_name').removeClass('ax-show')
                    $("#login").removeClass('login-show')
                    getUser();
                } else {
                    new axMessage({
                        content: res.msg,
                        result: 'waring',
                        iconShow: true,
                    });
                }
            }
        });
    })
    $("#sub_weibo").click(function() {
        const loginName1 = $.trim($("#loginName1").val());
        const loginTel1 = $.trim($("#loginTel1").val());
        const verificationCode1 = $.trim($("#verificationCode1").val());
        const token = getUrlParam('token') || getUrlParam('code') || localStorage.getItem('token');

        if (!loginName1) {
            $(".spa4").text('请填写姓名');
            return false;
        }

        if (!loginTel1) {
            $(".spa2").text('请填写手机号');
            return false;
        }

        if (!ph.test(loginTel1)) {
            $(".spa2").text("请输入正确手机号");
            return false;
        }

        if (!verificationCode1) {
            $(".spa3").text('请填写验证码');
            return false;
        }

        if (!yzm.test(verificationCode1)) {
            $(".spa3").text("请输入正确验证码");
            return false;
        }

        $.ajax({
            type: "post",
            url: `${baseUrl}/api/web/message/completeInfo?name=${loginName1}&phone=${loginTel1}&code=${verificationCode1}`,
            contentType: 'application/json',
            headers: {
                Accept: 'application/json; charset=utf-8',
                token,
            },
            success: function(res) {
                if (res.code === 200) {
                    localStorage.setItem('token', res.mark);
                    new axMessage({
                        content: '登录成功',
                        result: 'success',
                        iconShow: true,
                    });
                    $('.login.wrapper').removeClass('ax-hide');
                    $('#login_name').removeClass('ax-show');
                    $("#login").removeClass('login-show');
                    getUser();
                } else {
                    new axMessage({
                        content: res.msg,
                        result: 'waring',
                        iconShow: true,
                    });
                }
            },
        });
    });
    $("#logout").click(function() {

        $.ajax({
            url: baseUrl + '/api/web/memberCenter/logout',
            method: 'post',
            headers: {
                Accept: 'application/json; charset=utf-8',
                token: localStorage.getItem('token')
            },
            data: {
                token: localStorage.getItem('token')
            },
            success: function(res) {
                if (res.code == 200) {
                    localStorage.removeItem('token')
                    window.location.href = '/'
                }
            }
        })
    })
    $("#header .ax-nav a").click(function(e) {
        const index = $(this).data('id');
        const sysConfig = localStorage.getItem('sysconfig');

        if (sysConfig === '1') {
            const isAllowedIndex = [1, 3, 5, 6, 8, 9].includes(index);
            if (isAllowedIndex) {
                e.preventDefault();
                new axMessage({
                    content: '大会即将开幕，敬请期待!',
                    result: 'waring',
                    iconShow: true,
                });
                return false;
            }
        }

        if (index === 9 && !localStorage.getItem('token')) {
            e.preventDefault();
            new axMessage({
                content: '请先登录',
                result: 'warning',
                iconShow: true,
            });
            loginShow();
            return false;
        }
    })
    $(".footer_center ul li a").click(function(e) {
        const index = $(this).data('id');
        const sysConfig = localStorage.getItem('sysconfig');

        if (sysConfig === '1') {
            const isAllowedIndex = [1, 3, 5, 6, 9].includes(index);
            if (isAllowedIndex) {
                e.preventDefault();
                new axMessage({
                    content: '大会即将开幕，敬请期待!',
                    result: 'waring',
                    iconShow: true,
                });
                return false;
            }
        }

        if (index === 9 && !localStorage.getItem('token')) {

            e.preventDefault();
            new axMessage({
                content: '请先登录',
                result: 'warning',
                iconShow: true,
            });
            loginShow();
            return false;
        }
    });
    $(".rightBar li:first-child a").click(function(e) {
        const sysConfig = localStorage.getItem('sysconfig');
        if (sysConfig === '1') {
            e.preventDefault();
            new axMessage({
                content: '大会即将开幕，敬请期待!',
                result: 'waring',
                iconShow: true,
            });
            return false;
        }
    });
})

function loginShow() {
    $("#login").addClass('login-show')
}
/***********************  ***************************/
var count = 60 * 5; //间隔函数，1秒执行
var InterValObj1; //timer变量，控制时间
var curCount1; //当前剩余秒数
/*第一*/
function sendMessage1(index) {
    curCount1 = count;
    if (index == 1) {
        if ($("#loginTel").val() != "") {
            if (!(ph.test($.trim($("#loginTel").val())))) {
                $(".spa2").text("请输入正确手机号");
                return false;
            } else if (ph) {
                $(".spa2").text("");
            }
        } else {
            $(".spa2").text("请输入手机号");
            return false;
        }
        //设置button效果，开始计时
        $("#code").css("pointer-events", "none");
        $("#code").text(+curCount1 + "秒再获取");
        InterValObj1 = window.setInterval(SetRemainTime1, 1000); //启动计时器，1秒执行一次
        $.ajax({
            type: "post",
            url: baseUrl + '/api/web/message/getCode?phone=' + $("#loginTel").val().trim(),
            contentType: 'application/json',
            success: function(res) {
                if (res.code == 200) {
                    new axMessage({
                        content: '验证码已发送，请留意手机短信！',
                        result: 'success',
                        iconShow: true,
                    });

                    //向后台发送处理数据
                } else {
                    new axMessage({
                        content: res.msg,
                        result: 'waring',
                        iconShow: true,
                    });
                }
            }
        });
    } else {
        if ($("#loginTel1").val() != "") {
            if (!(ph.test($.trim($("#loginTel1").val())))) {
                $(".spa2").text("请输入正确手机号");
                return false;
            } else if (ph) {
                $(".spa2").text("");
            }
        } else {
            $(".spa2").text("请输入手机号");
            return false;
        }
        $.ajax({
            type: "post",
            url: baseUrl + '/api/web/message/getCode?phone=' + $("#loginTel1").val().trim(),
            contentType: 'application/json',
            success: function(res) {
                if (res.code == 200) {
                    new axMessage({
                        content: '验证码已发送，请留意手机短信！',
                        result: 'success',
                        iconShow: true,
                    });
                    //设置button效果，开始计时
                    $("#code1").css("pointer-events", "none");
                    $("#code1").text(+curCount1 + "秒再获取");
                    InterValObj1 = window.setInterval(SetRemainTime2, 1000); //启动计时器，1秒执行一次
                    //向后台发送处理数据
                } else {
                    new axMessage({
                        content: res.msg,
                        result: 'waring',
                        iconShow: true,
                    });
                }
            }
        });
    }



}

function SetRemainTime1() {

    if (curCount1 == 0) {
        window.clearInterval(InterValObj1); //停止计时器
        $("#code").css("pointer-events", 'all'); //启用按钮
        $("#code").text("重新发送");
    } else {
        curCount1--;
        $("#code").text(+curCount1 + "秒再获取");
    }
}

function SetRemainTime2() {

    if (curCount1 == 0) {
        window.clearInterval(InterValObj1); //停止计时器
        $("#code1").css("pointer-events", 'all'); //启用按钮
        $("#code1").text("重新发送");
    } else {
        curCount1--;
        $("#code1").text(+curCount1 + "秒再获取");
    }
}

var baseUrl = ''

function getUser() {
    const token = localStorage.getItem('token') || getUrlParam('token') || getUrlParam('code');
    if (!token) {
        $('.sign').removeClass('logged_in');
        $('.individual').hide();
        return false;
    }
    localStorage.setItem('token', token)
    $.ajax({
        type: 'post',
        url: baseUrl + '/api/pro/memberCenter/getUserInfo',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        headers: {
            Accept: 'application/json; charset=utf-8',
            token: token
        },
        success: function(res) {
            console.log(res)
            if (!(res.code == 200)) {
                localStorage.removeItem('user')
                localStorage.removeItem('token')
                $('.sign').removeClass('logged_in')
                $('.individual').css('display', 'none')
            }
            if (res.code == 200) {
                localStorage.setItem('user', JSON.stringify(res.temp));
                $('.sign').addClass('logged_in')
                $('.individual').css('display', 'flex')
                if (res.temp.phone != null) {
                    $('.login.wrapper').removeClass('ax-hide')
                    $('#login_name').removeClass('ax-show')

                    $("#login").removeClass('login-show')
                } else {
                    $("#login").addClass('login-show')
                    $('.login.wrapper').addClass('ax-hide')
                    $('#login_weibo').addClass('ax-show')
                    $("#loginName1").val(res.temp.name)

                    new axMessage({
                        content: '请完善资料',
                        result: 'waring',
                        iconShow: true,
                    });
                }

            }
        }
    });
}
getUser();
var pathnames = window.location.pathname
var obj = new WxLogin({
    self_redirect: false,
    id: 'wx_login', //这个id是你在网页里<div id='QR_code'></div>的id
    appid: 'wxb1699f52f1b8be76', //去开放平台看
    scope: "snsapi_login", //写死'snsapi_login'
    redirect_uri: 'https%3A%2F%2Fwww.gcsis.cn%2Fapi%2Fweb%2Fweixin%2Fscanlogin', //经过urlencode编码后的网站页面，扫码后展示的网页
    //此页面为微信扫码成功后的跳转页面，最好为网站内单独空白页，原因会在之后描述
    state: pathnames, //自定义参数
    style: "black", //背景色
    href: "data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6MTAwJTsgICAgbWFyZ2luLXRvcDogMDtib3JkZXI6bm9uZX0KLmltcG93ZXJCb3ggLnRpdGxlIHtkaXNwbGF5OiBub25lO30KLmltcG93ZXJCb3ggLmluZm8ge2Rpc3BsYXk6IG5vbmU7fQouc3RhdHVzX2ljb24ge2Rpc3BsYXk6IG5vbmV9Ci5pbXBvd2VyQm94IC5zdGF0dXMge3RleHQtYWxpZ246IGNlbnRlcjt9Cg==",
    //https://自己域名下的css文件，自定义二维码样式
});

//weibo
function clickWeibo() {
    let path = window.location.pathname
    window.location.href = 'https://api.weibo.com/oauth2/authorize?client_id=391005443&response_type=code&state=' + path + '&redirect_uri=https%3A%2F%2Fwww.gcsis.cn%2Fapi%2Fweb%2Fweibo%2Fscanlogin'
}

function type() {
    $.ajax({
        url: baseUrl + '/api/pro/sysconfig/getData',
        method: 'post',
        success: function(res) {
            _this.dataState = res.temp.dhwz_status
            _this.getData()
            var day = document.getElementById('day');
            var hours = document.getElementById('hours');
            var minutes = document.getElementById('minutes');
            var seconds = document.getElementById('seconds');
            // 日 时 分 秒的dom对象
            countDownTime.init(res.temp.dhwz_startdate, day, hours, minutes, seconds);
            countDownTime.start();
            loadEnd();
        }
    })
}

function clickSubscribe() {
    let token = localStorage.getItem('token')
    if (token === null) {
        loginShow()
        return false
    }
    window.location.href = '/user'
}

function sysconfig() {
    loadStart()
    $.ajax({
        url: baseUrl + '/api/pro/sysconfig/getData',
        method: 'post',
        success: function(res) {
            res.temp.dhwz_status
            if (res.temp.dhwz_status == 1) {
                loadStart()
                issysconfig()
            } else {
                loadEnds()
            }
            localStorage.setItem('sysconfig', res.temp.dhwz_status)

        }
    })
}
sysconfig()

function issysconfig() {
    var validPaths = ['/agenda/', '/expert/', '/agendaLive/', '/results/', '/exhibitor/', '/agendaLive/', '/attendance_guide/'];
    var currentPath = window.location.pathname;

    if (validPaths.includes(currentPath)) {
        window.location.href = '/';
    } else {
        loadEnds();
    }
}

function clickIntegral() {
    if (!localStorage.getItem('token')) {
        new axMessage({
            content: '请先登录',
            result: 'waring',
            iconShow: true,
        });
        loginShow()
        return false
    }
    window.location.href = '/user?tabNav=1'
}

function loopTimer(interval, callback) {
    let timer = setInterval(callback, interval);
    return {
        stop: function() {
            clearInterval(timer);
        }
    };
}

function isDate(beginDateStr, endDateStr) {

    var curDate = new Date(),
        beginDate = new Date(beginDateStr),
        endDate = new Date(endDateStr);
    if (curDate >= beginDate && curDate <= endDate) {
        return true;
    }
    return false;

}