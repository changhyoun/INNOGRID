import { useEffect, useState, useRef } from 'react';
import './Home.scss';

// FontAwesome 관련 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import Sc1_slideS from '../components/Sc1_slideS';
import { hypersquare, se1_sw_img1, se1_sw_img2, se2_bt_box1,se2_bt_box2,se2_bt_box3,se2_bt_box5,se3_vi } from '../components/Images';
import Sc1_slide4 from '../components/Sc1_slide4';
import Sc1_slide5 from '../components/Sc1_slide5';
import Sc2_slide_box from '../components/Sc2_slide_box';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Home = () => {
  const [isPaused, setIsPaused] = useState(false); // 일시정지 상태 관리
  const [timeLeft, setTimeLeft] = useState(3); // 남은 시간
  const progressCircleRef = useRef(null); // progress circle 참조
  const swiperRef1 = useRef(null); // Swiper 1 인스턴스 참조
  const swiperRef3 = useRef(null); // Swiper 3 인스턴스 참조
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  useEffect(() => {
    // Swiper 1 초기화
    swiperRef1.current = new window.Swiper('.swiper-container1', {
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

    // Swiper 3 초기화
    swiperRef3.current = new window.Swiper('.swiper-container3', {
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
    // GSAP ScrollTrigger 애니메이션 설정
    gsap.fromTo(
      textRef1.current,
      { opacity: 0, textContent: '' }, // 초기 상태
      {
        opacity: 1,
        duration: 2,
        text: 'BEYOND THE<br>CLOUD UNIVERSE PLATFORM', // <br>로 줄바꿈 처리
        scrollTrigger: {
          trigger: '#sc2',
          start: 'bottom bottom', // 트리거 시작 지점
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      textRef2.current,
      { opacity: 0, textContent: '' }, // 초기 상태
      {
        opacity: 1,
        duration: 2,
        text: 'INNOGRID<br>CLOUDIVERSE',
        scrollTrigger: {
          trigger: '#sc2',
          start: 'bottom bottom',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      textRef3.current,
      { opacity: 0, textContent: '' }, // 초기 상태
      {
        opacity: 1,
        duration: 2,
        text: '<span>커스텀 클라우드 파트너로서</span><br>맞춤형 클라우드 방안을 제시합니다.',
        scrollTrigger: {
          trigger: '#sc2',
          start: 'bottom bottom',
          toggleActions: 'play none none reverse',
        },
      }
    );
    
          
  }, []);

  // 재생/정지 버튼 클릭 핸들러
  const handlePlayPause = () => {
    if (isPaused) {
      swiperRef1.current.autoplay.start(); // Swiper 1 재생
    } else {
      swiperRef1.current.autoplay.stop(); // Swiper 1 정지
    }
    setIsPaused(!isPaused); // 상태 업데이트
  };

  return (
    <div id="Home" className="fullpage">
      {/* Section 1 */}
      <div className="section" id="sc1">
        <div className="swiper-container1">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Sc1_slideS
                sc1_slideS_img={se1_sw_img1}
                sc1_slideS_small={'Solution'}
                sc1_slideS_h2={"Cloud Universe Platform\n맞춤형 솔루션 구축."}
                sc1_slideS_p={'자체 기술기반 클라우드 솔루션을\n구축하였습니다.'}
              />
            </div>
            <div className="swiper-slide">
              <Sc1_slideS
                sc1_slideS_img={se1_sw_img2}
                sc1_slideS_small={'VisionㆍMission'}
                sc1_slideS_h2={"통합운영관리가 가능한\n클라우드 데이터 센터를 구축합니다."}
                sc1_slideS_p={'지능형 클라우드 데이터 센터(CDC) 구성을 위한\n 최적의 Cloud Full Stack을 제공합니다.'}
              />
            </div>
            <div className="swiper-slide">
              <Sc1_slideS
                sc1_slideS_video={hypersquare}
                sc1_slideS_small={'Business'}
                sc1_slideS_h2={"클라우드 전문 센터\nHYPER SQUARE"}
                sc1_slideS_p={'클라우드 관제와 시연은 물론 Web 3.0 시대에 걸맞은\n새로운 서비스를 연구합니다.'}
              />
            </div>
            <div className="swiper-slide">
              <Sc1_slide4 />
            </div>
            <div className="swiper-slide">
              <Sc1_slide5 />
            </div>
          </div>
          <div className="swiper-container1_bt_warp">
            <div className="swiper-button1-warp">
              <div className="swiper-button-next1 swiper-button">
                <span className="material-symbols-outlined">line_start_arrow_notch</span>
              </div>
              <div className="progress-circle-container">
                <svg className="progress-circle" width="50" height="50">
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="#111"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="126"
                    strokeDashoffset="126"
                    ref={progressCircleRef}
                  ></circle>
                </svg>
                <div className="time-left">{timeLeft}s</div>
              </div>
              <div className="play-pause-btn" onClick={handlePlayPause}>
                {isPaused ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
              </div>
              <div className="swiper-button-prev1 swiper-button">
                <span className="material-symbols-outlined">line_start_arrow_notch</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section" id="sc2">
        <div className="sc2_t">
          <div className="sc2_t_warp">
            <div className="sc2_t_lt">
              <div className="swiper-container3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <Link to="https://www.innogrid.com/pr/news/detail?uuid=c910b358-fc46-4ed2-baf5-787f360ebd24" target="_blank">
                      <Sc2_slide_box
                        Sc2_slide_box_small={'보도자료'}
                        Sc2_slide_box_h3={
                          '이노그리드, 국립공원공단의 디지털 전환을 위한 첫걸음 ‘정보시스템 클라우드 전환 컨설팅’ 완수'
                        }
                        Sc2_slide_box_p={'2024-10-21'}
                      />
                    </Link>
                  </div>
                  <div className="swiper-slide">
                    <Link to="https://www.innogrid.com/pr/news/detail?uuid=7ee09888-7025-4947-930a-ce4adf8f7a07" target="_blank">
                      <Sc2_slide_box
                        Sc2_slide_box_small={'보도자료'}
                        Sc2_slide_box_h3={
                          '이노그리드, 제8회 대한민국 디지털 미래혁신대상서 하이브리드 기술력 인정받아 ‘KISTI 원장상’ 수상'
                        }
                        Sc2_slide_box_p={'2024-10-07'}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc2_t_rt">
              <Link to="https://www.innogrid.com/pr/news" target="_blank">
                더보기 <FontAwesomeIcon icon={faPlus} />
              </Link>
            </div>
          </div>
        </div>
        <div className="sc2_bt">
          <div className="sc2_bt_lt">
            <img src={se2_bt_box1} alt="se2_bt_box1" />
            <div className="sc2_bt_lt_warp">
              <div className="sc2_bt_lt_t">
                <small>회사소개</small>
                <h2>
                  Cloud<br />
                  Universe<br />
                  Platform
                </h2>
              </div>
              <div className="sc2_bt_lt_bt">
                <p>
                  클라우드의 모든 서비스를<br />
                  맞춤형으로 제공하는 클라우드 생태계
                </p>
                <Link to="https://www.innogrid.com/pr/news" target="_blank">
                  자세히 보기 <FontAwesomeIcon icon={faPlus} />
                </Link>
              </div>
            </div>
          </div>
          <div className="sc2_bt_rt">
            <div className="sc2_bt_rt_t">
              <div className={`sc2_bt_rt_t_lt ${isHovered ? "hovered" : ""}`}>
              
                <img src={se2_bt_box2} alt="se2_bt_box2" />
                <div className="sc2_bt_rt_t_lt_warp">
                  <div className="sc2_bt_rt_t_lt_warp_t">
                    <small>인증/수상</small>
                    <h2>
                      258
                    </h2>
                  </div>
                  <div className="sc2_bt_rt_t_lt_warp_bt">
                    <p>
                      특허, 인증, 수상 등<br />
                      검증된 품질 성능 보유
                    </p>
                    <Link to="https://www.innogrid.com/innogrid/rnd" target="_blank">
                      R&D <FontAwesomeIcon icon={faPlus} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="sc2_bt_rt_t_rt"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
              <img src={se2_bt_box3} alt="se2_bt_box3" />
                <div className="sc2_bt_rt_t_rt_warp">
                  <div className="sc2_bt_rt_t_rt_warp_t">
                    <small>매출 성장</small>
                    <h2>
                      10
                    </h2>
                  </div>
                  <div className="sc2_bt_rt_t_rt_warp_bt">
                    <p>
                      2019년 대비<br />
                      매출 10배 성장세
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc2_bt_rt_bt">
              <div className={`sc2_bt_rt_bt_lt ${isHovered2 ? "hovered" : ""}`}>
              <img src={se2_bt_box5} alt="se2_bt_box5" />
                <div className="sc2_bt_rt_bt_lt_warp">
                  <div className="sc2_bt_rt_bt_lt_warp_t">
                    <small>연혁</small>
                    <h2>
                      18
                    </h2>
                  </div>
                  <div className="sc2_bt_rt_bt_lt_warp_bt">
                    <p>
                      2006년부터<br />
                      토종 클라우드 분야 업력
                    </p>
                    <Link to="https://www.innogrid.com/innogrid/history" target="_blank">
                      연혁 <FontAwesomeIcon icon={faPlus} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="sc2_bt_rt_bt_rt"
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
              >
                <div className="sc2_bt_rt_bt_rt_warp">
                  <div className="sc2_bt_rt_bt_rt_warp_t">
                    <small>고객 사례</small>
                    <h2>
                      350
                    </h2>
                  </div>
                  <div className="sc2_bt_rt_bt_rt_warp_bt">
                    <p>
                      국내 다양한 클라우드 도입<br />
                      고객 및 사례 공유
                    </p>
                    <Link to="https://www.innogrid.com/case/public" target="_blank">
                      고객 사례 <FontAwesomeIcon icon={faPlus} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" id="sc3">
        <div className="sc3_warp">
          <h2 ref={textRef1}>
            {/* 애니메이션으로 텍스트 */}
          </h2>
          <h2 ref={textRef2}>
            {/* 애니메이션으로 텍스트 */}
          </h2>
          <p ref={textRef3}></p>
          <video src={se3_vi} muted autoPlay loop></video>
        </div>
      </div>
      <div className="section" id="sc4">
      </div>
    </div>
  );
};

export default Home;
