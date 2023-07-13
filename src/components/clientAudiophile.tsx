import Image from "next/image"
export function AudiophileLogo(){
  return(
    <div>
      <Image className="h-auto w-[90%] lg:w-[100%]"
      src="/client-audiophile.svg" alt="Audiophile" width={73} height={36} />
    </div>
   )
}