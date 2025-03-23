import React from 'react'
import {z} from 'zod'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";

const userSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

// const user = {
//   email: "aaii.com",
//   password: "1277"
// };


// const result = userSchema.safeParse(user);

// if (result.success) {
//   console.log("Validation successful:", result.data);
// } else {
//   console.log("Validation errors:", result.error.errors);
// }


const LoginPage = () => {
  const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(userSchema),
      });

      const navigate = useNavigate();
      
      const onSubmit = (data) => {
        console.log("Form submitted:", data);
        navigate("/");
      };

  return (
      <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 bg-white p-10 rounded-lg w-md">
          <FormInput type="email" id="email" text="Email" placeholder="Email" error={errors.email} func={register("email")}/>
          <FormInput type="password" id="password" text="Password" placeholder="Password" error={errors.password} func={register("password")}/>

          {/* <div className="flex flex-col gap-2">
            <label htmlFor="pw">Password</label>
            <input 
            {...register("password") }
            placeholder="Password" id="pw" className="px-3 py-2"/>
            {errors.password && <span style={{color: "red"}}>{errors.password.message}</span>}
          </div> */}
          
          <Button text="Login" />
          <p className="text-center">Don't have an account? <a className="text-blue-600" href="/signup">Sign Up</a></p>
      </form>
      </div>
  )
}

export default LoginPage