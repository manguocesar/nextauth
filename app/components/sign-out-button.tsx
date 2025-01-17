"use client";
import { login, logout } from "@/lib/actions/auth";

export const SignOutButton = () => {
  return <button className="hover:bg-slate-400" onClick={() => logout()}> Sign Out</button>;
};