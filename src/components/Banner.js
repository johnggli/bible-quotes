function Banner(props) {
  return (
    <div className='banner'>
      <div
        className='banner-image'
        style={{ 
          backgroundImage: `url(${props.image})` 
        }}>
      </div>
      <div className='banner-title'>{props.title}</div>
    </div>
  )
}

export default Banner
