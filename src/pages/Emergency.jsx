import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Plus, Trash } from "lucide-react";
import countries from "../utils/countries";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Emergency = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    reset,
  } = useForm({});

  const onSubmit = (data) => {
    console.log("aaa gya");
    if (data.email !== data.confirmEmail) {
      alert(
        "Email fields do not match! Please ensure both email fields are same."
      );
      return;
    }
    console.log("Submitted data:", data);
    alert("Form submitted successfully!");
    reset();
  };

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

      <div className="border border-gray-300 shadow-[5px_5px_5px_rgba(0,0,0,0.2)] max-w-5xl px-2 md:px-0  md:w-[60%]">
        <div className="bg-[#002060] p-4 text-white leading-6">
          <h3 className="text-[1.7rem] font-bold">
            Emergency Coordination Form
          </h3>
          <h5>Ukraine Crisis 2022</h5>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  space-y-4 p-4 md:px-6 text-sm "
        >
          <div className="flex flex-col gap-1">
            <label className="font-[800]">First Name*</label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="border border-gray-300 p-1 md:w-1/2 rounded"
            />
            {errors.firstName && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.firstName.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Last Name*</label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="border border-gray-300 p-1 md:w-1/2 rounded"
            />
            {errors.lastName && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.lastName.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Middle Name</label>
            <input
              type="text"
              {...register("middleName")}
              className="border border-gray-300 p-1 md:w-1/2 rounded"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Mobile Number*</label>
            <Controller
              name="mobile"
              control={control}
              rules={{ required: "Mobile number required" }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  country={"in"}
                  value={value}
                  onChange={onChange}
                  inputClass="border !border-gray-300 !text-sm !h-fit !py-1 md:!w-1/2 rounded"
                  buttonClass="!bg-[#d5e6e9]  !border-gray-300 !border-r-0"
                  dropdownClass="!bg-white !text-black !shadow-lg"
                  enableSearch
                />
              )}
            />
            {errors.mobile && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.mobile.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Email*</label>
            <input
              type="email"
              {...register("email", { required: "Primary email is required" })}
              className="border border-gray-300 p-1 md:w-1/2 rounded"
            />
            <input
              type="email"
              {...register("confirmEmail", {
                required: "Confirm primary email",
              })}
              placeholder="Confirm Email"
              className="border border-gray-300 p-1 md:w-1/2 rounded mt-2"
            />
            {errors.email && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Gender*</label>
            <div className="flex gap-6 mt-2">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g}>
                  <input
                    type="radio"
                    value={g}
                    {...register("gender", { required: "Gender is required" })}
                    className="mr-2"
                  />
                  {g}
                </label>
              ))}
            </div>
            {errors.gender && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.gender.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-[800]">Year of Birth*</label>
            <input
              type="number"
              {...register("yob", { required: "Date of birth required" })}
              className="border border-gray-300 p-1 md:w-1/2 rounded"
            />
            {errors.yob && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.yob.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-[800]">Citizenship*</label>
            <select
              {...register("citizenship", {
                required: "Citizenship is required",
              })}
              className="border border-gray-300 p-1 md:w-1/2 rounded"
            >
              <option value="">-Select-</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.citizenship && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.citizenship.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-[800]">Your Present Location (City)*</label>
            <input
              type="text"
              {...register("city", { required: "City is required" })}
              className="border border-gray-300 p-1 md:w-1/2 rounded"
            />
            {errors.city && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.city.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">
              Whereabouts of your current location (Street, Location etc.,)
            </label>
            <textarea
              name="whereabouts"
              {...register("whereabouts")}
              className=" border border-gray-300 p-2 rounded h-20"
            />
            <p className=" text-gray-400 italic text-xs">
              Anything that can help us locate you faster
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">
              If you need assistance, please explain What is happening around
              you?{" "}
            </label>
            <textarea
              name="situation"
              {...register("situation")}
              className=" border border-gray-300 p-2 rounded h-20"
            />
            <p className=" text-gray-400 italic text-xs">
              Describe the scenario you are in, whether you are safe, what's the
              situation where you are located, the kind of scene that is infront
              of you etc.,
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-[800]">
              Any Urgent Needs / additional assistance required?
            </label>
            <textarea
              name="urgentNeeds"
              {...register("urgentNeeds")}
              className=" border border-gray-300 p-2 rounded h-20"
            />
          </div>
          <div className="flex  w-full mt-10 justify-center">
            <button
              type="submit"
              className="bg-[#00295f] cursor-pointer text-white py-2 px-6 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Emergency;
