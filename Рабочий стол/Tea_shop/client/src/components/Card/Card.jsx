import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import './Card.css';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
// import photo1 from '../Home/Poster/Pictures/tea1.jpeg'
import storeItems from '../../store/storeItems';
import storeCart from '../../store/storeCart';

const Card = observer(() => {

    const { id } = useParams();

    useEffect(() => {
        storeItems.getCard(id)
        console.log(id)
    }, []);

    return (
        <>
            <Navbar />
            <div className="card">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={`http://localhost:5000/img/${storeItems.cardToDisplay.photo}`} className="card-item-img" alt="..." />
                        </div>
                        <div className="col-lg-6 notes">
                            <h4 className="main_title">{storeItems.cardToDisplay.title}</h4>
                            <h5 className='price'>{storeItems.cardToDisplay.price} РУБ</h5>
                            <p className="notes_p">{storeItems.cardToDisplay.discription}</p>
                            <div className="row inputs">
                                {/* {
                                    storeItems.cardToDisplay.category_id = "6218bb4a805ae03490379a0d"
                                        ? */}
                                        <div className="col-lg-8 selector">
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => storeCart.setFormItem('gramm', e.target.value)}>
                                                <option selected>Open this select menu</option>
                                                <option value="100">One hundred</option>
                                                <option value="200">Two hundred</option>
                                                <option value="300">Three hundred</option>
                                            </select>
                                        </div>
                                        {/* :
                                        null
                                } */}
                                <div className="col-lg-4 pe-1">
                                    <input type="number" className="bd-highlight ms-3 inputPrice form-control" min='1' max='5' defaultValue={1} onChange={(e) => storeCart.setFormItem('count', Number.parseInt(e.target.value))}></input>
                                </div>
                            </div>
                            <button className="btn btn_add" onClick={() => { storeCart.addToCart(storeItems.cardToDisplay) }}>Добавить в корзину</button>
                            <p className='explanation'>{storeItems.cardToDisplay.discription}</p>
                            <div className="instruction text-center">
                                <p className='bb_line mt-3'>Инструкция по завариванию</p>
                                <p className='bb_line'>2 tsp 175 2 min</p>
                                <p>PER 8 OZ. WATER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
})

export default Card