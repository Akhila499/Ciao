import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
  
  
  return (
    <>
     <div className="homebg">
      <Carousel fade>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="images/main1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/main2.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/main3.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <br/>
    <br/>
    <div>
      <div className="thumb">
        <a href='http://localhost:3000/createcard'>
          <img src="images/happy.jpg" alt="happy birthday"/>
        </a>
      </div>
      
      <div className="thumb">
        <a href='http://localhost:3000/createcard'>
          <img src="images/con1.png" alt="goodluck"/>
        </a>
      </div>
      <div className="thumb">
      <a href='http://localhost:3000/createcard'>
        <img src="images/luck.jpg" alt="goodluck"/>
      </a>
      </div>
      <div className="thumb">
        <a href='http://localhost:3000/createcard'>
          <img src="images/getwellsoon.png" alt="get well soon"/>
        </a>
      </div>
    </div>
    </div> 
    </>
      
  );
}