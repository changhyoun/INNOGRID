import "./Sc2_slide_box.scss"

const Sc2_slide_box = ({Sc2_slide_box_small,Sc2_slide_box_h3,Sc2_slide_box_p}) => {

  return (
    <div className={`Sc2_slide_box`}>
        <small>{Sc2_slide_box_small}</small>
        <h3>{Sc2_slide_box_h3}</h3>
        <p>{Sc2_slide_box_p}</p>
    </div>
  );
};

export default Sc2_slide_box;