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
    items: 2,
    slidesToSlide: 1,
  },
};

function Slider() {
  return (
    <div className="pt-20">
      <Carousel responsive={responsive}>
        <div className="mr-5 relative">
          <div className="w-[56px] h-[56px] flex items-center justify-center rounded-full absolute -right-0 -top-2 bg-[#1b1b1b] z-20">
            <h3 className="text-white">New</h3>
          </div>
          <img src="/woman1.jpg" alt="" />
          <h2>FALL SALE</h2>
          <h1>SPECIAL FALL SALE</h1>
        </div>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h2>THE NORTH FACE</h2>
          <h1>GREEN BATON</h1>
        </div>
        <div className="mr-5">
          <div className="w-[56px] h-[56px] flex items-center justify-center rounded-full absolute right-5 -top-2 bg-[#1b1b1b] z-20">
            <h3 className="text-white">New</h3>
          </div>
          <img src="/woman1.jpg" alt="" />
          <h2>LYNDELL</h2>
          <h1>Lyndell ♥ Hoodies</h1>
        </div>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h2>outdoor</h2>
          <h1>OUTDOOR COLLECTION</h1>
        </div>
        <div className="mr-5">
          <img src="/woman1.jpg" alt="" />
          <h2>street</h2>
          <h1>Street Wear Collection</h1>
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
          <div className="w-[56px] h-[56px] flex items-center justify-center rounded-full absolute right-5 -top-2 bg-[#1b1b1b] z-20">
            <h3 className="text-white">New</h3>
          </div>
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
    </div>
  );
}
export default Slider;
