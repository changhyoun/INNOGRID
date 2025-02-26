import { Sc1_slide4_gif1, Sc1_slide4_gif2, Sc1_slide4_gif3, Sc1_slide4_gif4 } from './Images';
import './Sc1_slide4.scss';
import Sc1_slide4_box from './Sc1_slide4_box';

const Sc1_slide4 = () => {
  return (
    <div className='Sc1_slide4'>
        <Sc1_slide4_box Sc1_slide4_box_className={'Sc1_slide4_box_1'} Sc1_slide4_box_small={'IaaS Solution'} Sc1_slide4_box_h3_2={'Cloud'} Sc1_slide4_box_p={'자체 기술력으로 개발한\n올인원 클라우드 솔루션'} Sc1_slide4_box_img={Sc1_slide4_gif1}/>
        <Sc1_slide4_box Sc1_slide4_box_className={'Sc1_slide4_box_2'} Sc1_slide4_box_small={'IaaS Solution'} Sc1_slide4_box_h3={'Open'} Sc1_slide4_box_h3_2={'STACK'} Sc1_slide4_box_p={'오픈소스 기반\n클라우드 관리 솔루션'} Sc1_slide4_box_img={Sc1_slide4_gif2}/>
        <Sc1_slide4_box Sc1_slide4_box_className={'Sc1_slide4_box_3'} Sc1_slide4_box_small={'PaaS Solution'} Sc1_slide4_box_h3={'SE'} Sc1_slide4_box_h3_2={'CLOUD'} Sc1_slide4_box_p={'클라우드 네이티브를 위한\nPaaS 솔루션'} Sc1_slide4_box_img={Sc1_slide4_gif3}/>
        <Sc1_slide4_box Sc1_slide4_box_className={'Sc1_slide4_box_4'} Sc1_slide4_box_small={'CMP Solution'} Sc1_slide4_box_h3={'Tab'} Sc1_slide4_box_h3_2={'CLOUD'} Sc1_slide4_box_p={'이기종 멀티 클라우드\n관리 플랫폼 (CMP)'} Sc1_slide4_box_img={Sc1_slide4_gif4}/>
    </div>
  )
}

export default Sc1_slide4