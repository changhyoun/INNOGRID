import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Sc1_slide4_box = ({ Sc1_slide4_box_className, Sc1_slide4_box_small, Sc1_slide4_box_h3, Sc1_slide4_box_h3_2, Sc1_slide4_box_p, Sc1_slide4_box_img }) => {
  const linkRef = useRef(null); // a 태그에 대한 참조 생성
  const imgRef = useRef(null); // img 태그에 대한 참조 생성

  useEffect(() => {
    // 초기 설정: a 태그는 보이지 않도록, img 태그는 margin-bottom이 0
    gsap.set(linkRef.current, { y: 50, opacity: 0 });
    gsap.set(imgRef.current, { marginBottom: 0 });
    
    // 호버 시 애니메이션 실행
    const box = document.querySelector(`.${Sc1_slide4_box_className}`);
    box.addEventListener('mouseenter', () => {
      gsap.to(linkRef.current, { y: 0, opacity: 1, duration: 0.3, ease: "power4.out" });
      gsap.to(imgRef.current, { marginBottom: '20%', duration: 0.3, ease: "power4.out" }); // img에 마진을 추가
    });
    box.addEventListener('mouseleave', () => {
      gsap.to(linkRef.current, { y: 100, opacity: 0, duration: 0.3, ease: "power4.out" });
      gsap.to(imgRef.current, { marginBottom: 0, duration: 0.3, ease: "power4.out" }); // img 마진 원상복귀
    });
  }, [Sc1_slide4_box_className]);

  return (
    <div className={`Sc1_slide4_box ${Sc1_slide4_box_className}`}>
      <div className="Sc1_slide4_box_inner">
          <small>{Sc1_slide4_box_small}</small>
          <h3>{Sc1_slide4_box_h3} <b>{Sc1_slide4_box_h3_2}</b></h3>
          <p>
            {/* 줄바꿈 처리 - 문자열인지 확인 */}
            {(Sc1_slide4_box_p || '').split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <img ref={imgRef} src={Sc1_slide4_box_img} alt="Sc1_slide4_box_img" />
          <Link to="#" ref={linkRef}>
            자세히 보기 <FontAwesomeIcon icon={faArrowRight} />
          </Link>
      </div>
    </div>
  );
};

export default Sc1_slide4_box;