import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}
  addToCart(food: Food): void {
    // Check wether we already have the item added in cart
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) return;
    // If not add it
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    // Find the food item
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);

    // If item is not present then return
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  // Doubt
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  // Local Storage
  private setCartToLocalStorage(): void {
    // Total price - looping over and adding the price
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currItem) => prevSum + currItem.price,
      0
    );
    // Total Item Count including quantity
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currItem) => prevSum + currItem.quantity,
      0
    );
    // Cart item JSON
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    // Doubt
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage() {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
