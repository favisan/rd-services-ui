let botoesConsulta = document.querySelectorAll(".botoes-consulta")
let consulta = document.querySelectorAll(".consulta")
let textoExpansao = document.querySelectorAll(".texto-expansao")

for (let i=0; i<consulta.length; i++){
    consulta[i].onclick = function(){
        textoExpansao[i].style.display="flex";
        textoExpansao[i].style.paddingRight="1%";
        consulta[i].style.height="15vh";
        consulta[i].onclick = function(){
            textoExpansao[i].style.display="none"
            consulta[i].style.height="5vh";
            botoesConsulta[i].style.display="none";
        }     
        botoesConsulta[i].style.display="flex";
        botoesConsulta[i].style.alignItems="center";
        botoesConsulta[i].style.justifyContent="end";
    }
}
