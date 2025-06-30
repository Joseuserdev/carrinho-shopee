// -> açoes que meu carrinho pode fazer
// -> adicionar item
async function addItem(userCart,item){ userCart.push(item);
}

// ->deletar item
async function deleteItem(userCart,name){ const index=userCart.findIndex((item)=>item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
  }
  // ->remover item
  async function removeItem(userCart,index) { if(index >= 0 && index < userCart.length){
  userCart.splice(index,1)
  
  }}
  
  // -> calcular o total do carrinho
async function calculateTotal(userCat){ console.log("calculating total of shopee cart:");
   const result=( userCat.reduce((total,item)=>total+item.subtotal(),0)); console.log(result) }

// -> exibir a lista de itens do carrinho 
async function displayCart(userCat){ 
  console.log("shopee cart list:"); 
  userCat.forEach((item,index)=>{
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} subtotal R$ ${item.subtotal()}`); })
}


export{ addItem, 
  calculateTotal,
  deleteItem,
  removeItem, 
  displayCart }; 


