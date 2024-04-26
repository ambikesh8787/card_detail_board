import React from 'react'

function Navbar() {
  return (
    <><nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
             
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="cardardDetailBoard">Card Registration</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="Menu">Menu</a>
                </li>                             
            </ul>           
        </div>      
        </nav> 
        </>
  )
}

export default Navbar