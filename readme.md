![Eplus](https://www.agenciaeplus.com.br/wp-content/themes/eplus/images/agencia-eplus-n-logo.png)

# E-Plus Frontend Challenge

Seja bem-vindo ao E-Plus Front-end Challenge, considere este o primeiro passo para fazer parte de uma das melhores equipes de ecommerce e marketing digital do Brasil!

Para completar o desafio com sucesso você precisará codificar o layout que segue no projeto, para isso será necessário consumir um json via xhttp que retornará uma lista de produtos na resposta do request e servirá para alimentar/manipular o mini-cart.

Então mãos a obra e bom challenge ;)

## Design

- O topo apresentado deve seguir o [seguinte design](https://projects.invisionapp.com/share/NARHXUS6HCF#/357617423_Eplus)
- Baseado neste layout, faça uma adaptação responsiva para celulares.

## Como realizar o teste

- Faça um fork deste repositório em seu GitHub
- Adicione ao Readme uma descrição de como executar seu projeto
- Descreva as funcionalidades do seu desafio, nos conte tudo que fez! Se fez o desafio utilizando pré-processadores, por exemplo, pois usaremos estas informações para avaliá-lo. 
- O ideal é que este challenge leve até 8h.
- Faça commits parciais, para que possamos acompanhar o seu desenvolvimento.
- Em caso de dúvidas, entre em contato com nadia@agenciaeplus.com.br

## Dicas

- Os ícones usados, são todos do Material Design. https://material.io/icons/
- A fonte utilizada é Montserrat (Está fonte se encontra no google fonts). 
- Trabalhamos com clientes perfeccionistas, portanto tenha atenção com espaçamentos, tamanhos e estilos de fonte. 

## Critérios de avaliação

- Alcançar os objetivos propostos
- Qualidade de código
- Commits parciais, mostrando a linha de desenvolvimento
- Boa descrição das funcionalidades do desafio
- Fidelidade ao design proposto
- Adaptação mobile

## Resolução

- Na resolução do problema decidi utilizar React.JS por ser uma tecnologia que está super em alta no mercado, e também por estar no meu roadmap de estudos.
- Foi criado um componente Header para mostrar em tela o menu, dentro desse componente alguns dados foram tratados para trazer o resultado correto.
- Utilizei algumas bibliotecas para facilitar o trabalho, tais como: 
 - Sass como pré processador css.
 - React-icons para trazer os dados do material icons.
- Depois de toda a estrutura montada e estilo finalizado, foi criado as funções para tratar os dados, tais como: 
 - Reduce do JavaScript para trazer o valor total dos itens.
 - ToLocaleString do JavaScript para converter o valor total em reais.
 - Substr do JavaScript para trazer o texto do produto formatado.
 - UseEffect do React para preencher o front-end com todos os dados, assim que a tela for carregada.
 - UseState do React para guardar e atualizar os dados na tela.
- Foi utilizado como referência alguns sites e vídeos: 
 - O vídeo da DevMedia falando sobre Map e Reduce (https://www.youtube.com/watch?v=zTZNpBP-OJI).
 - A documentação oficial do JavaScript (https://developer.mozilla.org/pt-BR/).
 - E o curso de React da RocketSeat na qual sou aluna (https://skylab.rocketseat.com.br/dashboard).

 ## Comandos para rodar o projeto

 - Para rodar o projeto basta navegar até a pasta challenge dentro do terminal, e rodar o comando npm start ou yarn start.

 ## Espero que gostem do meu desafio! 😁💻