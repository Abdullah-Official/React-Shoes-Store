import React from 'react'
import './LandingPage.css'
import Shoe from './Shoe.png'
const LandingPage = () => {
    return (
      <>
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row mt-4">
            <div className="col-lg-6 col-md-6 ">
              <div className="content">
              <h1>It's not just Shoes <br/> It's <span>Nike</span></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci velit tenetur numquam, enim in totam ipsum nulla sunt
                quidem debitis sapiente aliquid, delectus vel consectetur quia
                voluptatibus odio recusandae perferendis  numquam, enim in totam ipsum nulla sunt
                quidem debitis sapiente aliquid, delectus vel consectetur quia
                voluptatibus odio recusandae perferendis.
              </p>
              <button className='btnLand'>Get Started</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 ">
              <div className="imgBox">
                <img
                  src={Shoe}
                  alt=""
                  width='500px'
                  height='400px'
                  className='img-fluid pr-4 mt-3 mr-2 pt-2'
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default LandingPage
