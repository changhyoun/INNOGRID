import React from 'react'; // 이 부분 추가
import { Link } from 'react-router-dom';
import './Sc1_slideS.scss';
// FontAwesome 관련 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// 섹션1 슬라이드 1,2,3 통합 
const Sc1_slideS = ({sc1_slideS_video, sc1_slideS_img, sc1_slideS_small, sc1_slideS_h2, sc1_slideS_p}) => {
  return (
    <div className='Sc1_slideS'>
      {/* 비디오가 있으면 비디오를, 없으면 이미지를 표시 */}
      {sc1_slideS_video ? (
        <video muted autoPlay loop src={sc1_slideS_video} alt="sc1_slideS_video"/>
      ) : sc1_slideS_img ? (
        <img src={sc1_slideS_img} alt="sc1_slideS_img" />
      ) : null}
      
      <div className="Sc1_slideS_warp">
        {sc1_slideS_small && <small>{sc1_slideS_small}</small>}
        
        {/* 줄바꿈을 처리할 수 있도록 h2와 p에 split 적용 */}
        {sc1_slideS_h2 && (
          <h2>
            {(sc1_slideS_h2 || '').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
        )}
        
        {sc1_slideS_p && (
          <p>
            {(sc1_slideS_p || '').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        )}  
          <Link to="#">
            더보기 <FontAwesomeIcon icon={faArrowRight} />
          </Link>
   
      </div>
    </div>
  );
}

export default Sc1_slideS;
