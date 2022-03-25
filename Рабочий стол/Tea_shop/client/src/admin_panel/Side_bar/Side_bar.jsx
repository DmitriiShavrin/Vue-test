import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useLocation } from 'react-router-dom';
import './Side_bar.css';
import storeLogin from '../../store/storeLogin';

const Side_bar = observer(() => {

    const { pathname } = useLocation();

    return (
        <>
            <div className="list-group mb-3">
                <Link to='/all_items' className={`list-group-item list-group-item-action ${ pathname == '/all_items' ? 'active' : '' }`} >Все товары</Link>
                <Link to='/solt_items' className={`list-group-item list-group-item-action ${ pathname == '/solt_items' ? 'active' : '' }`} >Проданные товары</Link>
                <Link to='/change_history' className={`list-group-item list-group-item-action ${ pathname == '/change_history' ? 'active' : '' }`} >История</Link>
                <Link to='/change_excursion' className={`list-group-item list-group-item-action ${ pathname == '/change_excursion' ? 'active' : '' }`} >Экскурсии</Link>
                <Link to='/testimonials' className={`list-group-item list-group-item-action ${ pathname == '/testimonials' ? 'active' : '' }`} >Отзывы</Link>
                <Link to='/change_contacts' className={`list-group-item list-group-item-action ${ pathname == '/change_contacts' ? 'active' : '' }`} >Контакты</Link>
                <button className="list-group-item list-group-item-action" onClick={()=>{storeLogin.logout()}}>Выйти</button>
            </div>
        </>
    )
})

export default Side_bar