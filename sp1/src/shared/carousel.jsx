import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};

function Slider() {
  return (
    <div className="pt-28">
      <Carousel responsive={responsive}>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h1>test</h1>
        </div>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h1>test</h1>
        </div>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h1>test</h1>
        </div>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h1>test</h1>
        </div>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h1>test</h1>
        </div>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h1>test</h1>
        </div>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h1>test</h1>
        </div>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h1>test</h1>
        </div>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h1>test</h1>
        </div>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h1>test</h1>
        </div>
      </Carousel>
      ;
    </div>
  );
}
export default Slider;
