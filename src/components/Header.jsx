'use client'
import { format } from "date-fns";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Header() {
//   await connection();

  const today = format(new Date(), "EEEE, MMMM dd, yyyy");
// const today="Saturday,December 16,2026"

  return (
    <div className="flex flex-col items-center space-y-1 p-3">
      <Image src={logo} width={300} height={200} alt="Logo" />
      <p className="text-gray-800">Journalism Without Fear or Favour</p>
      <h2 className="text-lg text-gray-600">{today}</h2>
    </div>
  );
}