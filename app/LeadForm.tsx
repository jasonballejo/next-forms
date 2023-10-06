"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  //Create a submit post
  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = await fetch(`/api/createUser`, {
      method: "POST",
      body: JSON.stringify({ name, number, email, address }),
    });
    const res = await data.json();
    router.refresh();
    if (!res.ok) console.log(res.message);
  }
  // const data = {
  //   name: e.target.name.value,
  //   number: e.target.number.value,
  //   email: e.target.email.value,
  //   address: e.target.address.value,
  // };

  // const res = await fetch("/api/contact", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });

  // if (res.ok) {
  //   console.log("Message sent successfully");
  // }
  // if (!res.ok) {
  //   console.log("Error sending message");
  // }

  return (
    <>
      <div>
        <h1 className="font-bold text-[30px]">Enter Client Information</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            id="number"
            required
            onChange={(e) => setNumber(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />

          <button className="bg-black" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center text-center">
        <Link
          className="text-black mt-4 text-center hover:text-gray-800"
          href="/dashboard"
        >
          Go to Dashboard
        </Link>
      </div>
    </>
  );
}
