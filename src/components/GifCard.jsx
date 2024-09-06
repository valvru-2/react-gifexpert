

export const GifCard = ( {url, title} ) => {

  return (
    <div className="card">      
         <img src={url} alt={title} />
         <li>{title}</li>     
    </div>
  )
}

