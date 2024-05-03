function hotel() {
    var hotel = document.getElementsByClassName("hotel")[0];
    var img_hotel = document.getElementsByClassName("img_hotel")[0];
    hotel.classList.add("ax-active");
    img_hotel.classList.add("ax-active");

    var map = document.getElementsByClassName("map")[0];
    map.classList.remove("ax-active");
    var img_map = document.getElementsByClassName("img_map")[0];
    img_map.classList.remove("ax-active");
}

function map() {
    var map = document.getElementsByClassName("map")[0];
    map.classList.add("ax-active");
    var img_map = document.getElementsByClassName("img_map")[0];
    img_map.classList.add("ax-active");

    var hotel = document.getElementsByClassName("hotel")[0];
    hotel.classList.remove("ax-active");
    var img_hotel = document.getElementsByClassName("img_hotel")[0];
    img_hotel.classList.remove("ax-active");
}