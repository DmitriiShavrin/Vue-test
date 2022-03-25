import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import './Navbar.css';
import storeLogin from '../../../store/storeLogin';
import storeCart from '../../../store/storeCart';

const Navbar = observer(() => {
  return (
    <>
      <div className="h_part_navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <Link to='/' className='free_shipping'>БЕСПЛАТНАЯ ДОСТАВКА ОТ 2000 РУБ*</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m_part_navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="left text-center">
                    <Link to='/' className='td_none'>
                      <h4 className="fw-bold">CHAINI</h4>
                      <h6 className='fw-bold'>TEA & CULTURE</h6>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="end d-flex align-items-center justify-content-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search end_big" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <Link to={`${storeLogin.ON ? '/all_items' : '/login'}`} className='td_none'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill end_middle" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </Link>
                    <Link to='/cart' className='td_none '>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${storeCart.items_in_cart.length ? "bi bi-bag-fill end_big text-danger" : "bi bi-bag-fill end_big"}`} viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="b_part_navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex align-items-center justify-content-between nav_bar_main">
                <Link to='/history' className='nav_bars'>ИСТОРИЯ</Link>
                <Link to='/excursion' className='nav_bars'>ЭКСКУРСИИ</Link>
                <Link to='/tea' className='nav_bars'>ЧАЙ</Link>
                <Link to='/pots' className='nav_bars'>ЧАЙНИКИ</Link>
                <Link to='/contacts' className='nav_bars'>КОНТАКТЫ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export default Navbar