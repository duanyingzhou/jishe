if (window != top) {
    //session 失效 判断有没父页面，有，改变父页面地址
    top.location.href = location.href;
}

function yicheng() {
    var yicheng = document.getElementsByClassName("yicheng")[0];
    yicheng.classList.add("active");

    var wonderful = document.getElementsByClassName("wonderful")[0];
    wonderful.classList.remove("active");

    var sub_cont = document.getElementsByClassName("subscribe_content")[0];
    sub_cont.style.display = 'block'; // 显示元素

    var won_cont = document.getElementsByClassName("wonderful_content")[0];
    won_cont.style.display = 'none'; // 隐藏元素
}

function wonderful() {
    var wonderful = document.getElementsByClassName("wonderful")[0];
    wonderful.classList.add("active");
    var yicheng = document.getElementsByClassName("yicheng")[0];
    yicheng.classList.remove("active");
    var sub_cont = document.getElementsByClassName("subscribe_content")[0];
    sub_cont.style.display = 'none';
    var won_cont = document.getElementsByClassName("wonderful_content")[0];
    won_cont.style.display = 'block';
}

function change() {
    var clo = document.getElementsByClassName("ax-dialog")[0];
    clo.style.display = 'block';
}

function clo() {
    var clo = document.getElementsByClassName("ax-dialog")[0];
    clo.style.display = 'none';
}