import React from 'react';
import { observer } from 'mobx-react-lite';
import './History.css';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import storeHistory from '../../store/storeHistory';

const History = observer(() => {
    return (
        <>
            <Navbar />
            <div className="history">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={`/img/${storeHistory.currentHistory.photo}`} className="card-item-img" alt="..." />
                        </div>
                        <div className="col-lg-6 history_explanation">
                            <h2>НАША ИСТОРИЯ</h2>
                            <p>{storeHistory.currentHistory.discription}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
})

export default History