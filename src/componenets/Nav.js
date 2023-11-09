import React from 'react';
import './Nav.css'
import { profil1 } from '../pictures/index2.js'

const Nav = () => {
  return (
    <div className='leftCon'>
        
       <div className='imgcon'> 
          <img src={profil1} alt='profilimg' className='profile-image' />
       </div>

      
       <div className='textstyle'><p>Hey! i'm sefsaf abdelhak software developer</p> </div> 
       <div>Navbar to change content </div>
       <div>created by sefsaf abdelhak </div>
       <div>Icon of Social media</div>
    </div>
  )
}

export default Nav
