import React from 'react';
import "./edit.css";

import { BsArrowRight } from 'react-icons/bs';


function Tradingdata() {
  return (
    <div className='trading-data '>

      <h2> TRADING DATA</h2>

      <div className='row'>

        <div className='col-lg-6 col-md-6 col-sm-6 col-6 key'>Trading Market</div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 text-right value' >TASI</div>
        <hr />

        <div className='col-lg-6 col-md-6 col-sm-6 col-6 key'>Trading Market</div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 text-right value' >TASI</div>
        <hr />
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 key'>Trading Market</div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 text-right value' >TASI</div>
        <hr />
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 key'>Trading Market</div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 text-right value' >TASI</div>
        <hr />
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 key'>Trading Market</div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 text-right value' >TASI</div>

        <hr />
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 key'>Trading Market</div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 text-right value' >TASI</div>

        <hr />
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 key'>Trading Market</div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 text-right value' >TASI</div>

        <hr />
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 key'>More</div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 text-right value' > <BsArrowRight /></div>


      </div>

    </div>
  )
}

export default Tradingdata;