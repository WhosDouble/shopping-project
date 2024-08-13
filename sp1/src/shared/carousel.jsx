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
    items: 1,
    slidesToSlide: 1,
  },
};

function Slider() {
  return (
    <div className="pt-20">
      <Carousel responsive={responsive}>
        <div className="mr-5 relative">
          <div className="w-[56px] h-[56px] flex items-center justify-center rounded-full absolute right-3 -top-2 bg-[#1b1b1b] z-20">
            <h3 className="text-white">New</h3>
          </div>
          <img id="cImg" src="/woman3.jpg" alt="model in a autumn background" />
          <h2 id="title" className="title text-[14px] text-[rgba(0,0,0,0.8)]">
            Fall Sale
          </h2>
          <h1
            id="desc"
            className="desc font-semibold text-[20px] tracking-wider"
          >
            SPECIAL FALL SALE🍂
          </h1>
        </div>
        <div className="mr-5">
          <img id="cImg" src="/jacket1.jpg" alt="" />
          <h2 id="title" className="text-[14px] text-[rgba(0,0,0,0.8)]">
            THE NORTH FACE
          </h2>
          <h1
            id="desc"
            className="desc font-semibold text-[20px] tracking-wider"
          >
            GREEN BATON🟢
          </h1>
        </div>
        <div className="mr-5">
          <div className="w-[56px] h-[56px] flex items-center justify-center rounded-full absolute right-12 -top-2 bg-[#1b1b1b] z-20">
            <h3 className="text-white">New</h3>
          </div>
          <img id="cImg" src="/dude2.jpg" alt="" />
          <h2 id="title" className="text-[14px] text-[rgba(0,0,0,0.8)]">
            LYNTELL
          </h2>
          <h1 id="desc" className="font-semibold text-[20px] tracking-wider">
            LYNTELL ♥ HOODIES
          </h1>
        </div>
        <div className="mr-5">
          <img id="cImg" src="/dude3.jpg" alt="" />
          <h2 id="title" className="text-[14px] text-[rgba(0,0,0,0.8)]">
            outdoor
          </h2>
          <h1 id="desc" className="font-semibold text-[20px] tracking-wider">
            OUTDOOR COLLECTION 🏞
          </h1>
        </div>
        <div className="mr-5">
          <img id="cImg" src="/dude4.jpg" alt="" />
          <h2 id="title" className="text-[14px] text-[rgba(0,0,0,0.8)]">
            street
          </h2>
          <h1 id="desc" className="font-bold text-[20px] tracking-wider">
            Street Wear Collection
          </h1>
        </div>
        <div className="mr-5">
          <img id="cImg" src="/woman1.jpg" alt="" />
          <h2 id="title" className="text-[14px] text-[rgba(0,0,0,0.8)]">
            Remix
          </h2>
          <h1 id="desc" className="font-bold text-[20px] tracking-wider">
            BUY2 50%OFF Collection2️
          </h1>
        </div>
        <div className="mr-5">
          <img id="cImg" src="/woman5.jpg" alt="" />
          <h2 id="title" className="text-[14px] text-[rgba(0,0,0,0.8)]">
            BRAND NAME
          </h2>
          <h1 id="desc" className="font-bold text-[20px] tracking-wider">
            International Collection
          </h1>
        </div>
        <div className="mr-5">
          <div className="w-[56px] h-[56px] flex items-center justify-center rounded-full absolute right-5 -top-2 bg-[#1b1b1b] z-20">
            <h3 className="text-white">New</h3>
          </div>
          <img id="cImg" src="/pair1.jpg" alt="" />
          <h2 id="title" className="text-[14px] text-[rgba(0,0,0,0.8)]">
            BRAND NAME
          </h2>
          <h1 id="desc" className="font-bold text-[20px] tracking-wider">
            FESTIVAL FITS 🎡
          </h1>
        </div>
        <div className="mr-5 h-[500px]">
          <img id="cImg" src="/woman4.jpg" alt="" />
          <h2 id="title" className="text-[14px] text-[rgba(0,0,0,0.8)]">
            BREE
          </h2>
          <h1 id="desc" className="font-bold text-[20px] tracking-wider">
            BEACH BASH 🏐
          </h1>
        </div>
        <div className="mr-5">
          <img id="cImg" src="/dude5.jpg" alt="" />
          <h2 id="title" className="text-[14px] text-[rgba(0,0,0,0.8)]">
            NIKE
          </h2>
          <h1 id="desc" className="font-bold text-[20px] tracking-wider">
            TECH WEAR
          </h1>
        </div>
      </Carousel>
    </div>
  );
}
export default Slider;
