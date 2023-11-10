import { reactive } from "vue";

export const store = reactive({
  counts: {},
  cartDish: [],
  totalPrice: 0,
  cartItemCount: 0,
})

export function incrementCount(dish) {
  const dishInCart = store.cartDish.find(item => item.id === dish.id);

  if (store.cartDish.length > 0 && store.cartDish[0].restaurant_id !== dish.restaurant_id) {
    alert('Non puoi aggiungere piatti da ristoranti diversi allo stesso carrello.');
    return;
  }

  if (!dishInCart) {
    store.cartDish.push({ id: dish.id, count: 1, restaurant_id: dish.restaurant_id, title: dish.title, price: dish.price });
    store.counts[dish.id] = 1;
  } else {
      dishInCart.count++;
      store.counts[dish.id]++;
    } 
    console.log(store.cartDish)
    saveCartToLocalStorage();
  }


export function updateCartItemCount() {
  this.cartItemCount = store.cartDish.reduce((total, item) => {
    return total + item.count;
  }, 0);
}

export function decrementCount(dish) {
  if (store.counts[dish.id] > 0) {
    const dishInCart = store.cartDish.find(item => item.id === dish.id);

    if (dishInCart) {
      if (dishInCart.count > 1) {
        dishInCart.count--;
        store.counts[dish.id]--;
      } else {
        const index = store.cartDish.findIndex(item => item.id === dish.id);
        if (index !== -1) {
          store.cartDish.splice(index, 1);
          delete store.counts[dish.id];
        }
      }
      saveCartToLocalStorage();
    }
  }
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