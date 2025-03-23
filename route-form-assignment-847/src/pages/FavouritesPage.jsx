import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import { Dropdown } from 'primereact/dropdown';
import {z} from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import FormDropdown from "../components/FormDropdown";
import { useNavigate } from "react-router-dom";


const userSchema = z.object({
  number: z.coerce.number().min(1).max(100),
  q: z.enum(["love", "like"]),
  size: z.enum(["small", "medium", "large"]),
});


const FavouritesPage = () => {

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
    const { number, q, size } = data;
    navigate(`/fav/${number}?q=${q}&size=${size}`);
  };
  const [selectedQ, setQ] = useState(null);
  const [selectedSize, setSize] = useState(null);
    const queries = [
        { name: 'love', code: 'Lv' },
        { name: 'like', code: 'Lk' },
    ];
    const sizes = [
      { name: 'small', code: 'sm' },
      { name: 'medium', code: 'md' },
      { name: 'large', code: 'lg' },
  ];

  return (
    <div className="min-w-screen h-screen flex justify-center items-center bg-gray-200">  
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-sm h-lg bg-white p-10 gap-8 shadow-md rounded-xl">
      <div className="text-2xl font-bold text-center">Favourite Pages</div>
      <FormInput type="number" min="0" max="100" id="number" text="Number:" placeholder="Number" error={errors.number} func={register("number")}/>
      <FormDropdown id="q" label="Q:" value={selectedQ} handleFunc={setQ} options={queries} optionLabel="name" error={errors.q} errFunc={register("q")}/>
      <FormDropdown id="size" label="Size:" value={selectedSize} handleFunc={setSize} options={sizes} optionLabel="name" error={errors.size} errFunc={register("size")}/>
     
      {console.log(selectedQ)}
      <Button text="Submit" />

      </form>
      
    </div>
  )
}

export default FavouritesPage