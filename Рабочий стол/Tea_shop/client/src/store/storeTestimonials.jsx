import { makeAutoObservable } from "mobx";
import { request } from '../config';

class Store {
    constructor() {
        makeAutoObservable(this);
        this.getItems();
        this.current();
        console.log(this.currentTestimonials)
    };

    model = {
        discription: '',
        register: new Date().toLocaleString()
    };

    notify = '';
    error = '';

    img_min = null;
    img_show = false;

    edit = false;

    allTestimonials = [];
    currentTestimonials = [];

    //create an item
    setFormItem(key, value) {
        this.model[key] = value;
    };

    create(e) {
        e.preventDefault();
        request('/testimonials', (data) => {
            if (data.status == 'ok') {
                this.allTestimonials = data.body;
                this.notify = 'Отзыв успешно создан';
                e.target.reset();
            } else {
                this.error = 'Произошла ошибка';
            }
        }, 'post', this.model)
    };

    //Getting all
    getItems() {
        request('/testimonials', (data) => {
            if (data.status == 'ok') {
                this.allTestimonials = data.body;
            }
        })
    };

    // Delete item
    deleteItem(id) {
        request(`/testimonials/${id}`, (data) => {
            if (data.status == 'ok') {
                this.allTestimonials = data.body;
                this.notify = 'Отзыв успешно удален';
            } else {
                this.error = 'Возникла ошибка при удалении';
            }
        }, 'delete')
    };

    //Edition of items
    updateItem(e, id) {
        e.preventDefault();
        request(`/testimonials/${id}`, (data) => {
            if (data.status == 'ok') {
                this.allTestimonials = data.body;
                this.edit = false;
                e.target.reset();
                this.notify = 'Отзыв успешно изменен';
            } else {
                this.error = 'Возникла ошибка при обновлении';
            }
        }, 'put', this.model)
    };

    // Open update
    openUpdate(itm) {
        this.model = { ...itm };
        this.edit = true;
    };

    closeModalEdit() {
        this.edit = false;
        this.model = null;
    };

    //Get active
    activate(id) {
        request(`/testimonials/activate/${id}`, (data) => {
            if (data.status == "ok") {
                this.allTestimonials = data.body
            }
        }, 'put')
    };

    //Get dis_active
    dis_activate(id) {
        request(`/testimonials/dis_activate/${id}`, (data) => {
            if (data.status == "ok") {
                this.allTestimonials = data.body
            }
        }, 'put')
    };

    // get current
    current() {
        request('/testimonials/current', (data) => {
            console.log(data.status)
            if (data.status == 'ok') {
                this.currentTestimonials = data.body
            }
        })
    }

    // opend item chapter to add
    openAddItem() {
        if (!this.item_show_modal)
            this.item_show_modal = true;
        else
            this.item_show_modal = false
    };

};

export default new Store();