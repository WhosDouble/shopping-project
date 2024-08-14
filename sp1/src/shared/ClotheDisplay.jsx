function ClotheDisplay() {
  return (
    <div className="flex w-full ">
      <div className="change flex w-full gap-5 flex-wrap">
        <div className="w-full max-w-[250px] h-[330px] max-h-[330px]">
          <img src="/item2.jpg" alt="Graphic Tee" />
          <h1 id="title">ELlESSE</h1>
          <p id="title">2 set top and bottom</p>
          <p id="title">25$</p>
        </div>
        <div className="w-full max-w-[250px] h-[330px] max-h-[330px]">
          <img src="/item3.jpg" alt="Graphic Tee" />
          <h1 id="title">THE NORTH FACE</h1>
          <p id="title">Quality umbrella</p>
          <p id="title">12.99$</p>
        </div>
        <div className="w-full max-w-[250px] h-[330px] max-h-[330px]">
          <img src="/item4.jpg" alt="Graphic Tee" />
          <h1 id="title">THE NORTH FACE</h1>
          <p id="title">North Face Bucket Hat</p>
          <p id="title">19$</p>
        </div>
        <div className="w-full max-w-[250px] h-[330px] max-h-[330px]">
          <img src="/item5.jpg" alt="Graphic Tee" />
          <h1 id="title">241 CLOTHING</h1>
          <p id="title">241 Raincoat</p>
          <p id="title">34.99$</p>
        </div>
        <div className="w-full max-w-[250px] h-full max-h-[330px]">
          <img src="/item6.jpg" alt="Graphic Tee" />
          <h1 id="title">DANSKIN</h1>
          <p id="title">Danskin Shorts</p>
          <p id="title">20$</p>
        </div>
        <div className="remove w-full max-w-[250px] h-[330px] max-h-[330px]">
          <img src="/item7.jpg" alt="Graphic Tee" />
          <h1 id="title">ELlESSE</h1>
          <p id="title">Tagic Top</p>
          <p id="title">14.99$</p>
        </div>
      </div>
      <div className="remove w-full max-w-[370px] h-[750px] bg-slate-950 mr-36">
        <img className="h-[753px]" src="/dude6.jpg" alt="male wearing jacket" />
      </div>
    </div>
  );
}
export default ClotheDisplay;
