import Cardarea from "@/components/PasswordsCard";
import PasswordsCard from "@/components/PasswordsCard";
import GeneratorCard from "@/components/GeneratorCard";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 grid grid-cols-3 gap-6 p-6 h-full">
        <PasswordsCard />
        <GeneratorCard />
      </main>
    </>
  );
}
