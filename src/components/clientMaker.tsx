import Image from "next/image"
export function MakerLogo(){
  return(
    <div>
      <Image className="h-auto w-[85%] lg:w-[100%]"
      src="/client-maker.svg" alt="Maker" width="83" height="24" />
    </div>
    )
}
