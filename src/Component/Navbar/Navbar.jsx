import { useState }  from 'react'
import  './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menu,setMenu]=useState("shop");
  return (
    <div>
        <div className='Container-fuild'>
            <div className='row'>
                <div className='col-md-12'>
                  {/* <section className='navbar'> */}
                <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} className='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={()=>{setMenu("shop")}}><Link  style={{textDecoration:"none",color:"#C2185B"}} to='/'>Shop</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>{setMenu("menu")}}><Link style={{textDecoration:"none" ,color:"#C2185B"}} to='/menu'>Men</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none" ,color:"#C2185B"}} to='/women'>Women</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color:"#C2185B"}} to='/kids'>Kids</Link></a>
        </li>     
      </ul>
      <div className='nav-login-cart'>
      <Link to='/login'><button type="button" className="btn btn-primary me-3">Login</button></Link>
        <Link to='/cart'style={{textDecoration:"none",color:"#C2185B"}}><i className='bx bx-shopping-bag'></i></Link>   
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