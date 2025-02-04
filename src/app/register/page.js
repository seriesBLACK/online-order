"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      setUserCreated(true);
    }
    else {
      setError(true);
    }
    setCreatingUser(false);

  }
  return (
    <section className="bg-slate-100 border w-[100%] h-[100vh] mx-auto p-4 rounded-lg flex flex-col justify-center items-center">
      <h1 className="text-main text-4xl mb-12 font-bold">
        Register
      </h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created.<br />
          Now you can{' '}
          <Link className="underline" href={'/login'}>Login &raquo;</Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occurred.<br />
          Please try again later
        </div>
      )}
      <form className="flex flex-col items-center gap-2" onSubmit={handleFormSubmit}>
        <input className="py-2 px-8 border rounded-md" type="email" placeholder="email" value={email}
          disabled={creatingUser}
          onChange={ev => setEmail(ev.target.value)} />
        <input className="py-2 px-8 border rounded-md" type="password" placeholder="password" value={password}
          disabled={creatingUser}
          onChange={ev => setPassword(ev.target.value)} />
        <button type="submit" className="bg-main text-white py-2 px-4 rounded-lg font-semibold mt-3" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="flex gap-4 justify-center bg-white py-2 px-6 rounded-e-xl font-semibold">
          <Image src='/google.png' alt={''} width={24} height={24} />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4 text-lg">
          Existing account?{' '}
          <Link className="underline" href={'/login'}>Login here &raquo;</Link>
        </div>
      </form>
    </section>
  )
}
