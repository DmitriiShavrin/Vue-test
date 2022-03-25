import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './Tea.css';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import storeItems from '../../store/storeItems';

const Tea = observer(() => {
    return (
        <>
            <Navbar />
            <div className="tea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="our_production text-center">ЧАИ НАШЕГО ПРОИЗВОДСТВА</h5>
                        </div>
                    </div>
                    <div className="row mt-4">
                        {
                            storeItems.allTeas.length ?
                                storeItems.allTeas.map((itm, idx) => (
                                    <div className="col-lg-3" key={idx}>
                                        <Link to={`/item/${itm._id}`} className='td_none'>
                                            <div className="card card_item" >
                                                <img src={`/img/${itm.photo}`} className="card-item-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h4 className="card-text">{itm.title}</h4>
                                                    <p className="card-text">{itm.price} РУБ</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                                :
                                <h3 className="text-dander">Нет товаров</h3>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
})

export default Tea