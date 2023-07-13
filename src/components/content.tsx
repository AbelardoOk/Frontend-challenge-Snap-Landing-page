import Image from "next/image"
import { DatabizLogo } from "./clientDatabiz"
import { AudiophileLogo } from "./clientAudiophile"
import { MeetLogo } from "./clientMeet"
import { MakerLogo } from "./clientMaker"

export function MainContent(){
  return(
    <main className="grid grid-cols-2 px-28 pb-24">

      <div>

        <div className="flex flex-col gap-6 mt-[0.3rem]">
          <h1 className="font-bold text-7xl text-neutral-black">Make <br/> remote work</h1>
          <p>Get your team in sync, no matter your location.<br/> Streamline processes, create team rituals, and<br/> watch productivity soar.</p>
          
        </div>

        <button className="mt-6 px-6 py-3 rounded-2xl text-neutral-white bg-neutral-black border-neutral-black border-2 hover:bg-transparent hover:text-neutral-black transition duration-300">Learn more</button>

        <div className="flex flex-row gap-10 mt-[4rem]">
          <DatabizLogo/>
          <AudiophileLogo/>
          <MeetLogo/>
          <MakerLogo/>
        </div>

      </div>


        <Image
        className="h-[75%] w-auto ml-36 mt-[-6rem]"
        src="/image-hero-desktop.png"
        alt="Hero Image"
        width={960}
        height={1280}
        />
      

    </main>
  )
}