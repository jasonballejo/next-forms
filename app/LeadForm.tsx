"use client";

export default function LeadForm() {
  async function handleSubmit(e: any) {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      number: e.target.number.value,
      email: e.target.email.value,
      address: e.target.address.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      console.log("Message sent successfully");
    }
    if (!res.ok) {
      console.log("Error sending message");
    }
  }

  return (
    <>
      <h1>Enter Client Information</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />

        <label htmlFor="number">Phone Number</label>
        <input type="text" id="number" required />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" required />

        <label htmlFor="address">Address</label>
        <input type="text" id="address" required />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
