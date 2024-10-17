import React from 'react'
import { ButtonComponent } from './Button'

export function SignInComponent() {

  return <div className="h-screen flex justify-center items-center flex-col">
    <div className="flex justify-center">
      <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100" href="#">
        <div className="px-10">
          <div className="text-3xl font-extrabold">
            Sign in
          </div>
        </div>
        <div className="pt-2 flex flex-col items-start justify-evenly h-72">
          <LabelledInput label="Email" placeholder="anurag@gmail.com" type="email" />
          <LabelledInput label="Password" placeholder="123456" type="password" />
        </div>
        <ButtonComponent />
      </a>
    </div>
  </div>
}

interface LabelledInputType {
  label: string,
  placeholder: string,
  type: string,
}

function LabelledInput({ label, placeholder, type }: LabelledInputType){
  return <div>
    <label className="block mb-2 text-sm text-black font-semibold pt-4" htmlFor="">{label}</label>
    <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
  </div>
}