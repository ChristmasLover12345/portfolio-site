import HeroNameComponent from "@/Components/HeroNameComponent";





export default function Home() {
  return (

    <div className=" relative min-h-screen min-w-screen  flex flex-col overflow-hidden">

<div className="absolute inset-0 -z-10 bg-blue-950">
    <div className="relative w-full h-full overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <span key={i} className="bubble" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * -10}s`,
          width: `${10 + Math.random() * 20}px`,
          height: `${10 + Math.random() * 20}px`
        }} ></span>
      ))}
    </div>
  </div>

     
    <HeroNameComponent />

  
      
    

    </div>

  );
}
