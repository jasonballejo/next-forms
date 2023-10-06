import React from "react";
import Dashboard from "@/components/Dashboard";
import Card from "@/components/Card";
import Link from "next/link";

export const revalidate = 0;

async function getUsers() {
  const res = await fetch(`${process.env.BASE_URL}/api/getUsers`);

  if (!res.ok) {
  }
  return res.json();
}

export default async function page() {
  const data: { id: number; name: string; number: string; address: string }[] =
    await getUsers();
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
      <div className="flex sm:flex-row flex-col gap-5">
        {data.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}
