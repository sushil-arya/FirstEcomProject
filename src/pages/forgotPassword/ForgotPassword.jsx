import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const ForgotPassword = () => {

  useEffect(() => {
                AOS.init({
                  duration: 700,
                  offset: 100,
                  easing: "ease-out-cubic",
                });
              }, []);

  const [isShowPassword, setIsShowPassword] = useState(false);

  const [isShowPassword2, setIsShowPassword2] = useState(false);

  return (
    <section className="section py-10" data-aos="zoom-out">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-[#666]">
            Forgot Password
          </h3>
          <form className="w-full mt-5" data-aos="fade-up">
            {/* email id field */}
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword === false ? "password" : "text"}
                id="password"
                label="New Password *"
                variant="outlined"
                className="w-full"
                name="password"
              />

              <Button
                type="submit"
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000]"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === false ? (
                  <IoMdEye className="text-[20px] opacity-75" />
                ) : (
                  <IoMdEyeOff className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            {/* password id field */}
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword2 === false ? "password" : "text"}
                id="confirm_password"
                label="Confirm Password *"
                variant="outlined"
                className="w-full"
                name="conf_password"
              />
              <Button
                type="submit"
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000]"
                onClick={() => setIsShowPassword2(!isShowPassword2)}
              >
                {isShowPassword2 === false ? (
                  <IoMdEye className="text-[20px] opacity-75" />
                ) : (
                  <IoMdEyeOff className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full mt-5 mb-3">
              <Button variant="contained" className="!capitalize w-full btn-lg">
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
