let ccContainer = document.querySelector(".dadosCC");
let inputCC = document.querySelector("#pagar-CC");
let inputLocal = document.querySelector('#pagar-Local');

inputCC.addEventListener("click", () => {
    if (inputCC.checked == true) {
        ccContainer.style.display = "block";
        return;
    }
});


inputLocal.addEventListener("click", () => {
    if (inputLocal.checked == true) {
        ccContainer.style.display = "none";
        return;
    }
});