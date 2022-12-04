import React from 'react'
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {adduser  } from '../Redux/Actions/Useraction';



function Register() {
  
    const navigate=useNavigate()
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name:data.get("name"),
      email: data.get('email'),
      password: data.get('password'),
      nbrGifts:data.get('nbrGifts'),
      remiseDefaut:data.get('remiseDefaut'),
    });

    dispatch(adduser({
      name:data.get("name"),
      email: data.get('email'),
      password: data.get('password'),
      nbrGifts:data.get('nbrGifts'),
      remiseDefaut:data.get('remiseDefaut'),
     
    },navigate));

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
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add User</p>
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="name"  name="name" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">name</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="email " name="email" class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="password"  name="password" class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="" id="nbrGifts" name="nbrGifts" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c"> Number Gifts</label>
                    </div>
                  </div>
              
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button"  onSubmit={handleSubmit} className="btn btn-primary btn-lg">Add</button>
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

export default Register