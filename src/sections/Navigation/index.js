import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FaBars , FaSignInAlt} from "react-icons/fa"
import { FiActivity } from "react-icons/fi";
import { Container } from "reusecore/Layout"
import logo from "assets/images/app/logo_eprogram.png"

import Data from "./utility/data.js"
import ScrollspyMenu from "./utility/ScrollspyMenu.js"

import NavigationWrap from "./navigation.style"
import Button from "reusecore/Button";


const Navigation = () => {
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    const header = document.getElementById("navbar")

    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <NavigationWrap id="navbar"  className="nav-block">
      <Container>
        <div className="navbar-wrap">
          <Link to="#" className="logo">
            <img src={logo} alt="prime app landing" />
          </Link>
          <nav className="nav">
            <FaBars
              className="mobile-menu-icon"
              onClick={() => setExpand(!expand)}
            />
            <ScrollspyMenu
              className={`collapsed ${expand ? "is-expanded" : ""}`}
              menuItems={Data.menuItems}
            />
               
          </nav>
          <div class="action_button">
          <Link to="https://eprogram.store/account/register" >
           <Button className="nav-btn two">
                <FiActivity className="icon-left" />
                Activer mon compte
              </Button></Link>
              <Link to="https://eprogram.store/account/login" >
          <Button className="nav-btn">
                <FaSignInAlt className="icon-left" />
                Login
              </Button>
             </Link>
             </div>

            
        </div>
      </Container>
    </NavigationWrap>
  )
}

export default Navigation
