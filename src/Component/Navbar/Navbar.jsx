import { useState }  from 'react'
import  './Navbar.css'
import logo from '../Assets/logo.png'


const Navbar = () => {
  const [menu,setMenu]=useState("shop");
  return (
    <div>
        <div className='Container-fuild'>
            <div className='row'>
                <div className='col-md-12'>
                  {/* <section className='navbar'> */}
                <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} className='logo'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" onClick={()=>{setMenu("shop")}}>Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=>{setMenu("menu")}}>Men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=>{setMenu("women")}}>Women</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=>{setMenu("kids")}}>Kids</a>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-primary me-3">Login</button>
        </li>
      </ul>
      <div className='nav-login-cart'>
           <i className='bx bx-shopping-bag'></i>
           <div className='nav-cart-count'>
        0
      </div>
      </div>
      
    </div>
  </div>
</nav>
{/* </section> */}
                </div>
            </div>
        </div>
        </div>
  )
}

export default Navbar