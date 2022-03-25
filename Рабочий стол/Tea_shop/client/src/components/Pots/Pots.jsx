import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './Pots.css';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import storeItems from '../../store/storeItems';

const Pots = observer(() => {
    return (
        <>
            <Navbar />
            <div className="second_post_items_pot">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="our_production_pot text-center">ЭКСКЛЮЗИВНЫЕ ЧАЙНИКИ</h5>
                        </div>
                    </div>
                    <div className="row mt-4">
                        {
                            storeItems.allPots.length ?
                                storeItems.allPots.map((itm) => (
                                    <div className="col-lg-4" key={itm._id}>
                                        <Link to={`/item/${itm._id}`} className='td_none'>
                                            <div className="card card_item_pot" >
                                                <img src={`/img/${itm.photo}`} className="card-item-img-top-pot" alt="..." />
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

export default Pots