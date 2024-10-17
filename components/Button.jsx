"use client";
export function ButtonComponent(){
  function handler(){
    console.log("hey ther!");
  }
  return (
    <button onClick={handler} className="mt-8 w-full text-white bg-gray-800 focus:right-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
      SignIn
    </button>
  )
}