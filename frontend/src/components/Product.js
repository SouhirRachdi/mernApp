import React from 'react'
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addProduct  } from '../Redux/Actions/ProductAction';
function Product() {

  const navigate=useNavigate()
  const dispatch = useDispatch();
  
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    console.log({
      text: data.get(" text"),
      prixTtc: data.get("prixTtc"),
      inStock: data.get("inStock"),
      isGift:data.get("isGift")
    });
    dispatch(
      addProduct({
        text: data.get(" text"),
        prixTtc: data.get("prixTtc"),
        inStock: data.get("inStock"),
        isGift:data.get("isGift")
      },navigate)
      
    );
 
  };

  return (
    <div>

<section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Product</p>
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="text" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">text</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="prixTtc" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c"> prix Ttc</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="inStock" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c"> inStock</label>
                    </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="isGift" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c"> isGift</label>
                    </div>
                    </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button"   onSubmit={handleSubmit}  className= "btn btn-primary btn-lg">Add</button>
                  </div>
                </form>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Product