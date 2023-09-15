import React from "react";
import './Snap.css'
const Photos = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((image) => (
          <div  className="col-4 imgStyle">
            <div key={image.id}>
              <img
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                height="200"
                width="250"
                alt={image.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
//className="col-md-4"

/**
 * <div className="row">
      <div className="col-md-4">
      {data.map((image) => (
        <div key={image.id}>
            <img
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
              height="200"
              width="250"
              alt={image.title}
            />
          </div>
      ))}
      </div>
    </div>
 */
