import React,{useState,Fragment} from "react";

export default function DropDown(props) {

 
    const [show,setShow]=useState(true);
    const favorites=props.favorites;
    console.log(favorites);

    const HandleOncLick=(e)=>{
      
       let element=document.getElementsByClassName("dropdown-menu");
       console.log(element);
       if(show)
       element[0].className+=" show";
       else
       element[0].className=" dropdown-menu";
       setShow(!show);
    }


  return (
      <Fragment>
          <div className="badge badge-info" >
              {favorites.length}
          </div>
    <ul className="nav nav-pills">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="#"
          onClick={(e) => HandleOncLick(e)}
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
         Favorites
        </a> 
           <div className="dropdown-menu" onMouseLeave={HandleOncLick}>
          { favorites.map((picture,index)=>
          <a className="dropdown-item"key={index} >
          <img className="favorite-img"  src={picture.previewURL} alt={picture.tags}></img>
          Action   <button className="fa fa-trash button-trash-ylee" onClick={(id)=>props.HandeDeleteFavorites(picture.id)}></button> 
          </a>
         )}
     
            
         
         
         
        </div>
      </li>
    </ul>
    </Fragment>
  );
}
