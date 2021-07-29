/* Função para mostrar o carrinho */

function popCart(){
    var cart = document.getElementById("cart");
    
    if(cart.style.display === "none"){
        cart.style.display = "flex";
    }else{
        cart.style.display = "none";
    }
}

/* Função para popular textos html (porém essa função só funciona quando o html já existe no arquivo index) */

function populateCart(jsonObj){

    document.getElementById("product-image").src = jsonObj.cart.item[0].image;
    document.getElementById("title").textContent = jsonObj.cart.item[0].name;
    document.getElementById("amount").innerHTML = jsonObj.cart.item[0].quantity;
    document.getElementById("value").innerHTML = jsonObj.cart.item[0].bestPriceFormated;
}

/* Função para calcular o total dos itens */

function calculateTotal(jsonObj){
    var total = document.getElementById('total-to-pay'); //total do html
    /* var totalReal = jsonObj.cart.item.map(value => value.bestPrice).reduce((acc, value) => value + acc);
    console.log(totalReal); */ //Tentei mapear o array do Json para trocar pelo for, mas sem sucesso. ):
    var totalReal = 0

    for (let i = 0; i < jsonObj.cart.item.length; i++) {
        totalReal += jsonObj.cart.item[i].bestPrice; //autoinrementa o valor de todos os produtos
    }
    
    total.textContent = totalReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) //converte o valor inteiro para moeda real
}

calculateTotal(); //chama função, mas não funciona com o render