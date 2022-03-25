import React from 'react';
import { observer } from 'mobx-react-lite';
import './Footer.css';

const Footer = observer(() => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="mt-4 mb-4">
          © 2022 CHAINI
        </div>
      </div>
    </>
  )
})

export default Footer