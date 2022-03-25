import { makeAutoObservable } from "mobx";
import { DateUtils } from 'react-day-picker';
import { request } from '../config';

class Store {
    constructor() {
        makeAutoObservable(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.getItems();
    }

    selectedDays = [];

    modal = false;

    //create dates
    handleDayClick(day, { selected }) {
        const selectedDays = this.selectedDays.concat();
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }
        this.selectedDays = [...selectedDays];
        request('/calendar', (data) => {
            if (data.status == 'ok') {
                this.selectedDays = JSON.parse(data.body);
            }
        }, 'post', JSON.stringify(this.selectedDays))
    };

    //Getting all
    getItems() {
        request('/calendar', (data) => {
            if (data.status == 'ok') {
                this.selectedDays = JSON.parse(data.body);
            }
        })
    };

    //open modal
    openModal() {
        this.modal = true;
    }

    //close modal
    closeModal() {
        this.modal = false;
    }

}

export default new Store();