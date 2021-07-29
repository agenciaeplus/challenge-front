/* Tentei criar um render para quando fosse adicionado*/

function newProduct(jsonObj){
    var cart = document.getElementById('products');
    var content = '<div class="product-container"><img id="product-image" src="" alt="produto"><div class="product-info"><p id="title">Lorem ipsum dolor sit amet consectetur adipisicing.</p><div class="amo-val"><p>Qtd.: <p id="amount">$n</p></p><p id="value">R$ $value</p></div></div><i class="fas fa-times-circle delete-item" onclick="removeCartItem()"></i></div>' //renderiza o card do produto

    /*  for (let i = 0; i < Object.keys(jsonObj.cart.item[i]).length; i++) {
        console.log(jsonObj.cart.item[i])
        document.getElementsByClassName('product-info').innerHTML = jsonObj.cart.item[i].name;
    } */
    cart.insertAdjacentHTML('afterbegin', content) //injeta o render antes do total
}

/* Função para remover itens do carrinho */

function removeCartItem(){
    var deleteButton = document.getElementsByClassName('delete-item');
    for (let i = 0; i < deleteButton.length; i++) {
        var button = deleteButton[i];
        button.addEventListener('click', function(event){
            var buttonClicked = event.target;
            buttonClicked.parentElement.remove();
        })
    }
}

