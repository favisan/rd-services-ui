window.addEventListener('DOMContentLoaded', function () {

    //Declarando as constantes
    const form = document.querySelector('form');
    const botaoCheck = document.querySelector('#todoMarcarTodos');
    const listasTarefas = document.querySelector('#todoLista');
    const botaoLimpar = document.querySelector('#todoRemoverTodos');
    

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const input = document.querySelector('#todoInput').value.trim()

        if (!input) {
            return document.querySelector(".campo").style.display = "block"
        }
        return addTarefa(input), form.reset();
    })
//função de click para coletar dados digitados  e criado p,span
    function addTarefa(input) {
        const tarefa = document.createElement('li');
        const paragrafo = document.createElement('p');
        const span = document.createElement('span');

        span.innerText = 'x';
        span.classList.add('todo__btn-excluir');
        paragrafo.innerText = input;

        tarefa.setAttribute('draggable', true);

        tarefa.appendChild(paragrafo);
        tarefa.appendChild(span);
        listasTarefas.appendChild(tarefa);

        paragrafo.addEventListener('click', function () {
            paragrafo.classList.toggle('checked')
        })
        span.addEventListener('click', function () {
            tarefa.remove()
        })
    }
    
    // botaoCheck.addEventListener('click', function () {
    //     const itens = document.querySelectorAll('p');
    //     itens.forEach(function (itens) {
    //         itens.classList.toggle('checked')
    //     })
    // })
    
    // botaoLimpar.addEventListener('click', function () {
    //     const itens = document.querySelectorAll('li');
    //     itens.forEach(function (itens) {
    //         itens.remove();
    //     })
    // })

})