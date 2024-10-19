import axios from 'axios'
import React from 'react'

async function getUserDetails(){
  const respone = await axios.get("http://localhost:3000/api/user");
  return respone.data;
}

//async components
export default async function Card(){

  await new Promise((r) => {
    setTimeout(r, 3000);
  });

  const userDetails = await getUserDetails();

  return(
    <>
      <div className='flex flex-col h-screen justify-center items-center'>
        <div className='border rounded p-8 '>
          Name: {userDetails.name}
          <br />
          GitHub: {userDetails.github}
        </div>
      </div>
    </>
  )
}