
// Importa a função createItem do módulo item.js

import createItem  from "./services/item.js"

// Importa as funções relacionadas ao carrinho do módulo cart.js

import * as cartService from "./services/cart.js"


 // Cria um array vazio que irá representar o carrinho de compras do usuário
const Mycart = [];

// Cria um array vazio que irá representar a lista de desejos do usuário
const wishlist=[];

// Mensagem de boas-vindas ao usuário

console.log("welcome to your shopee cart");

// Cria dois itens usando a função createItem, com nome,  preço e quantidade

const item1= await createItem("hotwheels ferrari",20.99,1);
const item2= await createItem("hotwheels lamborgini",49.99,3);

// Exibe os detalhes dos itens criados no console
await cartService.addItem(Mycart,item1);
await cartService.addItem(Mycart,item2);
await cartService.deleteItem(Mycart, item2.name);

// Exibe o carrinho de compras do usuário;


//await cartService.deleteItem(Mycart,item1.name);

//await cartService.removeItem(Mycart,2);

await cartService.displayCart(Mycart);


console.log("shoope cart total !");
await cartService.calculateTotal(Mycart);