import { makeAutoObservable } from "mobx";
import { request } from '../config';

class Store {
    constructor() {
        makeAutoObservable(this);
        this.getItems();
        this.current();
    };

    model = {
        discription: '',
        photo: '',
        register: new Date().toLocaleString()
    };

    notify = '';
    error = '';

    img_min = null;
    img_show = false;

    edit = false;

    history = [];
    currentHistory = {};

    //create an item
    setFormItem(key, value) {
        if (key == 'photo') {
            this.preview(value);
            this.model.old_photo = this.model.photo;
        }
        this.model[key] = value;
    };

    create(e) {
        e.preventDefault();
        request('/history', (data) => {
            if (data.status == 'ok') {
                this.history = data.body;
                this.notify = 'История успешно создана';
                e.target.reset();
            } else {
                this.error = 'Произошла ошибка';
            }
        }, 'post', this.model)
        this.img_min = null;
        this.img_show = false;
    };

    preview(file) {
        const fReader = new FileReader();
        fReader.readAsDataURL(file);
        let _this = this;
        fReader.onloadend = function () {
            _this.img_min = fReader.result
            _this.img_show = true
        }
    };

    closeModal() {
        this.img_show = false;
        this.img_min = null;
    };

    //Getting all
    getItems() {
        request('/history', (data) => {
            if (data.status == 'ok') {
                this.history = data.body;
            }
        })
    };

    // Delete item
    deleteItem(id) {
        request(`/history/${id}`, (data) => {
            if (data.status == 'ok') {
                this.history = data.body;
                this.notify = 'История успешно удалена';
            } else {
                this.error = 'Возникла ошибка при удалении';
            }
        }, 'delete')
    };

    //Edition of items
    updateItem(e, id) {
        e.preventDefault();
        request(`/history/${id}`, (data) => {
            if (data.status == 'ok') {
                this.history = data.body;
                this.edit = false;
                e.target.reset();
                this.notify = 'История успешно изменена';
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
        request(`/history/activate/${id}`, (data) => {
            if (data.status == "ok") {
                this.history = data.body
            }
        }, 'put')
    };

    // get current
    current() {
        request('/history/current', (data) => {
            if (data.status == 'ok') {
                this.currentHistory = data.body
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