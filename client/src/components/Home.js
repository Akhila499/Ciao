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
      <h5>Welcome to Ciao</h5>
      <p>A virtual greeting platform that enables to send felicitations</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/main2.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Want to celebrate your teammate success ?</h5>
      <p>Ciao is a great platform to do that...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/main3.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Want to send greeting to your loved ones ??</h5>
      <p>You're at the perfect spot !!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <br/>
    <br/>
    <div>
      <div className="thumb">
        <a href='http://localhost:3000/createcard'>
          <img src="images/thankyou.jpg" alt="thank you"/>
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
    <br/>
    <br/>
    <div className="howitworks">
      <div className="ciaocss">
        <img src="images/ciao.jpg" alt="how it works"/>
      </div>
      <div className="howtitle">
      <h4>How Ciao Works</h4>
      <ol>
        <li><span>Create A Card</span></li>
        <li><span>Add Post using a Gif or Img or Video</span></li>  
        <li><span>Invite your teammates or friends or family to contribute to the card via email</span></li>
        <li><span>After contribution send the card to the receipent via email.</span></li>
      </ol>  
      </div>
    </div>
    <div class="footer">
      <p>&copy; 2021 Copy Rights Reserved by Akhila, Shakirat and Yusuf.  </p>
    </div>
    </div> 
    </>
      
  );
}