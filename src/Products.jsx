import React from 'react'
import { NavLink } from 'react-router-dom'
import './Products.css'
import Shoes from './Shoe.json'

const Products = () => {
  return (
    <>
      <div className="container-fluid mainProduct ">
      <h1 className='text-center mt-3 heading'>Nike Shoes</h1>
        <div className="row">
        
          {Object.keys(Shoes).map((index) => {
            return (
              <div className="col-md-4 col-lg-4 col-sm-6" key={index}>
         <NavLink to={`/details-page/${index}`} className='nav-link'>
         <div class="card mt-3">
            <div class="card-header">
                <img width='100%' className='prodImg' style={{maxHeight:'300px'}} src={Shoes[index].imageSrc} alt=""/>
            </div>
            <div class="card-body">
              <div className="contentCard">
                  <p>{Shoes[index].price} <br/> <span><h2 className='productName'>{Shoes[index].title}</h2></span></p>
                  <i class='fas fa-cart-plus' style={{fontSize:'34px'}}></i>
              </div>
            </div>
            {/* <div class="card-footer text-muted">2 days ago</div> */}
          </div>
         </NavLink>
        </div>
              

            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products
