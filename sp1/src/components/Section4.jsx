import BasicExample from "../shared/QuestionBlock";

function Section4() {
  return (
    <section id="section2 overflow-hidden">
      <div className="flex justify-center flex-wrap gap-10 p-10 mt-5">
        <div className="flex gap-5">
          <img
            className="w-full max-w-[350px] h-[300px]"
            src="/new1.jpg"
            alt=""
          />
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
