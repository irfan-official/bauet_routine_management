import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log("data = ", data);
    try {
      const response = await axios.post("/api/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response from server: ", response.data);
      alert("Signup successful!");
      navigate("/login")
      reset();
    } catch (error) {
      console.error("Error during signup: ", error);
      if (error.response) {
        alert(`Error: ${error.response.data.message || "Signup failed!"}`);
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  function formCss() {
    return {
      pageDiv: () =>
        "w-full h-screen bg-white flex flex-col items-center justify-center text-black",
      h1: () => "text-5xl mb-12",
      formBody: () => "flex flex-col gap-4 w-3/12 ",
      input: () => "px-2 py-3 w-full border border-zinc-500 rounded-lg",
      signUpButton: () =>
        "bg-[#0E64D2] text-white font-semibold py-2 text-[1.2rem] rounded-lg mt-7",
      line: () => "w-4/12 h-[2px] bg-black",
      facebookButton: () =>
        "bg-[#1877F2] text-white font-semibold rounded-lg py-2 text-[1.2rem]",
      googleButton: () =>
        "w-full border border-zinc-800 py-2 rounded-lg text-[1.1rem]",
      childDiv: () => "bg-[#D6D6D6] text-[2B2B2B] rounded-lg",
      loginButton: () =>
        "bg-[#0E64D1] text-[white] font-semibold px-5 py-2 rounded-lg absolute right-0",
    };
  }
  return (
    <div className={formCss().pageDiv()}>
      <div className="w-full h-full flex flex-col items-center justify-center scale-[0.84]">
        <h1 className={formCss().h1()}>Create an account</h1>
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className={formCss().formBody()}
        >
          <input
            {...register("admin_name")}
            className={formCss().input()}
            type="text"
            placeholder="Enter your Username"
          />
          <input
            {...register("admin_email")}
            className={formCss().input()}
            type="text"
            placeholder="Enter your Email"
          />
          <input
            {...register("admin_number")}
            className={formCss().input()}
            type="text"
            placeholder="Enter your Phone Number"
          />
          <input
            {...register("admin_password")}
            className={formCss().input()}
            type="text"
            placeholder="Enter your Password"
          />
          <button type="submit" className={formCss().signUpButton()}>
            Sign Up
          </button>
          <div className="flex items-center justify-center gap-3">
            <div className={formCss().line()}></div>
            <strong>Or With</strong>
            <div className={formCss().line()}></div>
          </div>
          <button className={formCss().facebookButton()}>
            Signup with facebook
          </button>
          <button className={formCss().googleButton()}>
            Signup with google
          </button>
          <div className={formCss().childDiv()}>
            <div className="flex w-full items-center relative ">
              <h4 className="w-full text-center py-2">
                Already have an account ?
              </h4>
              <NavLink to="/login" className={formCss().loginButton()}>
                Login
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
