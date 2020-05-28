import React from "react";

export default function Picture(props) {
  const { image} = props;

  return (
    <div className="col-3">
      <div className="card card-ylee my-3">
        <img src={image.previewURL} alt={image.tags}></img>
        <div className="info">
          <div className="row mt-3">
            <div className="col-4 ml-1">
              <span className="mr-1">
                <i className="fa fa-thumbs-up pr-2 "></i>
                {image.likes}
              </span>
            </div>
            <div className="col-5">
              <span className=" mr-1">
                <i className="fa fa-cloud-download pr-2"></i>
                {image.downloads}
              </span>
            </div>

            <div className="col-1">
              <span className=" mr-2">
                <a
                  href={image.largeImageURL}
                  target="blank"
                  className="eye"
                >
                  <i className="fa fa-eye"></i>
                </a>
              </span>
            </div>
            <div className="col-1">
             
                <button className ="fa fa-star mr-2 button-star-ylee"
                  onClick={e=>props.HandleFavorites(e,props.image)}>
          
                </button>
                 
                
              
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
