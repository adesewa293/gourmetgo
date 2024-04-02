"use client";

import Image from "next/image";
import { useState } from "react";

function handleFormSubmit(event){
event.preventDefault();
fetch('/api/register', {
  method: 'POST',
  body: JSON.stringify({email, password}),
  headers: {'Content-Type': 'application/json'},
})
}


export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image
            src={"/google-icon.png"}
            alt={"google-icon"}
            width={24}
            height={24}
          />
          Login with google
        </button>
      </form>
    </section>
  );
}
