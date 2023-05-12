// Funções auxiliares e uteis
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

// função para preencher os dados do json no map
const preencherDadosDoItem = (pokemonItem, item, index) => {
    pokemonItem.querySelector('.name').innerHTML = item.name
    pokemonItem.querySelector('.cod').innerHTML = item.cod
    pokemonItem.querySelector('.gif').src = item.img
    pokemonItem.querySelector('.primeiro_tipo').innerHTML = item.primeiro_tipo
    pokemonItem.querySelector('.segundo_tipo').innerHTML = item.segundo_tipo
    pokemonItem.querySelector('.descricao').innerHTML = item.descricao
}

// Mapear os pókemons 
pokemonJson.map((item, index) => {
    let pokemonItem = document.querySelector('.cartao-pokemon').cloneNode(true)

    seleciona('.listagem-pokemon').append(pokemonItem)

    preencherDadosDoItem(pokemonItem, item, index)
})
