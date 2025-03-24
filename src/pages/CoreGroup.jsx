import React from "react";

const teamMembers = [
  {
    name: "SUBRAMANIAN Somasundaram, MD",
    image:
      "https://static.wixstatic.com/media/e6f22e_f34005accbdf4e9bbf54dc24d9899b94~mv2.jpg/v1/fill/w_191,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_11.jpg",

    description: `Founder & Chair - Eurasian Global Peace Mission

Surgical Oncologist & OncoPlastic Surgeon
Founder and CEO, Eurasian Federation of Oncology (EAFO), Scotland, United Kingdom & EAFO Educational and Research center "Eurasian Oncology Program " (EAFO ERC), Moscow, Russian Federation ;
Co-Founder & Chair, Board of Directors, Eurasian cancer Research Council (ECRC), Mumbai, India;
Co-Founder, Eurasian Society of Head & Neck Oncology (EASHNO),
Convener & Scientific Lead, FIRMST (Forum for Interdisciplinary Research in Medical Science & Technology );
    `,
    location: "Moscow, Russian Federation",
  },
  {
    name: "UNGAR Laszlo, MD, PhD, MHCOG, МНСР",
    image:
      "https://static.wixstatic.com/media/e6f22e_b9d2e0142a8b4f1eb3535ffc6cd2a4ca~mv2.jpg/v1/fill/w_191,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_11.jpg",

    description: `
      Founding Chair (2010-2020), EAFO Gynecologic Oncology Working Group;
Founder & Member, Board of Directors, Eurasian Federation of Oncology (EAFO);
Chief Medical Consultant, Duna Medical Center;
Professor, Albert Szentgyörgyi Medical University, Hungary
    `,
    location: "Budapest, Hungary",
  },
  {
    name: "BALASUBRAMANIAM Ganesh (Ph.D. in Epidemiology, Public Health, Finland)",
    image:
      "https://static.wixstatic.com/media/df6cc5_0f84f87dcfd745c7b8664bf7e658e772~mv2.jpg/v1/fill/w_191,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_11.jpg",

    description: `
BALASUBRAMANIAM Ganesh (Ph.D. in Epidemiology, Public Health, Finland)
Epidemiologist and Ex-Head of Department of Medical Records, Biostatistics & Epidemiology, Principal Investigator, Cancer Registry, Tata Memorial Centre, Mumbai, India. Worked for 38 years
Presently Project Coordinator, Division of Cancer Surveillance for Special Population (CSSP), Centre for Cancer Epidemiology (CCE), Tata Memorial Centre, Mumbai, India.
    `,
    location: "Mumbai, India",
  },
  {
    name: "ADILBAY Dauren, MD, PhD",
    image:
      "https://static.wixstatic.com/media/df6cc5_6037b446bab54459bafc7aa24caf9d0e~mv2.jpg/v1/fill/w_191,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_11.jpg",
    description: `
     Head & Neck Surgeon;

Visiting Investigator, Memorial Sloan-Kettering Cancer Center,
    `,
    location: "New-York, NY, United States of America",
  },
  {
    name: "KOTWANI Sammy Manoj",
    image:
      "https://static.wixstatic.com/media/df6cc5_2805665a4d074940a198d2a34bf87d83~mv2.jpg/v1/fill/w_191,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_11.jpg",
    role: "",
    description: `
      President of Indian Business Alliance;
      President of OFBJP Russia;
President of The Indian National Cultural Centre “SITA”
    `,
    location: "Moscow, Russian Federation",
  },
  {
    name: "ATHREYAS Varun, MD",
    image:
      "https://static.wixstatic.com/media/df6cc5_738f19b9c9ea4d368848150eb6066ca1~mv2.jpg/v1/fill/w_191,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_11.jpg",
    role: "",
    description: `
      Interventional Cardiologist;
Satellite Committees Coordinator – Forum of Interdisciplinary Research in Medical Science and Technology (FIRMST);
    `,
    location: "Moscow, Russian Federation",
  },
  {
    name: "MUTHU Murali",
    image:
      "https://static.wixstatic.com/media/e6f22e_f5f8197ef6fa45939af003192876f843~mv2.jpg/v1/fill/w_191,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_11.jpg",
    role: "",
    description: `
      Health and wellness Coach;
Co-Founder – Prakriyaa Trust;
Satellite Committees Coordinator – Forum of Interdisciplinary Research in Medical Science and Technology (FIRMST);
    `,
    location: "Moscow, Russian Federation",
  },
  {
    name: "SANKARAN Praveen, C. Eng (India)",
    image:
      "https://static.wixstatic.com/media/e6f22e_7a48466c8a244ea183bfdbb77158ad50~mv2.jpg/v1/fill/w_191,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_11.jpg",
    role: "",
    description: `
      Chartered Aerospace Systems Engineer,

Managing Director, Pasovit Technologies Private Limited;
General Manager, Aviakul Private Limited;
Hon. Director, Digital Affairs, Eurasian Federation of Oncology.
    `,
    location: "New Delhi, India",
  },
  // Add more members here as needed
];

const CoreGroup = () => {
  return (
    <section className="flex flex-col items-center mb-12">
      {/* Header with background image */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[rgb(0,56,98)]/30"></div>
        <img
          src="https://static.wixstatic.com/media/11062b_f71f178b5f494268bf2f5420c4820ae3~mv2.jpg/v1/fill/w_1899,h_319,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f71f178b5f494268bf2f5420c4820ae3~mv2.jpg"
          alt="Background"
          className="w-full object-cover h-[30vh] md:h-[35vh]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 px-2 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Core Group</h2>
          <p className="text-2xl md:text-4xl mb-2">for</p>
          <p className="font-semibold text-2xl md:text-4xl">
            Eurasian Global Peace Mission
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="w-full mt-3 max-w-5xl text-[rgb(0,37,65)] p-4 md:p-6 text-base md:text-[1.05rem] leading-6.5 text-justify md:leading-7.5 font-[550]">
        <h3 className="text-[1.6rem] font-bold mb-16 text-center md:text-left">
          Our Team
        </h3>
        <div className="space-y-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-10  md:pl-10"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover"
              />
              <div>
                <h4 className="text-2xl font-bold text-[#8F3985] mb-2">
                  {member.name}
                </h4>

                <p className=" mb-2 whitespace-pre-line">
                  {member.description.trim()}
                </p>
                <p className="italic font-[800] text-black">
                  {member.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreGroup;
