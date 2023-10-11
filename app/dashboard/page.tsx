"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import prisma from "@/prisma/client";
import { NextRequest } from "next/server";

export const revalidate = 0;

export default function Dashboard() {
  // const [users, setUsers] = useState([]);

  // async function getUsers() {
  //   const res = await fetch(`/api/users`);

  //   if (!res.ok) {
  //   }
  //   const data = await res.json();
  //   setUsers(data);
  // }

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-2xl">Client Database</h1>
        <Link
          className="text-white text-center border rounded-[4px] bg-black py-4 px-10 hover:bg-gray-800"
          href="/"
        >
          Submit Client
        </Link>
      </div>
      {/* <div className="flex sm:flex-row flex-col gap-5">
        {users.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div> */}
    </div>
  );
}
