import { useRef } from 'react';
import "./Menu.scss";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { faFileCode, faMessage } from '@fortawesome/free-regular-svg-icons';
import SubMenuItem from './SubMenuItem';
import { faBookOpenReader, faBoxesPacking, faSwatchbook, faUserGraduate, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons/faFileCircleCheck';

const Menu = () => {
  const submenuRef1 = useRef(null);
  const submenuRef2 = useRef(null);
  const submenuRef3 = useRef(null);
  const submenuRef4 = useRef(null);
  const submenuRef5 = useRef(null);

  const handleMouseEnter1 = () => {
    gsap.to(submenuRef1.current, {
      opacity: 1,
      visibility: 'visible',
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave1 = () => {
    gsap.to(submenuRef1.current, {
      opacity: 0,
      visibility: 'hidden',
      y: -20,
      duration: 0.5,
      ease: 'power2.in',
    });
  };

  const handleMouseEnter2 = () => {
    gsap.to(submenuRef2.current, {
      opacity: 1,
      visibility: 'visible',
      y: 0,
      duration: 0.5,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave2 = () => {
    gsap.to(submenuRef2.current, {
      opacity: 0,
      visibility: 'hidden',
      y: -20,
      duration: 0.5,
      ease: 'power1.in',
    });
  };

  const handleMouseEnter3 = () => {
    gsap.to(submenuRef3.current, {
      opacity: 1,
      visibility: 'visible',
      y: 0,
      duration: 0.5,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave3 = () => {
    gsap.to(submenuRef3.current, {
      opacity: 0,
      visibility: 'hidden',
      y: -20,
      duration: 0.5,
      ease: 'power1.in',
    });
  };

  const handleMouseEnter4 = () => {
    gsap.to(submenuRef4.current, {
      opacity: 1,
      visibility: 'visible',
      y: 0,
      duration: 0.5,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave4 = () => {
    gsap.to(submenuRef4.current, {
      opacity: 0,
      visibility: 'hidden',
      y: -20,
      duration: 0.5,
      ease: 'power1.in',
    });
  };
  const handleMouseEnter5 = () => {
    gsap.to(submenuRef5.current, {
      opacity: 1,
      visibility: 'visible',
      y: 0,
      duration: 0.5,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave5 = () => {
    gsap.to(submenuRef5.current, {
      opacity: 0,
      visibility: 'hidden',
      y: -20,
      duration: 0.5,
      ease: 'power1.in',
    });
  };
 
 

  return (
    <div className='Menu'>
      <ul>
        <li
         className="has-submenu"
         onMouseEnter={handleMouseEnter1}
         onMouseLeave={handleMouseLeave1}
         >
          <Link to="https://codesandbox.io/features">회사소개</Link>
          <div className="submenu-content" ref={submenuRef1}>
            <Link to="https://codesandbox.io/cloud-development-environments">
              <SubMenuItem
                  icon={faBoxesPacking}
                  title="CEO 인사말"
                />
            </Link>
            <Link to="https://codesandbox.io/improve-code-reviews">
              <SubMenuItem
                  icon={faMessage}
                  title="비전ㆍ미션"
                />
            </Link>
            <Link to="https://codesandbox.io/code-in-sandboxes">
              <SubMenuItem
                  icon={faFileCode}
                  title="CLOUDIVERSE"
                />
            </Link>
            <Link to={"https://codesandbox.io/learn-and-experiment"}>
              <SubMenuItem
                  icon={faUserGraduate}
                  title="연혁"
                />
            </Link>
            <Link to={"https://codesandbox.io/learn-and-experiment"}>
              <SubMenuItem
                  icon={faUserGraduate}
                  title="R&D"
                />
            </Link>
          </div>
        </li>
        <li
          className="has-submenu"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <Link to="https://codesandbox.io/use-cases">제품소개</Link>
          <div className="submenu-content" ref={submenuRef2}>
            <Link to="https://codesandbox.io/cloud-development-environments">
              <SubMenuItem
                  icon={faBoxesPacking}
                  title="클라우드잇"
                />
            </Link>
            <Link to="https://codesandbox.io/improve-code-reviews">
              <SubMenuItem
                  icon={faMessage}
                  title="오픈스택잇"
                />
            </Link>
            <Link to="https://codesandbox.io/code-in-sandboxes">
              <SubMenuItem
                  icon={faFileCode}
                  title="탭클라우드잇"
                />
            </Link>
            <Link to={"https://codesandbox.io/learn-and-experiment"}>
              <SubMenuItem
                  icon={faUserGraduate}
                  title="SE클라우드잇"
                />
            </Link>
            <Link to={"https://codesandbox.io/learn-and-experiment"}>
              <SubMenuItem
                  icon={faUserGraduate}
                  title="사이-다"
                />
            </Link>
            <Link to={"https://codesandbox.io/learn-and-experiment"}>
              <SubMenuItem
                  icon={faUserGraduate}
                  title="옵티머스잇"
                />
            </Link>

          </div>
        </li>
        <li
          className="has-submenu"
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <Link to="https://codesandbox.io/resources">고객사례</Link>
          <div className="submenu-content" ref={submenuRef3}>
            <Link to={"https://codesandbox.io/templates"}>
              <SubMenuItem
                  icon={faSwatchbook}
                  title="공공 · 정부"
                />
            </Link>
            <Link to="https://codesandbox.io/blog">
              <SubMenuItem
                  icon={faBookOpenReader}
                  title="교육 · 연구"
                />
            </Link>
            <Link to="https://login.circle.so/sign_in?request_host=www.codesandbox.community#email">
              <SubMenuItem
                  icon={faUserGroup}
                  title="엔터프라이즈"
                />
            </Link>
          </div>
        </li>
        <li
         className="has-submenu"
         onMouseEnter={handleMouseEnter4}
         onMouseLeave={handleMouseLeave4}
        >
          <Link target='_blank' to="https://codesandbox.io/docs/learn">파트너</Link>
          <div className="submenu-content" ref={submenuRef4}>
            <Link to={"https://codesandbox.io/templates"}>
              <SubMenuItem
                  icon={faSwatchbook}
                  title="프로그램 소개"
                />
            </Link>
            <Link to="https://codesandbox.io/blog">
              <SubMenuItem
                  icon={faBookOpenReader}
                  title="파트너 리스트"
                />
            </Link>
          </div>
        </li>
        <li
            className="has-submenu"
            onMouseEnter={handleMouseEnter5}
            onMouseLeave={handleMouseLeave5}
        >
          <Link to="https://codesandbox.io/support">홍보센터</Link>
          <div className="submenu-content" ref={submenuRef5}>
            <Link to={"https://codesandbox.io/templates"}>
              <SubMenuItem
                  icon={faSwatchbook}
                  title="뉴스룸"
                />
            </Link>
            <Link to="https://codesandbox.io/blog">
              <SubMenuItem
                  icon={faBookOpenReader}
                  title="CI / BI"
                />
            </Link>
            <Link to="https://login.circle.so/sign_in?request_host=www.codesandbox.community#email">
              <SubMenuItem
                  icon={faUserGroup}
                  title="캐릭터"
                />
            </Link>
            <Link to="https://codesandbox.io/changelog">
              <SubMenuItem
                  icon={faFileCircleCheck}
                  title="행사"
                />
            </Link>
            <Link to="https://codesandbox.io/changelog">
              <SubMenuItem
                  icon={faFileCircleCheck}
                  title="블로그"
                />
            </Link>
          </div>
        </li>
        <li>
          <Link to="https://codesandbox.io/pricing">하이퍼스퀘어</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;