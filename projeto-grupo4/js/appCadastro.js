let form = document.forms[0];
let nome = document.getElementById("nome");
let cpf = document.getElementById("cpf");
let regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
cpf.onblur = function() {
    if (!regexCpf.test(this.value)) {
        document.querySelector(".alert-cpf").style.display = "block";
        return;
    }

    document.querySelector(".alert-cpf").style.display = "none";
}

nome.onblur = function() {
    let valor = nome.value
    if (valor.length == 0) {
        document.querySelector(".alert-nome").style.display = "block"
        return;
    }
    document.querySelector(".alert-danger").style.display = "none"
}

$(document).ready(function(){
    $('.cpf').mask('000.000.000-00', {reverse: true});
});

form.onsubmit = function(event) {
    event.preventDefault();  
}