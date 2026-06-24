"use client";

import { useSession, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="mb-4 text-red-500">
        Not Logged In
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="text-green-600 font-medium">
        Welcome, {session.user?.name}
      </span>

      <button
        onClick={() => {signOut({
  callbackUrl: "/login",
});}}
        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}