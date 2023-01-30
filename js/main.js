const form = document.querySelector('#novoItem');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    criaElemento(e.target.elements['nome'].value, e.target.elements['quantidade'].value)
})

function criaElemento(nome, qtde) {
    //incluir dados no DOM <li class="item"><strong>7</strong>Camisas</li>
    console.log(nome)
    console.log(qtde)
    //criando li (item da lista)
    const novoItem = document.createElement('li')
    //incluindo classe para o li
    novoItem.classList.add('item')
    //criando elemento strong
    const nrItem = document.createElement('strong')
    //incluindo a quantidade dentro no strong
    nrItem.innerHTML = qtde
    //incluir o elemento strong no elemento lista
    novoItem.appendChild(nrItem)
    //incluindo quantidade no item
    novoItem.innerHTML += nome
    const lista = document.querySelector('ul');
    lista.appendChild(novoItem)
} 