"use client";

import React, { useState, ChangeEventHandler } from 'react'
import { ButtonComponent } from './Button'
import axios from 'axios';
import { useRouter } from 'next/navigation';

export function SignInComponent() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return <div className="h-screen flex justify-center items-center flex-col">
    <div className="flex justify-center">
      <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100" href="#">
        <div className="px-10">
          <div className="text-3xl font-extrabold">
            Sign in
          </div>
        </div>
        <div className="pt-2 flex flex-col items-start justify-evenly h-72">
          <LabelledInput onChange={(e) => {
            setEmail(e.target.value);
          }} label="Email" placeholder="anurag@gmail.com" type="email" />
          <LabelledInput onChange={(e) => {
            setPassword(e.target.value);
          }} label="Password" placeholder="123456" type="password" />
        </div>
        {/* <ButtonComponent /> */}
        <button className="mt-8 w-full text-white bg-gray-800 focus:right-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" type='button' onClick={async() => {
          const response = await axios.post("http://localhost:3000/api/user", {
            email,
            password,
          });
          router.push('/');
        }}>
          SignIn
        </button>
      </a>
    </div>
  </div>
}

interface LabelledInputType {
  label: string,
  placeholder: string,
  type?: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType){
  return <div>
    <label className="block mb-2 text-sm text-black font-semibold pt-4" htmlFor="">{label}</label>
    <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
  </div>
}