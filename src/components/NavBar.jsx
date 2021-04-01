import React from 'react'

const NavBar = () => {
     return (   
       <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">

         <a href="nothing#" className="navbar-brand">
           <img src="./images/icon.jpg" alt="Icon" width="50" height="50"/>
            &nbsp;&nbsp;Animphane
         </a>
        
         <button className="navbar-toggler" data-toggle="collapse" data-target="#navBar">
           <span className="navbar-toggler-icon"></span>
         </button>

        <div id="navBar" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a  className="nav-link" href="nothing#">Home </a>
            </li> 
            <li className="nav-item">
              <a  className="nav-link" href="nothing#">Characters </a>
            </li>

            <li className="nav-item">
              <a  className="nav-link" href="nothing#">Anime </a>
            </li>   

              <li className="nav-item">
              <a  className="nav-link" href="nothing#">Comics </a>
            </li>           
          </ul>

          <form className="form-inline">
              <input className="form-control m-1" placeholder="Search"/>
              <button className="form-control btn   btn-outline-primary m-1">Search</button>
          </form>

        </div>
       </nav>
     )
}

export default NavBar
