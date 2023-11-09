import { reactive } from "vue";

export const store = reactive({
  counts: {},
  cartDish: [],
})

export function incrementCount(dish) {
  const dishInCart = store.cartDish.find(item => item.id === dish.id);

  if (!dishInCart) {
    store.cartDish.push({ id: dish.id, count: 1, restaurant_id: dish.restaurant_id, title: dish.title, price: dish.price });
    store.counts[dish.id] = 1;
  } else {
    if (store.cartDish.length === 0 || store.cartDish[0].restaurant_id === dish.restaurant_id) {
      dishInCart.count++;
      store.counts[dish.id]++;
    } else {
      alert('Non puoi aggiungere piatti da ristoranti diversi allo stesso carrello.');
      return;
    }
  }
  console.log(store.cartDish)
  saveCartToLocalStorage();
}


export function decrementCount(dish) {

  if (store.counts > 0) {
    const dishInCart = store.cartDish.find(item => item.id === dish.id)

    if (dishInCart) {
      if (dishInCart > 1) {
        dishInCart.counts--;
      } else {
        const index = store.cartDish.findIndex(item => item.id === dish.id);
        if (index !== -1) {

          store.cartDish.splice(index, 1);
        }

      }
      store.counts[dish.id]
      saveCartToLocalStorage();
    }
  }

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