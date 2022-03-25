import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import './Navbar_admin.css';

const Navbar = observer(() => {
  return (
    <>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export default Navbar