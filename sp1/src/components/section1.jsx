import Slider from "../shared/carousel";
import Marquee from "../shared/Marquee";

function Section1() {
  return (
    <section className="flex flex-col w-full z-10">
      <div className="pt-24">
        <h1 className="header text-[60px] pl-10 font-semibold">
          Shop From Our Top Collections ♥
        </h1>
        <Slider />
        <Marquee />
      </div>
    </section>
  );
}
export default Section1;
