import { makeAutoObservable } from "mobx";
import { request } from '../config';

class Store {
    constructor() {
        makeAutoObservable(this);
        this.getCategories();
    };

    model = {
        title: '',
        url: ''
    };

    notify = '';
    error = '';

    allCategories = [];

    modal = false;
    category_show_modal = false;

    // CREATION
    setForm(key, value) {
        this.model[key] = value
    };

    create(e) {
        e.preventDefault();
        request('/category', (data) => {
            switch (data.status) {
                case 'ok':
                    this.notify = 'Категория успешна создана';
                    this.error = '';
                    e.target.reset();
                    this.allCategories = [...data.body];
                    break;
                case 'already':
                    this.error = 'Категория занята';
                    this.notify = '';
                    break;
                default:
                    this.error = 'Ошибка';
                    this.notify = '';
            }
        },
            'post', this.model)
    };

    //Getting all categories
    getCategories() {
        request('/category', (data) => {
            if (data.status == 'ok') {
                this.allCategories = data.body;
            }
        })
    };

    //Delete categories
    deleteCategory(id) {
        request(`/category/${id}`, (data) => {
            if (data.status == 'ok') {
                this.allCategories = data.body;
                this.notify = 'Категория успешна удалена'
            } else {
                this.error = ' При удалении возникла ошибка'
            }
        }, 'delete')
    };

    //Editing of categories
    updateCategory(e, id) {
        e.preventDefault();
        request(`/category/${id}`, (data) => {
            if (data.status == 'ok') {
                this.allCategories = data.body;
                this.modal = false;
                this.notify = 'Категория успешно обновлена';
                e.target.reset();
            } else {
                this.error = 'При обновлении возникла ошибка'
            }
        }, 'put', this.model)
    }

    // Changing the space to input
    openUpdate(cat) {
        this.model = { ...cat };
        this.modal = true;
    };

    closeUpdate() {
        this.modal = false;
        this.model = {};
    }

    // opend category chapter to add

    openAddCategory() {
        if (!this.category_show_modal)
            this.category_show_modal = true;
        else
            this.category_show_modal = false
    };

};

export default new Store();