var iWidth = 1920
var iMinWidth = 1080
var e = window.document,
    t = e.documentElement,
    i = iWidth,
    d = i / 10,
    o = 'orientationchange' in window ? 'orientationchange' : 'resize',
    a = function() {
        var n = t.clientWidth || 1080;
        n > iWidth && (n = iWidth);
        n <= iMinWidth && (n = iMinWidth);
        t.style.fontSize = n / d + 'px';
    }
e.addEventListener &&
    (window.addEventListener(o, a, !1),
        e.addEventListener('DOMContentLoaded', a, !1))