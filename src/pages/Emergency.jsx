import React from "react";

const Emergency = () => {
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

      <h3 className="max-w-5xl w-full px-2 md:px-8 text-xl font-semibold my-10">
        Kindly fill this form if you still need evacuation
      </h3>
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
          src="https://forms.eafo.info/EAFO/form/EmergencyEvacuationForm/formperma/am86yc8nRsEIKDsS0vkPKxRwo_GBvyqDs18kfcLqyZM"
        />
      </div>
    </section>
  );
};

export default Emergency;
