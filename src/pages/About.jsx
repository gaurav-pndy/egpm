import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center mb-12">
      {/* Header with background image */}
      <div className="relative w-full ">
        <div className="absolute inset-0 bg-[rgb(0,56,98)]/30"></div>
        <img
          src="https://static.wixstatic.com/media/11062b_f71f178b5f494268bf2f5420c4820ae3~mv2.jpg/v1/fill/w_1899,h_319,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f71f178b5f494268bf2f5420c4820ae3~mv2.jpg"
          alt="Mountain landscape background"
          className="w-full object-cover h-[30vh] md:h-[35vh]"
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 px-2 text-white text-center ">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">GRASP Goals</h2>
          <p className="text-2xl md:text-4xl mb-2">for</p>{" "}
          <p className="font-semibold text-2xl md:text-4xl">
            Eurasian Global Peace Mission
          </p>
        </div>
      </div>

      {/* Goals content */}
      <div className="w-full  mt-3 max-w-5xl text-[rgb(0,37,65)] p-4 md:p-6 text-base md:text-[1.6rem] leading-7 md:leading-8 font-[500]">
        <h3 className="text-[1.6rem] font-bold mb-8 text-center md:text-left">
          Our Goals
        </h3>
        <div className="space-y-6 md:ml-8  leading-relaxed">
          <p>
            <span className="font-bold underline text-2xl md:text-3xl">G</span>
            uidance and coordination particularly in the field of education
          </p>
          <p>
            <span className="font-bold underline text-2xl md:text-3xl">R</span>
            oad map for resolving individual issues in a coherent and
            coordinated manner
          </p>
          <p>
            <span className="font-bold underline text-2xl md:text-3xl">A</span>
            ssistance in obtaining official support from respective authorities
          </p>
          <p>
            <span className="font-bold underline text-2xl md:text-3xl">S</span>
            trengthen cultural exchange between nations to promote values
          </p>
          <p>
            <span className="font-bold underline text-2xl md:text-3xl">P</span>
            romotion of holistic model to build an integrated peace movement
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
