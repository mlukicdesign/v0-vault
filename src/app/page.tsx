import Cardarea from "@/components/PasswordsCard";
import PasswordsCard from "@/components/PasswordsCard";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex-1 grid grid-cols-2 gap-6 p-6">
        <PasswordsCard/>
    </main>
    </>
  );
}
