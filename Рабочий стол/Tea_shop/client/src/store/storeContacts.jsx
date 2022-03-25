import { makeAutoObservable } from "mobx";
import { request } from '../config';

class Store {
    constructor() {
        makeAutoObservable(this);
        this.getItems();
        this.current();
    };

    model = {
        email: '',
        phone: ''
    };

    notify = '';
    error = '';

    edit = false;

    allContacts = [];
    currentContacts = {};

    //create an item
    setFormItem(key, value) {
        this.model[key] = value;
    };

    create(e) {
        e.preventDefault();
        request('/contacts', (data) => {
            if (data.status == 'ok') {
                this.allContacts = data.body;
                this.notify = 'Контакты успешно созданы';
                e.target.reset();
            } else {
                this.error = 'Произошла ошибка';
            }
        }, 'post', this.model)
    };

    //Getting all
    getItems() {
        request('/contacts', (data) => {
            if (data.status == 'ok') {
                this.allContacts = data.body;
            }
        })
    };

    // Delete item
    deleteItem(id) {
        request(`/contacts/${id}`, (data) => {
            if (data.status == 'ok') {
                this.allContacts = data.body;
                this.notify = 'Контакты успешно удалены';
            } else {
                this.error = 'Возникла ошибка при удалении';
            }
        }, 'delete')
    };

    //Edition of items
    updateItem(e, id) {
        e.preventDefault();
        request(`/contacts/${id}`, (data) => {
            if (data.status == 'ok') {
                this.allContacts = data.body;
                this.edit = false;
                e.target.reset();
                this.notify = 'Контакты успешно изменены';
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
        request(`/contacts/activate/${id}`, (data) => {
            if (data.status == "ok") {
                this.allContacts = data.body
            }
        }, 'put')
    };

    // get current
    current() {
        request('/contacts/current', (data) => {
            if (data.status == 'ok') {
                this.currentContacts = data.body
            }
        })
    }

};

export default new Store();