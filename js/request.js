/* Request do arquivo Json retirado direto do branch master da ePlus */

var requestURL = 'https://raw.githubusercontent.com/agenciaeplus/challenge-front/master/products.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function(){
    var productsText = request.response;
    var products = JSON.parse(productsText);
    populateCart(products); //Popular os textos HTML
    calculateTotal(products); //Calcular o total
    newProduct(products); //Renderização do HTML
}

