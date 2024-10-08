import BasicExample from "../shared/QuestionBlock";
import ReverseLogo from "../shared/ReverseLogo";

function Section4() {
  return (
    <section id="section2 overflow-hidden">
      <h1 id="desc" className="text-center text-[50px] font-semibold">
        Best and Trusted Brands
      </h1>
      <ReverseLogo />
      <div className="flex justify-center flex-wrap gap-10 p-10 mt-5">
        <div className="flex gap-5">
          <img
            className="w-full max-w-[350px] h-[300px] group relative"
            src="/new1.jpg"
            alt=""
          />
          <div className="w-[225px] opacity-0 h-10 bg-black absolute group-hover:opacity-100"></div>
          <img
            className="w-full max-w-[350px] h-[300px]"
            src="/new2.jpg"
            alt=""
          />
          <img
            className="w-full max-w-[350px] h-[300px]"
            src="/new3.jpg"
            alt=""
          />
        </div>

        <div className="flex gap-5">
          <img
            className="w-full max-w-[350px] h-[300px]"
            src="/bag1.jpg"
            alt=""
          />
          <img
            className="w-full max-w-[350px] h-[300px]"
            src="/bag2.jpg"
            alt=""
          />
          <img
            className="w-full max-w-[350px] h-[300px]"
            src="/hat1.jpg"
            alt=""
          />
        </div>
      </div>
      <BasicExample />
    </section>
  );
}
export default Section4;
