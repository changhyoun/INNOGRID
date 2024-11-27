import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Header.scss"
import { logo } from "./Images"
import Menu from "./Menu"
import { faBars,faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollTop = useRef(0);

  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollTop = window.scrollY;
  
        if (currentScrollTop > 1) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
  
        lastScrollTop.current = currentScrollTop;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
  return (
    
    <div id='Header' className={`${isScrolled ? 'scrolled' : ''}`}>
        <div className="Header_lt">
            <img src={logo} alt="logo" />
        </div>
        <div className="Header_ce">
            <Menu/>
        </div>
        <div className="Header_rt">
            <Link to={`https://www.innogrid.com/hypersquare/edusquare`}>Edu Square</Link>
            <Link to={`https://www.innogrid.com/hr`}>채용 <FontAwesomeIcon icon={faArrowTrendUp} /></Link>
            <Link>
              <FontAwesomeIcon className="ham" icon={faBars} />
            </Link>
        </div>
        

    </div>
  )
}

export default Header