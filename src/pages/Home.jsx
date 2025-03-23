import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Hero section with background image */}
      <div className="relative w-full ">
        <div className="absolute inset-0 bg-slate-700/50"></div>
        <img
          src="https://static.wixstatic.com/media/11062b_c6e36b742cae4614a9228bb4a1d8455d~mv2.jpg/v1/fill/w_1899,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_c6e36b742cae4614a9228bb4a1d8455d~mv2.jpg"
          alt="Mountain landscape background"
          className="w-full object-cover h-[65vh] md:h-[60vh]"
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 px-2 text-white text-center bg-black/20">
          <div className="relative flex flex-col gap-2.5 border-4 bg-[rgb(64,64,64)]/50 w-[90%] lg:w-[65%] pt-8 md:pt-10 pb-12 md:pb-14 mb-6 max-w-5xl">
            <h1 className="text-2xl md:text-[2.9rem] font-bold">
              Eurasian Global Peace Mission
            </h1>
            <p className="text-xl md:text-[1.86rem] font-bold">
              DEDICATED TO DISPLACED STUDENTS FROM UKRAINE
            </p>
            <p className="text-lg md:text-[1.6rem] font-bold italic mb-1">
              Removing Obstacles in Education!
            </p>
            <p className="text-lg md:text-[1.6rem] font-bold mb-2">
              Not-for-Profit | Merit Scholarships
            </p>
            <p className="text-base md:text-[1.6rem]">
              Register before <span className="font-bold">24th March 2022</span>
            </p>

            {/* Action buttons */}
            <div className="md:absolute -bottom-7 md:-bottom-5 md:left-[50%] md:translate-x-[-50%] tracking-widest  flex flex-col md:flex-row gap-4 md:gap-0 mt-4 w-full  md:max-w-3xl px-4 md:px-8 justify-between ">
              <Link to="/resettlement">
                <button className="bg-[#3d9be9] hover:bg-[#0086eb] text-white px-8 py-2 w-full md:w-72 cursor-pointer transition-all duration-200">
                  Resettlement Support
                </button>
              </Link>
              <Link to="/emergency">
                <button className="bg-[#a80e0e] hover:bg-[#940d0d] text-white px-8 py-2 w-full md:w-72 cursor-pointer transition-all duration-200">
                  Emergency Aid
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full mt-6 max-w-5xl text-[rgb(0,37,65)] p-4 md:p-6 text-base md:text-[1.19rem] leading-7 md:leading-8 font-[500]">
        <p className="mb-6 md:mb-8 text-justify">
          In these difficult situations, when the whole world is keenly watching
          on what is happening in Ukraine, we a group of peace-loving
          individuals across the globe, under the leadership of Dr. Somasundaram
          SUBRAMANIAN (Dr. Soma), a Cancer Surgeon, Cancer Survivor,
          Philanthropist, Educationalist, who earlier studied in Soviet Ukraine
          and Post-Soviet Russia, have come forward to create an inclusive
          database of all those who are in need.
        </p>

        <p className="mb-6 md:mb-8 text-justify">
          In view of the current crisis, we have launched a human Repatriation,
          Resettlement, Rehabilitation & Revival Support Initiative to help
          students, expats, and others to find a new place to study, work and
          resettle.
        </p>

        <p className="mb-6 md:mb-8 text-justify">
          We welcome all students, expats irrespective of their nationality,
          religious or political views, who may need support to get registered
          and to follow the EGPM website and social media posts for updates in
          this regard.
        </p>

        <p>This mission is intended for those who need help including:</p>
        <ul className="list-disc pl-6 md:pl-8 mb-6 md:mb-8">
          <li>Students studying in Ukraine</li>
          <li>Friends, Families or Relatives in Ukraine</li>
          <li>Expats doing business or working in Ukraine</li>
          <li>Anyone across the globe affected due to this crisis</li>
        </ul>

        <p className="mb-6 md:mb-8 text-justify">
          All individuals concerned, irrespective of nationality, are requested
          to fill in the relevant form so that we can help with coordination
          with competent authorities and volunteers for possible{" "}
          <a href="/emergency" className="underline">
            emergency aid
          </a>{" "}
          and render assistance in{" "}
          <a href="/resettlement" className="underline">
            resettlement
          </a>{" "}
          especially in terms of continuing education.
        </p>

        <p className="mb-4 text-justify">
          Any individual willing to volunteer may fill in the form to join this
          humanitarian initiative. The core group will consider every individual
          application and respond them accordingly.
        </p>

        <p className="mb-6 md:mb-8 font-bold text-black">
          More details and information will be circulated as and when becomes
          relevant.
        </p>

        <p className="mb-6 md:mb-8">
          <span className="font-bold text-black">
            Thank you and Warm Regards
          </span>
          <br />
          on behalf of EGPM Team
        </p>

        {/* Founder section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 my-10 md:my-16 justify-center">
          <img
            src="https://static.wixstatic.com/media/e6f22e_f34005accbdf4e9bbf54dc24d9899b94~mv2.jpg/v1/crop/x_0,y_122,w_2953,h_2950/fill/w_175,h_175,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SUBRAMANIAN_Somasundaram_JPG.jpg"
            alt="Dr. Somasundaram SUBRAMANIAN"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover"
          />
          <div className="flex flex-col gap-4 md:gap-8 justify-center text-center md:text-left">
            <p className="font-bold text-base md:text-[1.19rem] text-black">
              Dr. Somasundaram SUBRAMANIAN
            </p>
            <div className="text-sm md:text-[1.05rem] leading-6.5">
              <p>Surgical Oncologist & Cancer Survivor,</p>
              <p>Founder & Chair - Eurasian Global Peace Mission,</p>
              <p>Moscow, Russian Federation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
