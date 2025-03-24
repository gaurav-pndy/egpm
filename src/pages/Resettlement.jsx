import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Plus, Trash } from "lucide-react";
import countries from "../utils/countries";

const Resettlement = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      messenger: [],
      relatives: [{ fullName: "", phone: "", email: "", relationship: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "relatives",
  });

  const messengers = ["WhatsApp", "Telegram", "Viber", "Other"];

  const onSubmit = (data) => {
    if (
      data.email !== data.confirmEmail ||
      data.altEmail !== data.confirmAltEmail
    ) {
      alert(
        "Primary or Alternate email fields do not match their confirmations."
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
          className="w-full object-cover h-[30svh] md:h-[35vh]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 px-2 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Register for Resettlement Support
          </h2>
        </div>
      </div>

      <div className="border border-gray-300 shadow-[5px_5px_5px_rgba(0,0,0,0.2)] max-w-5xl px-2 mt-14 md:w-[60%]">
        <div className="bg-[#002060] p-4 text-white leading-6">
          <h3 className="text-[1.7rem] font-bold">
            Students and Expats Resettlement Support
          </h3>
          <h5>Ukraine Crisis 2022</h5>
        </div>
        <div className="flex flex-col items-center p-2">
          <img
            src="https://forms.eafo.info/EAFO/downloadlogoperma?filepath=%2FStudentsandExpatsResettlementSupport%2Fzeimage%2F1646298811490_EGPM_Logo_Var_003.png"
            className="w-48 md:w-96 h-48 md:h-96"
            alt=""
          />
          <h2 className="text-xl text-[rgb(0,37,65)] font-[700] mb-4 ">
            Eurasian Global Peace Mission
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  space-y-4 p-4 text-sm "
        >
          <div className="flex flex-col gap-1">
            <label className="font-[800]">Your Present Status*</label>
            <select
              {...register("status", { required: "Status is required" })}
              className="border p-1 md:w-1/2 rounded"
            >
              <option value="">-Select-</option>
              <option>Student</option>
              <option>Employee</option>
              <option>Business Owner</option>
              <option>Relative of those in Ukraine</option>
              <option>Friend of those in Ukraine</option>
              <option>Other</option>
            </select>
            {errors.status && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.status.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Mobile Number*</label>
            <input
              type="tel"
              {...register("mobile", { required: "Mobile number required" })}
              className="border p-1 md:w-1/2 rounded"
            />
            {errors.mobile && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.mobile.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Alternate Mobile Number</label>
            <input
              type="tel"
              {...register("altMobile")}
              className="border p-1 md:w-1/2 rounded"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Messengers used</label>
            <div className="flex gap-4 mt-2">
              {messengers.map((m) => (
                <label key={m}>
                  <input
                    type="checkbox"
                    value={m}
                    {...register("messenger")}
                    className="mr-1"
                  />{" "}
                  {m}
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Email*</label>
            <input
              type="email"
              {...register("email", { required: "Primary email is required" })}
              className="border p-1 md:w-1/2 rounded"
            />
            <input
              type="email"
              {...register("confirmEmail", {
                required: "Confirm primary email",
              })}
              placeholder="Confirm Email"
              className="border p-1 md:w-1/2 rounded mt-2"
            />
            {errors.email && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.mobile.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Alternate Email</label>
            <input
              type="email"
              {...register("altEmail")}
              className="border p-1 md:w-1/2 rounded"
            />
            <input
              type="email"
              {...register("confirmAltEmail")}
              placeholder="Confirm Alternate Email"
              className="border p-1 md:w-1/2 rounded mt-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">First Name*</label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="border p-1 md:w-1/2 rounded"
            />
            {errors.firstName && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.mobile.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Last Name*</label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="border p-1 md:w-1/2 rounded"
            />
            {errors.lastName && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.mobile.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Middle Name</label>
            <input
              type="text"
              {...register("middleName")}
              className="border p-1 md:w-1/2 rounded"
            />
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
            <label className="font-[800]">Date of Birth*</label>
            <input
              type="date"
              {...register("dob", { required: "Date of birth required" })}
              className="border p-1 md:w-1/2 rounded"
            />
            {errors.dob && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.gender.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Citizenship*</label>
            <select
              {...register("citizenship", {
                required: "Citizenship is required",
              })}
              className="border p-1 md:w-1/2 rounded"
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
                {errors.gender.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">City of Residence in Ukraine*</label>
            <input
              type="text"
              {...register("city", { required: "City is required" })}
              className="border p-1 md:w-1/2 rounded"
            />
            {errors.city && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.gender.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">Institution / Organization*</label>
            <input
              type="text"
              {...register("institution", {
                required: "Institution is required",
              })}
              className="border p-1 md:w-1/2 rounded"
            />
            {errors.institution && (
              <span className="text-red-600 font-semibold text-xs mt-1">
                {errors.gender.message}
              </span>
            )}
          </div>

          <div>
            <h3 className="font-[800] mb-1">Contact of Immediate Relatives</h3>
            <div className="p-3 bg-[#f9f9f9] rounded">
              {fields.map((item, index) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-4 mb-5 items-center "
                >
                  <div className="flex justify-between w-full md:w-fit gap-2">
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      disabled={fields.length === 1}
                      className="text-red-500 border p-1 rounded hover:bg-red-500 hover:text-white"
                    >
                      <Trash size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        fields.length < 2 &&
                        append({
                          fullName: "",
                          phone: "",
                          email: "",
                          relationship: "",
                        })
                      }
                      disabled={fields.length >= 2}
                      className="text-green-500 border p-1 rounded hover:bg-green-500 hover:text-white"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register(`relatives.${index}.fullName`, {
                      required: "Required",
                    })}
                    className="border p-1 w-full md:w-1/4 rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register(`relatives.${index}.phone`, {
                      required: "Required",
                    })}
                    className="border p-1 w-full md:w-1/4 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    {...register(`relatives.${index}.email`)}
                    className="border p-1 w-full md:w-1/4 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Relationship"
                    {...register(`relatives.${index}.relationship`)}
                    className="border p-1 w-full  md:w-1/4 rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-[800]">
              Any urgent needs / additional assistance required?
            </label>
            <textarea
              name="urgentNeeds"
              {...register("urgentNeeds")}
              className="md:w-[70%] border p-2 rounded h-20"
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

export default Resettlement;
