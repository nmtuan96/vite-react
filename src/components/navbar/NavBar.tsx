import React from 'react'
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search-icon.png";
import './navbar.css';
import { IoIosSearch } from "react-icons/io";


const NavBar = () => {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar-logo'>
          <img src={Logo} className='navbar-img-logo'/>
          <a href="">Chính sách quyền riêng tư</a>
          <button>EN</button>
          <button>VN</button>
        </div>
        <div className='navbar-search'>
          <input type="text" className='navbar-search-input' placeholder="Từ khóa tìm kiếm / OnlineCode từ công cụ chọn cấu hình xe"/>
          <div className='navbar-search-contain'>
            <img src={SearchIcon} className='navbar-search-image' />
          </div>
        </div>
      <div className='navbar-wrapper-navigation'></div>
      
    </div>
  )
}

export default NavBar