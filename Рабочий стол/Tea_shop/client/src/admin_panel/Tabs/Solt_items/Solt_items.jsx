import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import './Solt_items.css';
import Side_bar from '../../Side_bar/Side_bar';
import storeCart from '../../../store/storeCart';
import Navbar from '../../Navbar_admin/Navbar_admin';

const All_items = observer(() => {

    let n = 1;

    return (
        <>
            <Navbar />
            <div className="all_items">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Side_bar />
                        </div>
                        <div className="col-lg-9">
                            {/* ALL ITEMS */}
                            <div className="table_form_items">
                                <h6 className="fw-bold inscription mb-2">Все товары</h6>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className='text-center'>#</th>
                                            <th scope="col" className='text-center'>Дата</th>
                                            <th scope="col" className='text-center'>Выручка</th>
                                            <th scope="col" className='text-center'>Кол-во</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            storeCart.allPurchases.length
                                                ?
                                                storeCart.allPurchases.map((itm) => (
                                                    <tr key={itm._id}>
                                                        <th scope="row" className='text-center'>{n++}</th>
                                                        <td className='text-center'>{itm.date}</td>
                                                        <td className='text-center'>{itm.total}</td>
                                                        <td className='text-center'>{itm.items.length}</td>
                                                    </tr>
                                                ))
                                                :
                                                <h5 className='text-danger mt-2'>Нет товаров</h5>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default All_items