"use client"

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
    <form>
    <input
          type="email"
          placeholder="email"
          value={email}
          disabled={false}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={false}
          onChange={(event) => setPassword(event.target.value)}
        />
    </form>

    </section>
  );
}
