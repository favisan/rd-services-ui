let botoesConsulta = document.querySelectorAll(".botoes-consulta")
let consulta = document.querySelectorAll(".consulta")
let textoExpansao = document.querySelectorAll(".texto-expansao")
let mais = document.querySelectorAll(".mais")
let menos = document.querySelectorAll(".menos")

for (let i=0; i<mais.length; i++){
    mais[i].onclick = function(){
        mais[i].style.display="none";
        menos[i].style.display="block";
        textoExpansao[i].style.display="block";
        botoesConsulta[i].style.display="flex";
        botoesConsulta[i].style.alignItems="center";
        botoesConsulta[i].style.justifyContent="end";
        
    }
}

for (let i=0; i<mais.length; i++){
    menos[i].onclick = function(){
        mais[i].style.display="block";
        menos[i].style.display="none";
        textoExpansao[i].style.display="none";
        botoesConsulta[i].style.display="none";
       
        
    }
}     