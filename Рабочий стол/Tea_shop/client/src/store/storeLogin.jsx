import { makeAutoObservable } from "mobx";
import { request } from '../config';

class Store {

    notify = '';
    error = '';

    ON = false; 

    // Login form
    formLogin = {
        email: '',
        pass: ''
    };

    constructor() {
        makeAutoObservable(this);
        this.checkToken();
        console.log(this.ON)
    };

    // Check token
    checkToken() {
        const token = localStorage.getItem('token');
        if (token) {
            this.checkLogin(token)
        }
    };

    // Login
    setFormLogin(key, value) {
        this.formLogin[key] = value;
    };

    login(e) {
        e.preventDefault();
        for (const key in this.formLogin) {
            if (!this.formLogin[key].trim()) {
                this.error = `Field ${key} incorrect`;
                return;
            }
        };
        request('/users/login', (data) => {
            this.notify = this.error = '';

            if (data.status === 'ok') {
                localStorage.setItem('token', data.token);
                this.notify = 'Login success';
                this.ON = true;
                window.location.href = '/all_items'
            } else {
                this.error = 'Non valid data'
            }
        }, 'post', this.formLogin)
    };

    checkLogin(token) {
        request('/users/check', (data) => {
            this.notify = this.error = '';
            if (data.status !== 'ok') {
                this.logout();
            } else {
                this.ON = true;
            }
        }, 'post', { token: token })
    };

    // Logout
    logout() {
        localStorage.removeItem('token');
        this.ON = false;
        window.location.href = '/'
    };

};

export default new Store();