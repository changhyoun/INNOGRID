import { useEffect, useState, useRef } from 'react';
import React from 'react';
import './Home.scss';
import '../components/Responsive.scss'
// FontAwesome 관련 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faArrowRight, faPlus, faChevronUp, faChevronDown, faArrowUp, } from '@fortawesome/free-solid-svg-icons';
import Sc1_slideS from '../components/Sc1_slideS';
import { hypersquare, se1_sw_img1, se1_sw_img2, se2_bt_box1,se2_bt_box2,se2_bt_box3,se2_bt_box5,se3_vi,bg_ev,bg_eb,bg_ee,bg_ep,bg_es,se4_lo1,se4_lo2,se4_lo3,se4_lo4,se4_lo5,plus_btn,sc5_im1,sc5_im2,sc5_im3,sc5_im4,sc5_im5,sc6_im1, sc6_im2, sc6_im3, sc6_im4, sc6_im5, sc6_im6, sc6_im7, sc6_im8, sc6_im9, sc6_im10,svgexport15,svgexport16,svgexport17,svgexport18,ft_logo1,ft_logo2_1,ft_logo2_2,ft_logo2_3,ft_logo2_4,ft_logo2_5,ft_blog,ft_fb } from '../components/Images';
import Sc1_slide4 from '../components/Sc1_slide4';
import Sc1_slide5 from '../components/Sc1_slide5';
import Sc2_slide_box from '../components/Sc2_slide_box';
// import MobileMenu from '../components/MobileMenu';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';



gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Home = () => {
  const [isPaused, setIsPaused] = useState(false); // 일시정지 상태 관리
  const [timeLeft, setTimeLeft] = useState(3); // 남은 시간
  const progressCircleRef = useRef(null); // progress circle 참조
  const swiperRef1 = useRef(null); 
  const swiperRef3 = useRef(null); 
  const swiperRef5 = useRef(null);
  const swiperRef6 = useRef(null); 
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 상태 관리

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤 적용
    });
  };
  
  

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
    swiperRef5.current = new window.Swiper(".swiper-container5", {
      loop: true, // 무한 루프
      speed: 5000, // 부드러운 흐름
      autoplay: {
        delay: 0,
        disableOnInteraction: false, // 사용자 상호작용 후에도 계속 작동
      },
      slidesPerView: "auto", // 여러 개의 div 표시
      spaceBetween: 20, // 간격 20px
      freeMode: true, // 자연스럽게 움직임
    });

    swiperRef6.current = new window.Swiper(".swiper-container6", {
      loop: true, // 무한 루프
      speed: 5000, // 부드러운 흐름
      autoplay: {
        delay: 0,
        disableOnInteraction: false, // 사용자 상호작용 후에도 계속 작동
      },
      slidesPerView: "auto", // 여러 개의 div 표시
      spaceBetween: 20, // 간격 20px
      freeMode: true, // 자연스럽게 움직임
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

  const slidesData = [
    { img: sc5_im1, title: "한국인터넷진흥원", desc: "개방형 보안 취약점 분석 플랫폼 구축", extra: "신규 보안 취약점을 빠르게 도출하여 침해 사고로 발생하기\n이전에 신속히 조치하기 위해 보안 전문가들의 집단지성을 활용한\n개방형 보안 취약점 분석 플랫폼의 안정화와 데이터 보호를 위해\n클라우드 기반 소산 백업 시스템을 구축하였습니다." },
    { img: sc5_im2, title: "한국마사회", desc: "미래대응체계 구축을 위한 클라우드 환경 도입", extra: "온라인 발매 서비스 고도화 및 미래대응체계 구축을 위하여\n클라우드 환경을 도입하였으며, 한국마사회법 개정 시\n신규 온라인 발매 서비스를 즉시 적용하여,\n거래 폭주에 대비하고자 합니다." },
    { img: sc5_im3, title: "롯데케미칼",desc: "롯데케미칼 공식 웹사이트 인프라 환경의 퍼블릭 클라우드 전환", extra: "롯데케미칼의 공식 웹 사이트를 기존 레거시 환경에서\n퍼블릭 클라우드인 AWS 환경으로 전환함으로써\n최적의 비용으로 서비스를 유지 관리하고,\n사용자 급증 등 상황에 유연하게 대처할 수 있는\n운영환경을 구축하였습니다." },
    { img: sc5_im4, title: "대구미래교육연구원", desc: "물리 인프라 환경 클라우드 기반 통합 시스템 전환", extra: "대구교육정보서비스 고도화 사업의 일환으로서\n기존 물리 인프라 환경을 클라우드 기반의 통합 시스템으로\n전환함에 따라, 구축된 클라우드 환경에 대한 원포인트 클라우드\n관리체계를 수립하고 민첩한 대응력 확보를 위한\n클라우드 통합운영 환경을 구축하였습니다." },
    { img: sc5_im5, title: "한국교육학술정보원(KERIS)", desc: "교육환경 개선을 위한 지능형 클라우드 인프라 구축", extra: "새로운 교육정책 및 디지털 정부혁신을 지원하는 4세대 지능형\n나이스 구축 사업으로 1단계, 2단계, 3단계 사업으로\n진행하였으며, 지능형 클라우드 인프라 구축을 통해\n학생과 학부모가 참여하는 교육환경 실현을 위한\n클라우드 S/W 제공합니다." },
    { img: sc5_im1, title: "한국인터넷진흥원", desc: "개방형 보안 취약점 분석 플랫폼 구축", extra: "신규 보안 취약점을 빠르게 도출하여 침해 사고로 발생하기\n이전에 신속히 조치하기 위해 보안 전문가들의 집단지성을 활용한\n개방형 보안 취약점 분석 플랫폼의 안정화와 데이터 보호를 위해\n클라우드 기반 소산 백업 시스템을 구축하였습니다." },
    { img: sc5_im2, title: "한국마사회", desc: "미래대응체계 구축을 위한 클라우드 환경 도입", extra: "온라인 발매 서비스 고도화 및 미래대응체계 구축을 위하여\n클라우드 환경을 도입하였으며, 한국마사회법 개정 시\n신규 온라인 발매 서비스를 즉시 적용하여,\n거래 폭주에 대비하고자 합니다." },
    { img: sc5_im3, title: "롯데케미칼",desc: "롯데케미칼 공식 웹사이트 인프라 환경의 퍼블릭 클라우드 전환", extra: "롯데케미칼의 공식 웹 사이트를 기존 레거시 환경에서\n퍼블릭 클라우드인 AWS 환경으로 전환함으로써\n최적의 비용으로 서비스를 유지 관리하고,\n사용자 급증 등 상황에 유연하게 대처할 수 있는\n운영환경을 구축하였습니다." },
    { img: sc5_im4, title: "대구미래교육연구원", desc: "물리 인프라 환경 클라우드 기반 통합 시스템 전환", extra: "대구교육정보서비스 고도화 사업의 일환으로서\n기존 물리 인프라 환경을 클라우드 기반의 통합 시스템으로\n전환함에 따라, 구축된 클라우드 환경에 대한 원포인트 클라우드\n관리체계를 수립하고 민첩한 대응력 확보를 위한\n클라우드 통합운영 환경을 구축하였습니다." },
    { img: sc5_im5, title: "한국교육학술정보원(KERIS)", desc: "교육환경 개선을 위한 지능형 클라우드 인프라 구축", extra: "새로운 교육정책 및 디지털 정부혁신을 지원하는 4세대 지능형\n나이스 구축 사업으로 1단계, 2단계, 3단계 사업으로\n진행하였으며, 지능형 클라우드 인프라 구축을 통해\n학생과 학부모가 참여하는 교육환경 실현을 위한\n클라우드 S/W 제공합니다." },
  ];

  const slidesData2 = [
    { img: sc6_im1, title: "Inno News", desc: "이노그리드, <서울신문 상생협력 건설 엑스포>에서 스마트건설 위한 옵저버빌리티 서비스 선보여", date: "2025-02-26", lk : 'https://blog.naver.com/innogrid/223774463752' },
    { img: sc6_im2, title: "Inno News", desc: "이노그리드, 전북은행 수주하며 금융권 디지털 전환 클라우드 파트너로 입지 굳혀", date: "2025-02-24", lk : 'https://blog.naver.com/innogrid/223771385408' },
    { img: sc6_im3, title: "Inno News",desc: "이노그리드-비즈플레이, SaaS 디지털 전환 위한 업무협약 체결", date: "2025-02-20", lk : 'https://blog.naver.com/innogrid/223766975182' },
    { img: sc6_im4, title: "Inno News", desc: "“하이브리드 클라우드 비즈니스 공동 추진” 이노그리드-이테크시스템-ISTN 3사, MOU 체결", extra: "2025-02-19", lk : 'https://blog.naver.com/innogrid/223765843096' },
    { img: sc6_im5, title: "Inno News", desc: "이노그리드, 2025 한국로봇종합학술대회 참가", date: "2025-02-18", lk : 'https://blog.naver.com/innogrid/223764510145' },
    { img: sc6_im6, title: "Inno News", desc: "이노그리드, ‘오라클 클라우드 서밋 2025’ 참가", date: "2025-02-12", lk : 'https://blog.naver.com/innogrid/223757675773' },
    { img: sc6_im7, title: "Inno News", desc: "이노그리드, 클라우드 기술 리딩을 통한 구축 솔루션 선도 기업 5개년 청사진 제시", date: "2025-02-10", lk : 'https://blog.naver.com/innogrid/223755014511' },
    { img: sc6_im8, title: "IT Trends",desc: "과학기술정보통신부, <2024년 클라우드 산업 실태조사> 발표...국내 클라우드 산업 7조 4천억 원 규모", date: "2025-02-07", lk : 'https://blog.naver.com/innogrid/223751021546' },
    { img: sc6_im9, title: "Inno Culture", desc: "이노그리드, 2025년 사내 캐치프레이즈 공모전 개최", date: "2025-02-03", lk : 'https://blog.naver.com/innogrid/223745946888' },
    { img: sc6_im10, title: "Inno Culture", desc: "하이브리드 클라우드 인턴십 프로그램 종료_클라우드 옵스팀", date: "2025-01-31", lk : 'https://blog.naver.com/innogrid/223742953653' },
  ];

  const t_footer_bxs = [
    { lk :'https://www.innogrid.com/contact/directions' , ic : svgexport15, tx1 : "오시는 길", tx2 : "이노그리드에 오시는 길을\n안내해 드립니다."},
    { lk :'https://www.innogrid.com/contact/reference' , ic : svgexport16, tx1 : "자료실", tx2 : "이노그리드의 다양한\n소개 자료를 신청해 보세요."},
    { lk :'https://www.innogrid.com/contact/contact' , ic : svgexport17, tx1 : "문의하기", tx2 : "도움이 필요하신가요?\n솔루션 제품 문의를 해보세요."},
    { lk :'https://www.innogrid.com/contact/cooperation' , ic : svgexport18, tx1 : "구매 협력사 등록", tx2 : "구매 협력사 등록 시 안정적인\n구매/입찰 참여가 가능합니다."}
  ]

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
      {/* <MobileMenu/> */}
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
        <div className="sc4_warp">
          <div className="sc4_t">
            <h3>GROUP COMANY</h3>
          </div>
          <div className="sc4_bt">
            <ul className='sc4_bt_u'>
              <li className='sc4_bt_l'>
                <div>
                  <img src={bg_ev} alt="bg_ev" />
                  <div>
                    <div>
                      <img src={plus_btn} alt="plus_btn" className='plus_btn' />
                      <img src={se4_lo1} alt="se4_lo1" />
                    </div>
                    <div>
                      <em>
                        (주)에티버스
                      </em>
                      <p>
                        ㈜에티버스는 Total IT Solution을 지향하는 기업으로 고객 니즈를<br/>
                        파악하여 디지털 트렌스포메이션 시대에 최적화된 솔루션을 제공합니다.<br/>
                        또한 다각화된 사업 포트폴리오 구축과 안정적이고 효율적인 경영을<br/>
                        기반으로 오랜 기간 동안 다양한 글로벌 벤더사와의 파트너쉽을 유지하고 있습니다.<br/>
                        갈수록 복잡해지는 IT 환경 속에서도 항상 고객의 디지털 혁신을<br/>
                        고민하고 고부가가치 기술분야를 꾸준히 개척해나가고 있습니다.
                      </p>
                      <div className='link_ou'>
                        <Link to="https://etevers.com/main/main.html" target="_blank">
                            <span>
                              에티버스 홈페이지
                            </span>
                            <span className="material-symbols-rounded">
                                arrow_outward
                            </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='sc4_bt_l'>
                <div>
                  <img src={bg_eb} alt="bg_eb" />
                  <div>
                    <div>
                      <img src={plus_btn} alt="plus_btn" className='plus_btn' />
                      <img src={se4_lo2} alt="se4_lo1" />
                    </div>
                    <div>
                      <em>
                        (주)이테크시스템
                      </em>
                      <p>
                      ㈜이테크시스템은 글로벌 솔루션 업체들과 이테크시스템의<br/>
                      우수한 기술력과 인재를 기반으로 폭넓은<br/>
                      고객가치 창출을 위해 노력하고 있습니다.<br/>
                      IT 기본 인프라 구축, 가상화를 통한 정보데이터 Managing,<br/>
                      백업 인프라 통합관리, Network 컴퓨팅의 관리, Cloud 기반의<br/>
                      Calling System 및 통합 솔루션 제공 등 기업의 다양한 IT 핵심 솔루션을<br/>
                      제공하고 있으며 끊임없는 변화와 혁신을 바탕으로 최고의 기술력을 지닌<br/>
                      IT 솔루션 전문 기업으로 지속 성장을 도모하고 있습니다
                      </p>
                      <div className='link_ou'>
                        <Link to="https://etechsystem.co.kr/main/main.html" target="_blank">
                            <span>
                            이테크시스템 홈페이지
                            </span>
                            <span className="material-symbols-rounded">
                                arrow_outward
                            </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='sc4_bt_l'>
                <div>
                  <img src={bg_ee} alt="bg_ee" />
                  <div>
                    <div>
                      <img src={plus_btn} alt="plus_btn" className='plus_btn' />
                      <img src={se4_lo3} alt="se4_lo1" />
                    </div>
                    <div>
                      <em>
                        (주)에티버스 이비티
                      </em>
                      <p>
                      ㈜에티버스 이비티는 세계 최고의 소프트웨어, 하드웨어 및 네트워크 제조사와 전략적<br/>
                      제휴관계를 형성하고 있으며 고객에 대한 정확한 이해를 바탕으로 제품 및 서비스의<br/>
                      다양한 Usage를 파악하고 그에 적합한 솔루션을 제공합니다.<br/>
                      끊임없는 기술 혁신으로 에티버스 이비티의 사업구조를 더욱 고도화하고<br/>
                      이를 통해 경쟁력을 확보하고 있으며 고객 중심의 비즈니스를 통해 IT 솔루션 기업으로 도약하고자 합니다.<br/><br/>
                      ㈜에티버스 이비티에서는 PC, 주변기기 및 전자제품, 클라우드 서비스 등 디지털 제품을<br/>
                      합리적인 가격으로 공급하는 온라인쇼핑몰 시소몰도 운영하고 있습니다.
                      </p>
                      <div className='link_ou'>
                        <Link to="https://eteversebt.com/main/main.html" target="_blank">
                            <span>
                              에티버스 이비티 홈페이지
                            </span>
                            <span className="material-symbols-rounded">
                                arrow_outward
                            </span>
                        </Link>
                        <Link to="https://www.seesawmall.com/" target="_blank">
                            <span>
                              시소몰 홈페이지
                            </span>
                            <span className="material-symbols-rounded">
                                arrow_outward
                            </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='sc4_bt_l'>
                <div>
                  <img src={bg_ep} alt="bg_ep" />
                  <div>
                    <div>
                      <img src={plus_btn} alt="plus_btn" className='plus_btn' />
                      <img src={se4_lo4} alt="se4_lo1" />
                    </div>
                    <div>
                      <em>
                        (주)에티버스 이피에이
                      </em>
                      <p>
                        ㈜에티버스 이피에이는 디바이스와 서비스를 통합 관리하는 솔루션 전문회사입니다.<br/>
                        ICT 산업의 최신 동향에 대처하기 위하여 전문 인력과 함께 다양한 인프라와 서비스를<br/>
                        구축하고 통합 관리하는 효과적인 방안을 제시하고 있습니다.<br/>
                        또한 공공, 금융, 제조 등 다양한 분야에서 다년간 진행된 IT 컨설팅 산업의 축적된 경험을<br/>
                        바탕으로 체계적이고 전략적인 해결 방법을 제시하여 고객사의 가치와 성공을 제고합니다.
                      </p>
                      <div className='link_ou'>
                        <Link to="https://www.eteversepa.com/main/main.html" target="_blank">
                            <span>
                              에티버스 이피에이 홈페이지
                            </span>
                            <span className="material-symbols-rounded">
                                arrow_outward
                            </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='sc4_bt_l'>
                <div>
                  <img src={bg_es} alt="bg_es" />
                  <div>
                    <div>
                      <img src={plus_btn} alt="plus_btn" className='plus_btn' />
                      <img src={se4_lo5} alt="se4_lo1" />
                    </div>
                    <div>
                      <em>
                        (주)에티버스 이앤엘
                      </em>
                      <p>
                      (주)에티버스 이앤엘은 빠르게 변화하는 디지털 생태계의 최적화된 플랫폼에 맞춰<br/>
                      이커머스 전략을 수립하여 고객 맞춤 제품을 제공하고 있습니다.<br/>
                      풀필먼트 서비스를 통해 IT 관련 전문 물류에 대해 전략적 배송을 진행하고 있으며 고객과<br/>
                      의 커뮤니케이션 활성화를 통한 고객 우선 서비스를 제공하고 있습니다.<br/>
                      3PL 서비스를 통해 고객사의 물류진단 및 프로세스를 재설계하여 최적의 방안을 제시하고<br/>
                      있으며 기존의 물류전문업체와 차별화된 한차원 높은 물류 종합 서비스를 제공합니다.
                      </p>
                      <div className='link_ou'>
                        <Link to="https://eteversenl.com/main/main.html" target="_blank">
                            <span>
                            에티버스 이앤엘
                            </span>
                            <span className="material-symbols-rounded">
                                arrow_outward
                            </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section" id="sc5">
        <div className="sc5_warp">
          <div className="sc5_t">
            <h3>CUSTOMER STORY</h3>
            <Link to={"https://www.innogrid.com/case/public"} target='_blank'>
              더 보기
              <FontAwesomeIcon icon={faArrowRight} /> 
            </Link>
          </div>
          <div className="sc5_bt">
            <div className="swiper-container swiper-container5">
              <div className="swiper-wrapper swiper-wrapper5">
                {slidesData.map((slide, index) => (
                  <div key={index} className="swiper-slide swiper-slide5 slide-item5">
                    <div>
                      <img src={slide.img} alt={`Slide ${index + 1}`} />
                    </div>
                    <div>
                      <div className="text-content">
                        <em>{slide.title}</em>
                        <p>{slide.desc}</p>
                        <span>
                          {slide.extra.split("\n").map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                 </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" id="sc6">
        <div className="sc6_warp">
          <div className="sc6_t">
            <h3>BLOG</h3>
            <Link to={"https://www.innogrid.com/pr/blog"} target='_blank'>
              더 보기
              <FontAwesomeIcon icon={faArrowRight} /> 
            </Link>
          </div>
          <div className="sc6_bt">
            <div className="swiper-container swiper-container6">
              <div className="swiper-wrapper swiper-wrapper6">
                {slidesData2.map((slide, index) => (
                  <div key={index} className="swiper-slide swiper-slide6 slide-item6">
                   <Link to={slide.lk} target='_blank'>
                    <div>
                      <img src={slide.img} alt={`Slide ${index + 1}`} />
                    </div>
                    <div>
                      <div className="text-content">
                        <div className="text-content_t">
                          <em>{slide.title}</em>
                          <p>{slide.desc}</p>
                        </div>
                        <div className="text-content_bt">
                          <span>
                            {slide.date}
                          </span>
                        </div>
                      </div>
                    </div>
                   </Link>
                 </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" id="sc7">
        <div className="sc7_warp">
          {t_footer_bxs.map(( item, index) => (
                  <Link to={item.lk} target='_blank' key={index} className="t_footer">
                    <div className='t_footer_inner'>
                      <div className='t_footer_inner_lt'>
                        <h3>{item.tx1}</h3>
                        <p>
                          {item.tx2.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>

                      <div className='t_footer_inner_rt'>
                        <img src={item.ic} alt="item.ic" />
                      </div>
                    </div>
                  </Link>
          ))}
        </div>
      </div>
      <footer className="ft">
        <div className="ft_inner">
          <div className="ft_lt">
            <div className="ft_lt_t">
              <div>
                <img src={ft_logo1} alt="ft_logo1" />
              </div>
              <div>
                <Link to={"https://etevers.com/main/main.html"} target='_blank'>
                  <img src={ft_logo2_1} alt="ft_logo2_1" />
                </Link>
                <Link to={"https://etechsystem.co.kr/main/main.html"} target='_blank'>
                  <img src={ft_logo2_2} alt="ft_logo2_2" />
                </Link>
                <Link to={"https://eteversebt.com/main/main.html"} target='_blank'>
                  <img src={ft_logo2_3} alt="ft_logo2_3" />
                </Link>
                <Link to={"https://www.eteversepa.com/main/main.html"} target='_blank'>
                  <img src={ft_logo2_4} alt="ft_logo2_4" />
                </Link>
                <Link to={"https://eteversenl.com/main/main.html"} target='_blank'>
                  <img src={ft_logo2_5} alt="ft_logo2_5" />
                </Link>
              </div>
            </div>
            <div className="ft_lt_bt">
              <div>
                <em>
                  <b>(우) 04551 서울특별시 중구 을지로 100 파인에비뉴 B동 10층 (을지로2가 203)</b><br/>
                  대표전화 02. 516. 5990 | FAX 02. 516. 5997
                </em>
              </div>
              <br/>
              <div>
                <em>
                  <b>하이퍼스퀘어</b> (우) 04551 서울특별시 중구 을지로 100 파인에비뉴 B동 5층 (을지로2가 203)<br/>
                </em>
                <em>
                  <b>중부지사</b> (우) 34091 대전광역시 유성구 노은동로75번길 85-30 (노은동 549-5)
                </em>
              </div>
              
            </div>
          </div>
          <div className="ft_rt">
            <div className="ft_rt_t">
              <div>              
                <Link to={"https://blog.naver.com/innogrid"} target='_blank'>
                  <img src={ft_blog} alt="ft_blog" />
                </Link>
                <Link to={"https://www.facebook.com/inno5990/"} target='_blank'>
                  <img src={ft_fb} alt="ft_fb" />
                </Link>
              </div>
              <div>
              <button onClick={toggleDropdown}>
                <p>관련 사이트</p>
                <FontAwesomeIcon icon={isDropdownOpen ?  faChevronDown : faChevronUp} />
              </button>
              {isDropdownOpen && ( // isDropdownOpen이 true일 때만 ul 표시
                <ul className={`dropdown-menu ${isDropdownOpen ? "open" : "closed"}`}>
                  <li>
                    <Link to={"https://etevers.com/main/main.html"} target="_blank">
                      ETEVERS Group
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://eteversebt.com/main/main.html"} target="_blank">
                      ETEVERS SYSTEM
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://eteversenl.com/main/main.html"} target="_blank">
                      ETEVERS eBT
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://www.eteversepa.com/main/main.html"} target="_blank">
                      ETEVERS ePA
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://etechsystem.co.kr/main/main.html"} target="_blank">
                      ETEVERS E&L
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://www.innogrid.com/hypersquare/edusquare"} target="_blank">
                      Edu Square
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://www.innogrid.com"} target="_blank">
                      Zero Square<br/>Portal
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://www.bxd.com"} target="_blank">
                      BXD Portfolio
                    </Link>
                  </li>
                  
                </ul>
              )}
            
              </div>
              <div onClick={scrollToTop}>
                <button>
                  <p>TOP</p>
                  <FontAwesomeIcon icon={faArrowUp} /> 
                </button>
                
              </div>
            </div>
            <div className="ft_rt_bt">
              <em>대표이사 김명진 | 사업자등록번호 220-87-36743<br/>통신판매업신고 제 2012-서울강남-00571호 <Link to={'https://www.innogrid.com/privacy'} target='_blank'>개인정보처리방침</Link><br/></em>
              <em>COPYRIGHT©Inoogrid. All right reserved</em>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Home;
