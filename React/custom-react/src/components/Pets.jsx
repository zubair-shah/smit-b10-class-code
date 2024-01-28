
function Pets({name , animal , breed , location , images}){
  return (
  <a className="pet">
    <div className="image-container">
      <img src={images[0]} alt={name} />
    </div>
   
    <div className="info"> 
      <h1>{name}</h1>
     <h2>{`${animal} — ${breed} — ${location}`}</h2>
    </div> 
    </a>
  )
}

export default Pets;