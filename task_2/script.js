function switchImgN() {
    let get = document.getElementById('getImage');
    if (get.src.match("kitty.jpg")) {
        get.src = "Kitties.jpg";
    }
}

function switchImgP() {
    let get = document.getElementById('getImage');
    if (get.src.match("Kitties.jpg")) {
        get.src = "kitty.jpg";
    }
}
