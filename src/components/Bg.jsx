import React from "react";

function Bg() {
  return (
    <>
    <div className="fixed w-full h-screen z-[2]">
      <div className="absolute top-[5%] text-zinc-600 font-semibold text-2xl flex justify-center items-center w-full py-10 px-10">
        Documents
      </div>
      <h1 className="absolute top-1/2 left-1/2 font-semibold -translate-x-[50%] -translate-y-[50%] text-[10vw] text-zinc-950 leading-none tracking-tighter">
        Docs
      </h1>
    </div>
    </>
  );
}

export default Bg;
