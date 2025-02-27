import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import { logo } from "./Images";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu"; // 모바일 메뉴 추가
import { faBars, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 모바일 메뉴 상태 추가
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1100) return; // 1100px 미만에서는 실행하지 않음
  
      const currentScrollTop = window.scrollY;
  
      if (currentScrollTop > lastScrollTop.current) {
        setIsVisible(false); // 🔽 스크롤 내릴 때 숨김
      } else {
        setIsVisible(true); // 🔼 스크롤 올릴 때 보이기
      }
  
      setIsScrolled(currentScrollTop > 1);
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

        {/* 1100px 이하에서 햄버거 메뉴 표시 */}
        <div className="Header_rt">
          <div className="desktop-menu">
            <Link to="https://www.innogrid.com/hypersquare/edusquare">Edu Square</Link>
            <Link to="https://www.innogrid.com/hr">
              채용 <FontAwesomeIcon icon={faArrowTrendUp} />
            </Link>
          </div>

          {/* 햄버거 아이콘 버튼 (모바일 메뉴 열기) */}
          <button className="hamburger-icon" onClick={() => setIsMobileMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 - isMobileMenuOpen이 true일 때만 표시 */}
      {isMobileMenuOpen && <MobileMenu setMenuOpen={setIsMobileMenuOpen} />}
    </div>
  );
};

export default Header;
