"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";

function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <div>
        <p>Please sign in to view your profile.</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-0 px-0 flex flex-col justify-center items-center">
      <Head>
        <title>User Profile</title>
      </Head>
      <h1>Your Profile</h1>
      <p>Welcome, {session.user.name}</p>
      <div>
        <img
          src={session.user.image}
          alt="Profile Picture"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <p>Email: {session.user.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}

export default UserProfile;
