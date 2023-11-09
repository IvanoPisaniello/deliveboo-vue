import { reactive } from "vue";

export const store = reactive({
  count: 0,
  cartDish: [],
})

export function incrementCount(dish) {
  if (store.cartDish.length === 0 || store.cartDish[0].restaurant_id === dish.restaurant_id) {

    store.cartDish.push(dish);
    store.count++;
    saveCartToLocalStorage();
  } else {

    alert('Non puoi aggiungere piatti da ristoranti diversi allo stesso carrello.');
  }
}


export function decrementCount(dish) {
  if (store.count > 0) {
    store.count--;

    const index = store.cartDish.findIndex(item => item.id === dish.id);
    if (index !== -1) {

      store.cartDish.splice(index, 1);
    }
    //console.log(store.cartDish);
  }
  saveCartToLocalStorage();
}

export function saveCartToLocalStorage() {
  localStorage.setItem('cartDish', JSON.stringify(store.cartDish));
}

export function clearCart() {
  localStorage.clear();
  store.cartDish = [];
}


export function removeItem(index) {
  store.cartDish.splice(index, 1);
  localStorage.setItem('cartDish', JSON.stringify(store.cartDish));
}