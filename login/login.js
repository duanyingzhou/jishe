if (window != top) {
    //session 失效 判断有没父页面，有，改变父页面地址
    top.location.href = location.href;
}

$(function() {
    $(".error-pass, .error-userName").hide();
    $(".overlay").hide();
    $(".confirmation").hide();
    $(".index_top_div").focus();

});
// 验证登录信息格式
function validateLoginForm() {
    var countErrors = 0;
    var userName = $("#name");
    var passInput = $("input[type=password]");

    if (userName.val() < 1) {
        $(".error-userName").fadeIn();
        $(".userName-msg").html("用户名不能为空");
        $(userName).addClass("warning");
        countErrors++;
    } else {
        $(userName).removeClass("warning");
    }

    if (passInput.val().length < 5) {
        $(".error-pass").fadeIn();
        $(".pass-msg").html("密码长度不能小于5个字符");
        $(passInput).addClass("warning");
        countErrors++;
    } else {
        $(passInput).removeClass("warning");
    }

    setTimeout(function showErrorMsg() {
        $(".error-userName, .error-pass").fadeOut();
    }, 2000)

    if (countErrors === 0) {
        $(".overlay").show();
        $(".confirmation").show();
    }
}

function register() {
    alert("注册成功");
}
// 跳转到登录
function toLogin() {
    var login = document.getElementById("loginForm");
    login.style.display = 'block';
    var reg = document.getElementById("registerForm");
    reg.style.display = 'none';
}
// 跳转到注册
function toRegist() {
    var login = document.getElementById("loginForm");
    login.style.display = 'none';
    var reg = document.getElementById("registerForm");
    reg.style.display = 'block';
}


function key_down(num) {
    if (num == 13) {
        var name = $.trim($("#name").val());
        var pass = $.trim($("#password").val());

        if (name && pass) {
            validateForm();
        } else {
            layer.closeAll(); //疯狂模式，关闭所有层
        }
    }
}

