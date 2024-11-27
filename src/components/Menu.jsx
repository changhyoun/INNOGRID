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
          <Link to="https://www.innogrid.com/innogrid/ceo">회사소개</Link>
          <div className="submenu-content" ref={submenuRef1}>
            <Link to="https://www.innogrid.com/innogrid/ceo">
              <SubMenuItem
                  icon={faBoxesPacking}
                  title="CEO 인사말"
                />
            </Link>
            <Link to="https://www.innogrid.com/innogrid/vision">
              <SubMenuItem
                  icon={faMessage}
                  title="비전ㆍ미션"
                />
            </Link>
            <Link to="https://www.innogrid.com/innogrid/cloudiverse">
              <SubMenuItem
                  icon={faFileCode}
                  title="CLOUDIVERSE"
                />
            </Link>
            <Link to={"https://www.innogrid.com/innogrid/history"}>
              <SubMenuItem
                  icon={faUserGraduate}
                  title="연혁"
                />
            </Link>
            <Link to={"https://www.innogrid.com/innogrid/rnd"}>
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
            <Link to="https://www.innogrid.com/product/cloudit">
              <SubMenuItem
                  icon={faBoxesPacking}
                  title="클라우드잇"
                />
            </Link>
            <Link to="https://www.innogrid.com/product/openstackit">
              <SubMenuItem
                  icon={faMessage}
                  title="오픈스택잇"
                />
            </Link>
            <Link to="https://www.innogrid.com/product/tabcloudit">
              <SubMenuItem
                  icon={faFileCode}
                  title="탭클라우드잇"
                />
            </Link>
            <Link to={"https://www.innogrid.com/product/secloudit"}>
              <SubMenuItem
                  icon={faUserGraduate}
                  title="SE클라우드잇"
                />
            </Link>
            <Link to={"https://www.innogrid.com/product/saida"}>
              <SubMenuItem
                  icon={faUserGraduate}
                  title="사이-다"
                />
            </Link>
            <Link to={"https://www.innogrid.com/product/optimusit"}>
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
          <Link to="https://www.innogrid.com/case/public">고객사례</Link>
          <div className="submenu-content" ref={submenuRef3}>
            <Link to={"https://www.innogrid.com/case/public"}>
              <SubMenuItem
                  icon={faSwatchbook}
                  title="공공 · 정부"
                />
            </Link>
            <Link to="https://www.innogrid.com/case/study">
              <SubMenuItem
                  icon={faBookOpenReader}
                  title="교육 · 연구"
                />
            </Link>
            <Link to="https://www.innogrid.com/case/enterprise">
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
          <Link target='_blank' to="https://www.innogrid.com/partner/program">파트너</Link>
          <div className="submenu-content" ref={submenuRef4}>
            <Link to={"https://www.innogrid.com/partner/program"}>
              <SubMenuItem
                  icon={faSwatchbook}
                  title="프로그램 소개"
                />
            </Link>
            <Link to="https://www.innogrid.com/partner/list">
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
          <Link to="https://www.innogrid.com/pr/news">홍보센터</Link>
          <div className="submenu-content" ref={submenuRef5}>
            <Link to={"https://www.innogrid.com/pr/news"}>
              <SubMenuItem
                  icon={faSwatchbook}
                  title="뉴스룸"
                />
            </Link>
            <Link to="https://www.innogrid.com/pr/ci">
              <SubMenuItem
                  icon={faBookOpenReader}
                  title="CI / BI"
                />
            </Link>
            <Link to="https://www.innogrid.com/pr/character">
              <SubMenuItem
                  icon={faUserGroup}
                  title="캐릭터"
                />
            </Link>
            <Link to="https://www.innogrid.com/pr/event">
              <SubMenuItem
                  icon={faFileCircleCheck}
                  title="행사"
                />
            </Link>
            <Link to="https://www.innogrid.com/pr/blog">
              <SubMenuItem
                  icon={faFileCircleCheck}
                  title="블로그"
                />
            </Link>
          </div>
        </li>
        <li>
          <Link to="https://www.innogrid.com/hypersquare">하이퍼스퀘어</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;