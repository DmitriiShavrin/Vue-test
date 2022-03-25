import { makeAutoObservable } from "mobx";
import { request } from '../config';

import storeItems from './storeItems';

class Store {
    constructor() {
        makeAutoObservable(this);
        this.getPurchases();
        console.log(this.order)
    }

    items_in_cart = [];
    total = 0;
    total_final = 0;

    modal = false;

    order = {
        user_name: '',
        total: '',
        adress: '',
        items: []
    };

    pre_order = {
        gramm: null,
        count: 1,
    }

    sold_model = {};

    allPurchases = [];

    // get items in cart
    getCart() {
        this.items_in_cart = JSON.parse(localStorage.getItem('items')) || [];
        this.getTotal();
    };

    // add to cart
    addToCart(item) {
        const previous_products = localStorage.getItem('items') ? localStorage.getItem('items') : '[]';
        this.items_in_cart = JSON.parse(previous_products);

        const new_item = { ...item, ...this.pre_order };
        const Check = this.items_in_cart.find((itm) => itm._id == new_item._id);
        if (Check) {
            let val = Number.parseInt(Check.count);
            Check.count = val + Number.parseInt(this.pre_order.count);
        } else {
            this.items_in_cart.push(new_item);
        };

        localStorage.setItem('items', JSON.stringify(this.items_in_cart));
        this.pre_order = {
            gramm: '100',
            count: 1,
        };
        window.location.href = '/'
        this.getTotal();
    };

    setFormItem(key, value) {
        this.pre_order[key] = value;
    };

    // change volume
    changeCount(index, value) {
        this.items_in_cart[index].count = +value;
        localStorage.setItem('items', JSON.stringify(this.items_in_cart));
        this.getTotal();
    };

    //delete
    removeItem(index) {
        this.items_in_cart.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(this.items_in_cart));
        this.getTotal();
    }

    // get total
    getTotal() {
        this.total = 0;
        this.items_in_cart.forEach((el) => {
            this.total += el.count * el.price
        })
    };

    //make an order
    openOrder() {
        this.order.total = this.total;
        this.order.items = this.items_in_cart;
        this.modal = true;
    };

    setFormOrder(key, value) {
        this.order[key] = value;
    };

    makeOrder(e) {
        e.preventDefault();
        let copyOrder = { ...this.order };
        copyOrder.items = JSON.stringify(copyOrder.items)
        request('/cart/make_order', (data) => {
            if (data.status == 'ok') {
                this.closeOrderMenu();
                localStorage.removeItem('items');
                this.items_in_cart = []
                e.target.reset();
            }
        }, 'post', copyOrder)
    };

    closeOrderMenu() {
        this.modal = false;
        this.order = {
            user_name: '',
            total: '',
            adress: '',
            items: []
        };
    };

    // get all purchases
    getPurchases() {
        request('/cart', (data) => {
            if (data.status == 'ok') {
                this.allPurchases = data.body;
                this.getTotalFinal();
            }
        })
    };

    // get the earned money
    getTotalFinal() {
        this.total_final = 0
        this.allPurchases.forEach((el) => {
            this.total_final += el.total
        })
    };

    // open the purchase
    openTheSoldItem(itm) {
        this.sold_model = { ...itm };
        this.modal = true;
    };

    closeTheSoldItem() {
        this.sold_model = {};
        this.modal = false;
    };
}

export default new Store();