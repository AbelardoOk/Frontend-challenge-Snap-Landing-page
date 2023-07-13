import Image from "next/image"
export function DatabizLogo(){
  return(
    <div>
      <Image className="h-auto w-[85%] lg:w-[100%]"
      src="/client-databiz.svg" alt="Databiz" width={114} height={20} />
    </div>
    ) 
}