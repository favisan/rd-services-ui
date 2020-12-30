let form = document.forms[0];

let cpf = document.getElementById("cpf"); //OK


let regexCpf = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/; //regexCPF
cpf.onblur = function() {
    if (!regexCpf.test(this.value)) {
        document.querySelector(".alert-cpf-invalido").style.display = "block";
        return;
    }
    document.querySelector(".alert-cpf-invalido").style.display = "none";
    document.querySelector(".alert-cpf").style.display = "none";
}

$(document).ready(function(){
    $('.cpf').mask('000.000.000-00', {reverse: true});
});
