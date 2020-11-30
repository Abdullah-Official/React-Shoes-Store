import React from 'react'
import { useParams } from 'react-router-dom'
import './DetailsPage.css'
import ShoeDetail from './ShoeDetail.png'
import Shoes from './Shoe.json'
const DetailsPage = () => {
    const {id} = useParams()
    const shoes = Shoes[id]
    return (
      <>
        <div className="container mainDetail" >
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 detail__img">
                <img  src={shoes.imageSrc} alt=""/>
              
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="contentProduct">
              <h2>{shoes.title}</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                corporis quidem nihil omnis? Provident adipisci quas iure, natus
                saepe nostrum autem, laboriosam temporibus laudantium aut
                tempore illo sequi dolores. Laudantium.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                corporis quidem nihil omnis? Provident adipisci quas iure, natus
                saepe nostrum autem, laboriosam temporibus laudantium aut
                tempore illo sequi dolores. Laudantium.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                corporis quidem nihil omnis? Provident adipisci quas iure, natus
                saepe nostrum autem, laboriosam temporibus laudantium aut
                tempore illo sequi dolores. Laudantium.
              </p>
             <div className="footerProduct">
    <h3>{shoes.price}</h3>
              <button>Buy Now</button>
             </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default DetailsPage




        // <div className="containerDetails">
        //   <div className="imgBox"> 
        //   <img
        //           src={ShoeDetail}
        //           alt=""
        //           width='700px'
        //           height='800px'
        //         />
        //   </div>
        //     <div className="details">
        //       <div className="content">
        //         <h2>NIKE Air Max 270</h2>
        //         <p>
        //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //           Dolorem adipisci recusandae sint nemo libero, aut vitae?
        //           Recusandae non ad explicabo aliquam, facilis voluptate!
        //           Possimus fugit eos repellendus excepturi non debitis?
        //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //           Dolorem adipisci recusandae sint nemo libero, aut vitae?
        //           Recusandae non ad explicabo aliquam, facilis voluptate!
        //           Possimus fugit eos repellendus excepturi non debitis?
        //         </p>
        //         <h3>$150.00</h3>
        //         <button>Buy Now</button>
        //       </div>
        //     </div>
        // </div>