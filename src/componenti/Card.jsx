

function Card({titolo,imgurl,children}) {
 
  const descrizione=' Some quick example text to build on the card title and make up the bulk of the cards content.'
 
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imgurl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titolo}</h5>
        <p className="card-text">
          {children}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card