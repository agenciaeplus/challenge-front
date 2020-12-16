// Elements
const $cart = document.getElementById('cart');
const $cartContent = document.getElementById('cart-content');





// Configura os eventos que exibem e escondem o conteúdo do carrinho
$cart.addEventListener('click', async event => {
    toggleCartView();
    event.stopPropagation();
});

$cartContent.addEventListener('click', event => {
    event.stopPropagation();
});

document.addEventListener('click', event => {
    toggleCartView(true);
});
//-------------------------------------------------------------------


// Alterna a visibilidade do conteúdo do carrinho ou torna invisível se 'flag' for true
// Retorna o estado: true => Visível | false => escondido
function toggleCartView(flag?: boolean){
    if(flag){
        $cartContent.style.display = 'none';
        return false;
    }
    else{
        if($cartContent.style.display == 'none'){
            $cartContent.style.display = 'inline-block';
            return true;
        }
        else{
            $cartContent.style.display = 'none';
            return false;
        }
    }
}

// Faz uma requisição e retorna o conteúdo do carrinho
async function requestCartData(){
    return new Promise(async (resolve, reject) => {
        const data = await fetch("data/products.json");
        resolve(await data.json());
    });
}