import { useEffect, useRef, useState } from 'react';
import { se1_sw5_img1, se1_sw5_img2, se1_sw5_img3, se1_sw5_img4 } from './Images';
import './Sc1_slide5.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const Sc1_slide5 = () => {
  const swiperRef = useRef(null); // Swiper 인스턴스 참조
  const [isPlaying, setIsPlaying] = useState(true); // 자동 재생 상태를 관리하는 상태
  const [currentIndex, setCurrentIndex] = useState(1); // 현재 슬라이드 인덱스
  const [totalSlides, setTotalSlides] = useState(0); // 전체 슬라이드 개수

  useEffect(() => {
    // Swiper 초기화
    if (!swiperRef.current) {
      swiperRef.current = new window.Swiper('.swiper-container2', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'custom', // 커스텀 페이지네이션을 사용하여 직접 표시 형식 제어
          renderCustom: function (swiper, current, total) {
            setCurrentIndex(current);
            setTotalSlides(total);
            return `${current} / ${total}`; // 페이지네이션 형식 "현재 슬라이드 / 총 슬라이드"
          },
        },
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
        },
      });
    }

    // 컴포넌트가 언마운트될 때 Swiper 인스턴스 정리
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='Sc1_slide5'>
      <div className="Sc1_slide5_box1">
        <div className="swiper-container2">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={se1_sw5_img1} alt="se1_sw5_img1" />
              <div className="tx_box">
                <h2>
                  이노그리드<br/>
                  K-Design Award 수상
                </h2>
                <p>
                  이노그리드 홈페이지 디자인이<br/>
                  아시아 3대 디자인 어워드인 K-Design Award에서<br/>
                  Gold Winner를 수상하였습니다. 
                </p>
                <Link to="#">
                  자세히 보기 <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={se1_sw5_img2} alt="se1_sw5_img2" />
              <div className="tx_box">
                <h2>
                  이노그리드<br/>
                  K-Design Award 수상
                </h2>
                <p>
                  이노그리드 홈페이지 디자인이<br/>
                  아시아 3대 디자인 어워드인 K-Design Award에서<br/>
                  Gold Winner를 수상하였습니다. 
                </p>
                <Link to="#">
                  자세히 보기 <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
            <div className="swiper-slide se1_sw5_slide3 ">
              <img src={se1_sw5_img3} alt="se1_sw5_img3" />
              <div className="tx_box">
                <h2>
                  이노그리드<br/>
                  K-Design Award 수상
                </h2>
                <p>
                  이노그리드 홈페이지 디자인이<br/>
                  아시아 3대 디자인 어워드인 K-Design Award에서<br/>
                  Gold Winner를 수상하였습니다. 
                </p>
                <Link to="#">
                  자세히 보기 <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>

          <div className="swiper2_btn_warp">
            {/* 페이지네이션 */}
            <div className="swiper-arrow-warp2">
              <div className="swiper-button-prev swiper-button-prev2">
                <span className="material-symbols-outlined">
                  line_start_arrow_notch
                </span>
              </div>
              <div className="swiper-button-next swiper-button-next2">
                <span className="material-symbols-outlined">
                  line_start_arrow_notch
                </span>
              </div>
            </div>
            
            
            <div className="swiper-pagination">{currentIndex} / {totalSlides}</div>
            

             {/* 자동 재생 시작/정지 버튼 */}
            <div className="autoplay-controls">
              <button onClick={handlePlayPause}>
                {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
              </button>
            </div>
          </div>
          
        </div>
      </div>

     

      <div className="Sc1_slide5_box2">
        <img src={se1_sw5_img4} alt="se1_sw5_img4" />
        <div className="Sc1_slide5_box2_txbox">
          <small>인재채용</small>
          <h2>
            이노그리드의<br/>
            여정에<br/>
            합류하세요
          </h2>
          <p>
            이노그리드와 함께 할<br/>
            동료를 모집합니다
          </p>
          <Link to="#">
            인재채용 사이트 <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sc1_slide5;
