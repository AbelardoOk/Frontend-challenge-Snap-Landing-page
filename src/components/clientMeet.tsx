import Image from "next/image"
export function MeetLogo(){
  return(
    <div>
      <Image className="h-auto w-[85%] lg:w-[100%]"
       src="/client-meet.svg" alt="Meet" width={90} height={20} />
    </div>
    )
}