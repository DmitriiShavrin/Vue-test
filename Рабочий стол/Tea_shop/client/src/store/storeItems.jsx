import { makeAutoObservable } from "mobx";
import { request } from '../config';
import storeCategory from "./storeCategory";

class Store {
    constructor() {
        makeAutoObservable(this);
        this.getItems();
        this.getAllTeas();
        this.getAllPots();
    };

    validate = {
        price: {
            value: /^\d+$/,
            mess: 'Price incorrect'
        },
        discount: {
            value: /^\d+$/,
            mess: 'Discount incorrect'
        },
        quantity: {
            value: /^\d+$/,
            mess: 'Quantity incorrect'
        }
    };

    model = {
        title: '',
        category_id: '',
        photo: '',
        price: '',
        discount: '0',
        quantity: ''
    };

    notify = '';
    error = '';

    img_min = null;
    img_show = false;

    edit_card_show = false;
    modal = false;
    item_show_modal = false;

    if_discount = false;

    allItems = [];
    allTeas = [];
    allPots = [];

    cardToDisplay = {};

    // check numbers in form
    validateForm(cb) {
        for (let key in this.validate) {
            for (let m in this.model) {
                if (key == m) {
                    if (this.model[m].search(this.validate[key].value) == -1) {
                        this.error = this.validate[key].mess;
                        return;
                    }
                }
            }
        }
        cb();
    };

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
        this.validateForm(() => {
            request('/items', (data) => {
                switch (data.status) {
                    case 'ok':
                        this.notify = 'Товар успешно создан';
                        this.error = '';
                        e.target.reset();
                        break;
                    case 'already':
                        this.notify = '';
                        this.error = 'Товар уже существует';
                        break;
                    default:
                        this.error = 'Произошла ощибка';
                        this.notify = ''
                }
            }, 'post', this.model)
            this.img_min = null;
            this.img_show = false;
        })
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
        this.img_show = false
    };

    //Getting all
    getItems() {
        request('/items', (data) => {
            if (data.status == 'ok') {
                this.allItems = this.changeCatId(data.body);
            }
        })
    };

    //change the name of category_id
    changeCatId(data) {
        for (let x in data) {
            for (let y in storeCategory.allCategories) {
                if (data[x].category_id == storeCategory.allCategories[y]._id) {
                    data[x].category_title = storeCategory.allCategories[y].title
                }
            }
        }
        return data;
    };

    // open discount and close for checkbox
    openDiscount(value) {
        this.if_discount = value;
    };

    // Delete item
    deleteItem(id) {
        request(`/items/${id}`, (data) => {
            if (data.status == 'ok') {
                this.allItems = data;
                this.notify = 'Товар успешно удален';
            } else {
                this.error = 'Возникла ошибка при удалении';
            }
        }, 'delete')
    };

    //Edition of items
    updateItem(e, id) {
        e.preventDefault();
        request(`/items/${id}`, (data) => {
            if (data.status == 'ok') {
                this.allItems = data;
                this.edit_card_show = false;
                e.target.reset();
                this.notify = 'Товар успешно изменен';
            } else {
                this.error = 'Возникла ошибка при обновлении';
            }
        }, 'put', this.model)
    };

    // Open update
    openUpdate(itm) {
        this.model = { ...itm };
        this.edit_card_show = true;
    };

    closeModalEdit() {
        this.edit_card_show = false;
        this.model = null;
    };

    // opend item chapter to add
    openAddItem() {
        if (!this.item_show_modal)
            this.item_show_modal = true;
        else
            this.item_show_modal = false
    };

    // get all teas
    getAllTeas() {
        request('/items/all_teas', (data) => {
            if (data.status == 'ok') {
                this.allTeas = data.body;
            }
        }, 'post', {category_id: '6218bb4a805ae03490379a0d'})
    };

    //get all pots
    getAllPots() {
        request('/items/all_pots', (data) => {
            if (data.status == 'ok') {
                this.allPots = data.body;
            }
        }, 'post', {category_id: '6218d0be7266f70f1ef862e3'})
    };

    // get card
    getCard(path) {
        this.cardToDisplay = this.allItems.find(item => item._id == path)
    };

};

export default new Store();