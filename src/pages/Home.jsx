import { useEffect, useState, useRef } from 'react';
import './Home.scss';

// FontAwesome 관련 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faArrowRight, faPlus, } from '@fortawesome/free-solid-svg-icons';
import Sc1_slideS from '../components/Sc1_slideS';
import { hypersquare, se1_sw_img1, se1_sw_img2 } from '../components/Images';
import Sc1_slide4 from '../components/Sc1_slide4';
import Sc1_slide5 from '../components/Sc1_slide5';
import Sc2_slide_box from '../components/Sc2_slide_box';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isPaused, setIsPaused] = useState(false); // 일시정지 상태 관리
  const [timeLeft, setTimeLeft] = useState(3); // 남은 시간
  const progressCircleRef = useRef(null); // progress circle 참조
  const swiperRef = useRef(null); // Swiper 인스턴스 참조

  useEffect(() => {
    // Swiper 초기화
    swiperRef.current = new window.Swiper('.swiper-container1', {
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        
      },
      navigation: {
        nextEl: '.swiper-button-next1', // Next 버튼
        prevEl: '.swiper-button-prev1', // Prev 버튼
      },
      on: {
        autoplayTimeLeft(swiper, time, progress) {
          if (progressCircleRef.current) {
            const circleRadius = progressCircleRef.current.r.baseVal.value;
            const circumference = 2 * Math.PI * circleRadius;
            progressCircleRef.current.style.strokeDashoffset = `${circumference - progress * circumference}`; // 원형 progress 업데이트
            setTimeLeft(Math.ceil(time / 1000)); // 남은 시간 업데이트
          }
        },
      },
    });

    swiperRef.current = new window.Swiper('.swiper-container3', {
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        
      },
    });

  }, []);

  

  // 재생/정지 버튼 클릭 핸들러
  const handlePlayPause = () => {
    if (isPaused) {
      swiperRef.current.autoplay.start(); // 재생
    } else {
      swiperRef.current.autoplay.stop(); // 일시정지
    }
    setIsPaused(!isPaused); // 상태 업데이트
  };

  return (
    <div id="Home" className='fullpage'>
      <div className="section" id="sc1">
        <div className="swiper-container1">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Sc1_slideS sc1_slideS_img={se1_sw_img1} sc1_slideS_small={'Solution'} sc1_slideS_h2={"Cloud Universe Platform\n맞춤형 솔루션 구축."} sc1_slideS_p={'자체 기술기반 클라우드 솔루션을\n구축하였습니다.'}/>
            </div>
            <div className="swiper-slide">
              <Sc1_slideS sc1_slideS_img={se1_sw_img2} sc1_slideS_small={'VisionㆍMission'} sc1_slideS_h2={"통합운영관리가 가능한\n클라우드 데이터 센터를 구축합니다."} sc1_slideS_p={'지능형 클라우드 데이터 센터(CDC) 구성을 위한\n 최적의 Cloud Full Stack을 제공합니다.'}/>
            </div>
            <div className="swiper-slide">
              <Sc1_slideS sc1_slideS_video={hypersquare} sc1_slideS_small={'Business'} sc1_slideS_h2={"클라우드 전문 센터\nHYPER SQUARE"} sc1_slideS_p={'클라우드 관제와 시연은 물론 Web 3.0 시대에 걸맞은\n새로운 서비스를 연구합니다.'}/>
            </div>
            <div className="swiper-slide">
              <Sc1_slide4/>
            </div>
            <div className="swiper-slide">
              <Sc1_slide5/>
            </div>
          </div>
          <div className="swiper-container1_bt_warp">
         

            {/* Next/Prev Buttons */}
            <div className="swiper-button1-warp">

            
              <div className="swiper-button-next1 swiper-button">
                <span className="material-symbols-outlined">
                  line_start_arrow_notch
                </span>
              </div>
              {/* 원형 Progress Bar */}
              <div className="progress-circle-container">
                <svg className="progress-circle" width="50" height="50">
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="#111"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="126" // 2 * Math.PI * r (원둘레)
                    strokeDashoffset="126" // 초기값은 0에서 시작
                    ref={progressCircleRef}
                  ></circle>
                </svg>
                <div className="time-left">{timeLeft}s</div>
              </div>
             {/* Play/Pause 버튼 */}
              <div className="play-pause-btn" onClick={handlePlayPause}>
              {isPaused ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
              </div>
              <div className="swiper-button-prev1 swiper-button ">
                <span className="material-symbols-outlined">
                  line_start_arrow_notch
                </span>
              </div>
            </div>

           
          </div>
         
        </div>

        
      </div>
      <div className="section" id="sc2">
        <div className="sc2_t">
          <div className="sc2_t_warp">
            <div className="sc2_t_lt">
              <div className="swiper-container3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <Link to={"https://www.innogrid.com/pr/news/detail?uuid=c910b358-fc46-4ed2-baf5-787f360ebd24"} target='_blank'>
                      <Sc2_slide_box Sc2_slide_box_small={'보도자료'} Sc2_slide_box_h3={'이노그리드, 국립공원공단의 디지털 전환을 위한 첫걸음 ‘정보시스템 클라우드 전환 컨설팅’ 완수'} Sc2_slide_box_p={'2024-10-21'}/>
                    </Link>
                  </div>
                  <div className="swiper-slide">
                    <Link to={"https://www.innogrid.com/pr/news/detail?uuid=7ee09888-7025-4947-930a-ce4adf8f7a07"} target='_blank' >
                      <Sc2_slide_box Sc2_slide_box_small={'보도자료'} Sc2_slide_box_h3={'이노그리드, 제8회 대한민국 디지털 미래혁신대상서 하이브리드 기술력 인정받아 ‘KISTI 원장상’ 수상'} Sc2_slide_box_p={'2024-10-07'}/>
                    </Link>
                  </div>
                  <div className="swiper-slide">
                    <Link to={"https://www.innogrid.com/pr/news/detail?uuid=99e8a87d-5b7e-44b8-917b-711f20961494"} target='_blank'>
                      <Sc2_slide_box Sc2_slide_box_small={'기획자료'} Sc2_slide_box_h3={'이노그리드, 공공 수주 확대로 분위기 반전 꾀한다'} Sc2_slide_box_p={'2024-10-06'}/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc2_t_rt">
              <Link to="https://www.innogrid.com/pr/news" target='_blank'>
                더보기 <FontAwesomeIcon icon={faPlus} />
              </Link>
            </div>
          </div>
          
        </div>
        <div className="sc2_bt">
          
        </div>
      </div>
      <div className="section" id="sc3">
        <h1>Section 3</h1>
      </div>
      <div className="section" id="sc4">
        <h1>Section 4</h1>
      </div>
    </div>
  );
};

export default Home;
