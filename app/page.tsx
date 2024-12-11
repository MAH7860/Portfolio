import Hero from "@/components/Hero";
import { Approach } from "@/components/ui/Approach";


import Experience from "@/components/ui/Experience";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Footer } from "@/components/ui/Footer";

import Grid from "@/components/ui/Grid";
import  RecentProjects from "@/components/ui/RecentProjects";



import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
  <FloatingNav navItems={navItems} />
<Hero />
<Grid/>
<RecentProjects /> 

<Experience />
<Approach />
<Footer />
  </div>
</main>
  );
}
