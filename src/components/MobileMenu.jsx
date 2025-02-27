import { useState } from "react";
import "./MobileMenu.scss";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { logo_w } from "./Images";
import { Link } from "react-router-dom";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuItems = [
  { 
    title: "회사소개", 
    subMenu: [
      { title: "CEO 인사말", url: "https://www.innogrid.com/innogrid/ceo" },
      { title: "비전 · 미션", url: "https://www.innogrid.com/innogrid/vision" },
      { title: "CLOUDIVERSE", url: "https://www.innogrid.com/innogrid/cloudiverse" },
      { title: "연혁", url: "https://www.innogrid.com/innogrid/history" },
      { title: "R&D", url: "https://www.innogrid.com/innogrid/rnd" }
    ] 
  },
  { 
    title: "제품소개", 
    subMenu: [
      { title: "클라우드잇", url: "https://www.innogrid.com/product/cloudit" },
      { title: "오픈스택잇", url: "https://www.innogrid.com/product/openstackit" },
      { title: "탭클라우드잇", url: "https://www.innogrid.com/product/tabcloudit" },
      { title: "SE클라우드잇", url: "https://www.innogrid.com/product/secloudit" },
      { title: "사이-다", url: "https://www.innogrid.com/product/saida" },
      { title: "옵티머스잇", url: "https://www.innogrid.com/product/optimusit" }
    ] 
  },
  { 
    title: "고객사례", 
    subMenu: [
      { title: "공공 · 정부", url: "https://www.innogrid.com/case/public" },
      { title: "교육 · 연구", url: "https://www.innogrid.com/case/study" },
      { title: "엔터프라이즈", url: "https://www.innogrid.com/case/enterprise" }
    ] 
  },
  { 
    title: "파트너", 
    subMenu: [
      { title: "프로그램 소개", url: "https://www.innogrid.com/partner/program" },
      { title: "파트너 리스트", url: "https://www.innogrid.com/partner/list" }
    ] 
  },
  { 
    title: "홍보센터", 
    subMenu: [
      { title: "뉴스룸", url: "https://www.innogrid.com/pr/news" },
      { title: "CI / BI", url: "https://www.innogrid.com/pr/ci" },
      { title: "캐릭터", url: "https://www.innogrid.com/pr/character" },
      { title: "행사", url: "https://www.innogrid.com/pr/event" },
      { title: "블로그", url: "https://www.innogrid.com/pr/blog" }
    ] 
  },
  { 
    title: "하이퍼스퀘어", 
    subMenu: [
      { title: "하이퍼스퀘어", url: "https://www.innogrid.com/hypersquare" }
    ] 
  },
  { 
    title: "고객지원", 
    subMenu: [
      { title: "오시는 길", url: "https://www.innogrid.com/contact/directions" },
      { title: "자료실", url: "https://www.innogrid.com/contact/reference" },
      { title: "문의하기", url: "https://www.innogrid.com/contact/contact" },
      { title: "구매 협력사 등록", url: "https://www.innogrid.com/contact/cooperation" }
    ] 
  }
];

const MobileMenu = ({ setMenuOpen }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mobile-menu-container">
      {/* 닫기 버튼 */}
      <div className="mobile-menu_t">
        <img src={logo_w} alt="logo" />
        <button className="menu-toggle" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="menu open">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              {/* 대메뉴 */}
              <div className="menu-item" onClick={() => toggleSubMenu(index)}>
                <span>{item.title}</span>
                {item.subMenu.length > 0 && (
                  activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />
                )}
              </div>

              {/* 부메뉴 */}
              {item.subMenu.length > 0 && (
                <ul className={`submenu ${activeIndex === index ? "open" : ""}`}>
                  {item.subMenu.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link to={sub.url} target="_blank">{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* 하단 링크 */}
      <div className="mobile-menu_bt">
        <Link to="https://www.innogrid.com/edusquare" target="_blank">
            Edu Square
        </Link>
        <Link to="https://www.innogrid.com/hr" target="_blank">
            채용 <FontAwesomeIcon icon={faArrowTrendUp} /> 
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
