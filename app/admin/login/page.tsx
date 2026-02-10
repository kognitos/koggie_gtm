"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--kognitos-black)]">
      <div className="w-full max-w-sm mx-4">
        <div className="bg-[var(--kognitos-gray-900)] border border-[var(--kognitos-gray-700)] rounded-2xl p-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[var(--kognitos-gray-800)] flex items-center justify-center mx-auto mb-6">
            <svg
              fill="none"
              height="28"
              viewBox="-30 0 512 320"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m391.986 130.171v-38.341c0-2.946-2.385-5.331-5.331-5.331h-171.336c-2.946 0-5.331 2.385-5.331 5.331v38.341c0 2.945-2.385 5.331-5.33 5.331h-24.341c-2.945 0-5.331-2.386-5.331-5.331v-38.341c0-2.946-2.385-5.331-5.33-5.331h-164.3253c-2.9455 0-5.3307 2.385-5.3307 5.331v87.338c0 2.945 2.3852 5.33 5.3307 5.33h45.3414c2.9455 0 5.3307 2.386 5.3307 5.331v38.341c0 2.946 2.3852 5.331 5.3307 5.331h171.3365c2.945 0 5.331-2.385 5.331-5.331v-38.341c0-2.945 2.385-5.331 5.33-5.331h24.341c2.945 0 5.33 2.386 5.33 5.331v38.341c0 2.946 2.386 5.331 5.331 5.331h164.336c2.946 0 5.331-2.385 5.331-5.331v-87.343c0-2.946-2.385-5.331-5.331-5.331h-45.341c-2.946 0-5.331-2.385-5.331-5.331z"
                fill="#f2fb90"
              />
            </svg>
          </div>

          <h1 className="text-xl font-semibold text-[var(--kognitos-white)] mb-2">
            Knox Admin
          </h1>
          <p className="text-sm text-[var(--kognitos-gray-400)] mb-8">
            Sign in with your Kognitos account to view chat conversations.
          </p>

          {error && (
            <div className="mb-6 p-3 bg-red-900/20 border border-red-800/50 rounded-lg">
              <p className="text-sm text-red-400">
                {error === "AccessDenied"
                  ? "Access denied. Only @kognitos.com emails are allowed."
                  : "An error occurred. Please try again."}
              </p>
            </div>
          )}

          <button
            onClick={() => signIn("google", { callbackUrl: "/admin" })}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[var(--kognitos-white)] text-[var(--kognitos-black)] font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
              <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.166 6.656 3.58 9 3.58Z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[var(--kognitos-black)]">
          <div className="text-[var(--kognitos-gray-400)]">Loading...</div>
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
