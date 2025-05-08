import AboutMeComponent from "@/Components/AboutMeComponent";
import ContactBubblesComponent from "@/Components/ContactBubblesComponent";
import HeroNameComponent from "@/Components/HeroNameComponent";
import ProjectsSectionComponent from "@/Components/ProjectsSectionComponent";





export default function Home() {
  return (

  <div className=" relative min-h-screen min-w-screen flex flex-col overflow-x-hidden">

    <ContactBubblesComponent />

    {/* 1e3a8a   1e293b */}

<div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1e3a8a] via-[#1e293b] to-[#0f172a]">
    <div className="relative w-full h-full overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <span key={i} className="bubble" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * -20}s`,
          width: `${20 + Math.random() * 40}px`,
          height: `${20 + Math.random() * 40}px`,
        }} ></span>
      ))}
    </div>
  </div>

     
    <HeroNameComponent />

  
      <AboutMeComponent />
      
    <ProjectsSectionComponent />

    </div>

  );
}
