const form = document.querySelector('#novoItem');
const lista = document.querySelector('ul');
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach ((e) => {
    criaElemento(e)
})

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const nome = e.target.elements['nome']
    const quantidade = e.target.elements['quantidade']

    const itemAtual = {
        "quantidade": quantidade.value,
        "nome": nome.value
    } 
    
    criaElemento(itemAtual)
    itens.push(itemAtual)
    localStorage.setItem("itens", JSON.stringify(itens))
    
    quantidade.value = ""
    nome.value = ""

})


function criaElemento(item) {
    //incluir dados no DOM <li class="item"><strong>7</strong>Camisas</li>
    //criando li (item da lista)
    const novoItem = document.createElement('li')
    //incluindo classe para o li
    novoItem.classList.add('item')
    //criando elemento strong
    const nrItem = document.createElement('strong')
    //incluindo a quantidade dentro no strong
    nrItem.innerHTML = item.quantidade
    //incluir o elemento strong no elemento lista
    novoItem.appendChild(nrItem)
    //incluindo quantidade no item
    novoItem.innerHTML += item.nome
    lista.appendChild(novoItem)



} 