"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My App 🚀
        </h1>
        <p className="text-gray-600 mb-8">
          A modern web application built with <span className="font-semibold">Next.js</span>.  
          Please sign in if you already have an account, or create a new one to get started!
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/signin">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Sign In
            </button>
          </Link>

          <Link href="/signup">
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
