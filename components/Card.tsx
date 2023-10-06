import Image from "next/image";
import React from "react";

export default function Card({ ...user }) {
  return (
    <div className="w-[300px] h-fit flex flex-col justify-center pl-5 border border-black bg-[white] rounded-[16px] py-10">
      <h1 className="text-lg uppercase text-black font-bold mb-7">Welcome</h1>
      <p className="text-black text-left">Client information:</p>
      <p className="text-black text-left">Name: {user.name}</p>
      <p className="text-black text-left">Number: {user.number}</p>
      <p className="text-black text-left">Email: {user.email}</p>
      <p className="text-black text-left">Address: {user.address}</p>
    </div>
  );
}
