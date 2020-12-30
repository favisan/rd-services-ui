let botoesConsulta = document.querySelectorAll(".botoes-consulta")
let consulta = document.querySelectorAll(".consulta")
let textoExpansao = document.querySelectorAll(".texto-expansao")
let mais = document.querySelectorAll(".mais")
let menos = document.querySelectorAll(".menos")
let filtro = document.querySelector(".filtro-text")
let opcoesFiltro1 =  document.querySelector(".filtro")
let opcoesFiltro2 =  document.querySelector(".filtro1")
let fecharFiltro =  document.querySelector(".fechar-filtro")

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

filtro.onmouseover= function(){
    opcoesFiltro1.style.display="block"
    opcoesFiltro2.style.display="block"
    fecharFiltro.style.display="block"
}

fecharFiltro.onclick= function(){
    opcoesFiltro1.style.display="none"
    opcoesFiltro2.style.display="none"
    fecharFiltro.style.display="none"
}