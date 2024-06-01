
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';


function Cards({ props }) {
  return (
    <> 
    
    
    {props.map((movie, index) => (
        <>
    <div className="container">
    
    <div  className="right"> 
        <div key={index} className="datas">
       
          <img src={movie.img} alt={movie.name}  className="imgs"/>
          <div className="cont"> 
          <h2>{movie.name}</h2>
          <p>{movie.year}</p>
          <span className="time">{movie.time}</span>
          <span>{movie.title}</span>
         
          </div>

        </div>
        <div className="paragraph"> 
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        {/* <div className="icons">
                <FontAwesomeIcon icon={faHeart} className="icon" />
                <FontAwesomeIcon icon={faComment} className="icon" />
                <FontAwesomeIcon icon={faShare} className="icon" />
              </div> */}
        </div>
        </div>
        <div className="left"> 
<img src={movie.background}  />
</div>


        </div>

        </>
      ))}

      
       
   
    </>
  );
}

export default Cards;