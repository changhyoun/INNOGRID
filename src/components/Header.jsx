import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import { logo } from "./Images";
import Menu from "./Menu";
import { faBars, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop.current) {
        // 🔽 스크롤을 내릴 때 (메뉴 숨기기)
        setIsVisible(false);
      } else {
        // 🔼 스크롤을 올릴 때 (메뉴 보이기)
        setIsVisible(true);
      }

      // 스크롤 위치가 1px 이상이면 isScrolled 활성화
      setIsScrolled(currentScrollTop > 1);

      // 마지막 스크롤 위치 업데이트
      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="Header" className={`${isScrolled ? "scrolled" : ""} ${isVisible ? "visible" : "hidden"}`}>
      <div className="Header_inner">
        <div className="Header_lt">
          <img src={logo} alt="logo" />
        </div>
        <div className="Header_ce">
          <Menu />
        </div>
        <div className="Header_rt">
          <Link to="https://www.innogrid.com/hypersquare/edusquare">Edu Square</Link>
          <Link to="https://www.innogrid.com/hr">
            채용 <FontAwesomeIcon icon={faArrowTrendUp} />
          </Link>
          <Link>
            <FontAwesomeIcon className="ham" icon={faBars} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
