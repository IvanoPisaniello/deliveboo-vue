import { reactive } from "vue";

export const store = reactive({
  amount: 0,
  cartDish: [],
  totalPrice: 0,
  cartItemCount: 0,
})

export function incrementCount(dish) {

  if (store.cartDish.length == 0) {
    let newDish = { singleDish: dish, singleDishQuantity: 1, dishId: dish.id, restaurantId: dish.restaurant_id }
    store.cartDish.push(newDish)
    store.amount += Number(newDish.singleDish.price)
    console.log(store.cartDish)
  } else {
    for (let i = 0; i < store.cartDish.length; i++) {
      if (dish.restaurant_id == store.cartDish[0].restaurantId) {
        if (existsInCart(dish.id, store.cartDish) == true && store.cartDish[i].singleDish.title == dish.title) {
          store.cartDish[i].singleDishQuantity++
          store.amount += Number(store.cartDish[i].singleDish.price)
          console.log(store.cartDish)
        } else if (existsInCart(dish.id, store.cartDish) == false) {
          let newDish = { singleDish: dish, singleDishQuantity: 1, dishId: dish.id, restaurantId: dish.restaurant_id }
          store.amount += Number(newDish.singleDish.price)
          store.cartDish.push(newDish)
          console.log(store.amount)
          return
        }
      }
    }
  }
  console.log(store.amount)
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
        if (store.cartDish[i].singleDish.id == dish.singleDish.id && store.amount > 0) {
          store.cartDish[i].singleDishQuantity--
          store.amount -= Number(store.cartDish[i].singleDish.price)
        }
      }
    }
  }
  console.log(store.amount)
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
}


export function removeItem(index) {
  store.cartDish.splice(index, 1);
  localStorage.setItem('cartDish', JSON.stringify(store.cartDish));
}