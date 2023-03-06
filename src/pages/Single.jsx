import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://nippys.com.au/site/wp-content/uploads/2016/11/Orange_Shutterstock_600x600.jpeg" alt="" />
        <div className="user">
          <img src="https://nippys.com.au/site/wp-content/uploads/2016/11/Orange_Shutterstock_600x600.jpeg" alt="" />
          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            
            <img src={Delete} alt="" />
          </div>
        </div>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ut error et, eligendi dignissimos facere quibusdam reprehenderit ratione debitis minus consectetur nulla magnam harum, voluptate eaque sequi similique officiis iure?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo quibusdam velit explicabo! Maiores mollitia unde accusamus, illum exercitationem necessitatibus laborum ratione eveniet veniam praesentium vero, eligendi suscipit ex rerum.
      </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single
