import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Plus, Trash } from "lucide-react";
import countries from "../utils/countries";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Volunteer = () => {
  return (
    <section className="flex flex-col items-center mb-12">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[rgb(0,56,98)]/30"></div>
        <img
          src="https://static.wixstatic.com/media/11062b_f71f178b5f494268bf2f5420c4820ae3~mv2.jpg/v1/fill/w_1899,h_319,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f71f178b5f494268bf2f5420c4820ae3~mv2.jpg"
          alt="Background"
          className="w-full object-cover h-[30vh] md:h-[35vh]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 px-2 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Emergency Coordination Form
          </h2>
        </div>
      </div>

      {/* <div className="max-w-5xl border"> */}
      <h3 className="max-w-5xl w-full px-2 md:px-8 text-xl font-semibold my-10">
        Kindly fill this form if you wish to join EGPM team and contribute
        towards our{" "}
        <a className="underline" href="/about">
          {" "}
          Goals !{" "}
        </a>{" "}
      </h3>
      {/* </div> */}

      <div className="w-full flex items-center justify-center max-w-5xl  px-0 md:px-8 h-full">
        <iframe
          aria-label="Students and Expats Resettlement Support"
          frameBorder="0"
          style={{
            height: "1500px",
            width: "100%",
            border: "none",
            overflowX: "hidden",
          }}
          src="https://forms.eafo.info/EAFO/form/VolunteerSignupForm/formperma/UdgM0wJ6fX9RMHpgrkKcklrTt5trrQ_0JujJ4pe5FsY"
        />
      </div>
    </section>
  );
};

export default Volunteer;
