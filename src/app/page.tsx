import HeroNameComponent from "@/Components/HeroNameComponent";





export default function Home() {
  return (

    <div className=" relative min-h-screen min-w-screen  flex flex-col overflow-hidden">

<div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a]">
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

  
      
    

    </div>

  );
}
