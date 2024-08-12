import ClotheDisplay from "../shared/ClotheDisplay";

function Section2() {
  return (
    <>
      <section className="section2">
        <div className="flex p-14 h-[900px]">
          <div className="w-full max-w-[350px]">
            <h1 id="desc" className="text-[55px]">
              High Quality Clothes
            </h1>
            <a href="">
              <h3 id="desc" className="text-[28px]">
                View More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 13H8V5H6v9a1 1 0 0 0 1 1h7v3l5-4-5-4v3z"></path>
                </svg>
              </h3>
            </a>
          </div>
          <ClotheDisplay />
        </div>
      </section>
    </>
  );
}
export default Section2;
