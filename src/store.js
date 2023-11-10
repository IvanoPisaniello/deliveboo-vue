import { reactive } from "vue";

export const store = reactive({
  amount: 0,
  cartDish: [],
  totalPrice: 0,
  cartItemCount: 0,
})

export function incrementCount(dish) {

  //se il carrello è vuoto mi aggiunge il piatto
  if (store.cartDish.length == 0) {
    //crea un oggetto piatto e salva piatto, quantità del piatto, id del piatto, id del ristorante correlato al piatto e poi lo aggiunge al cart e aggiorna la somma totale con il prezzo del piatto
    let newDish = { singleDish: dish, singleDishQuantity: 1, dishId: dish.id, restaurantId: dish.restaurant_id }
    store.cartDish.push(newDish)
    store.amount += Number(newDish.singleDish.price)
  } else {
    for (let i = 0; i < store.cartDish.length; i++) {
      //controlla che l'id del piatto corrisponda all'id del ristorante del primo piatto inserito
      if (dish.restaurant_id == store.cartDish[0].restaurantId) {
        //se il piatto esiste già incrementa la qua quantità e la somma totale
        if (existsInCart(dish.id, store.cartDish) == true && store.cartDish[i].singleDish.title == dish.title) {
          store.cartDish[i].singleDishQuantity++
          store.amount += Number(store.cartDish[i].singleDish.price)
        } else if (existsInCart(dish.id, store.cartDish) == false) {
          //se invece il piatto non esiste lo crea e incrementa la somma totale
          let newDish = { singleDish: dish, singleDishQuantity: 1, dishId: dish.id, restaurantId: dish.restaurant_id }
          store.amount += Number(newDish.singleDish.price)
          store.cartDish.push(newDish)

          updateStorage()
          console.log('Storage: ', JSON.parse(localStorage.getItem('cartDish')))
          return
        }
      }
    }
  }
  updateStorage()
  console.log(store.amount)
  console.log('Storage: ', JSON.parse(localStorage.getItem('cartDish')))
}

function existsInCart(dishId, cart) {
  for (let i = 0; i < cart.length; i++) {
    if (dishId == cart[i].dishId) {
      return true
    }
  }
  return false
}

export function decrementCount(dish) {
  if (store.cartDish.length == 0) {
    return
  } else {
    for (let i = 0; i < store.cartDish.length; i++) {
      if (dish.singleDish.restaurant_id == store.cartDish[0].restaurantId) {
        //se un di un elemento c'è almeno un pezzo decremento la quantità, 
        if (store.cartDish[i].singleDish.id == dish.singleDish.id && store.amount > 0) {
          store.cartDish[i].singleDishQuantity--
          store.amount -= Number(store.cartDish[i].singleDish.price)
          localStorage.removeItem(store.cartDish[i])
        }

        //se la quantità di un elemento è 0 allora lo tolgo dal carrello
        if (store.cartDish[i].singleDishQuantity == 0) {
          store.cartDish = store.cartDish.splice(i, store.cartDish[i]);
          console.log(store.cartDish)
        }
      }
    }
  }
  console.log('Storage: ', JSON.parse(localStorage.getItem('cartDish')))
  console.log(store.amount)
}


function updateStorage() {
  for (let i = 0; i < store.cartDish.length; i++) {
    localStorage.setItem('cartDish', JSON.stringify(store.cartDish[i]))
  }
}






export function updateCartItemCount() {
  this.cartItemCount = store.cartDish.reduce((total, item) => {
    return total + item.count;
  }, 0);
}

export function updateTotalPrice() {
  this.totalPrice = store.cartDish.reduce((total, item) => {
    const itemCount = item.count || 0;
    const itemPrice = item.price || 0;
    return total + (itemCount * itemPrice);
  }, 0);
}

export function saveCartToLocalStorage() {
  localStorage.setItem('cartDish', JSON.stringify(store.cartDish));
  localStorage.setItem('counts', JSON.stringify(store.counts));
}

export function clearCart() {
  localStorage.clear();
  store.cartDish = [];
  store.amount = 0;
}


export function removeItem(index) {
  store.cartDish.splice(index, 1);
  localStorage.setItem('cartDish', JSON.stringify(store.cartDish));
}