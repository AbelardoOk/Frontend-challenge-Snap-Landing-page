import Image from "next/image"
import { DatabizLogo } from "./clientDatabiz"
import { AudiophileLogo } from "./clientAudiophile"
import { MeetLogo } from "./clientMeet"
import { MakerLogo } from "./clientMaker"

export function MainContent(){
  return(
    <main className="grid grid-cols-2 px-28 py-6">

      <div>

        <div className="flex flex-col gap-12 mt-16">
          <h1 className="font-bold text-7xl text-neutral-black">Make <br/> remote work</h1>
          <p>Get your team in sync, no matter your location.<br/> Streamline processes, create team rituals, and<br/> watch productivity soar.</p>
          
        </div>

        <button className="mt-12 px-6 py-3 rounded-2xl text-neutral-white bg-neutral-black border-neutral-black border-2 hover:bg-transparent hover:text-neutral-black transition duration-300">Learn more</button>

        <div className="flex flex-row gap-12 mt-20">
          <DatabizLogo/>
          <AudiophileLogo/>
          <MeetLogo/>
          <MakerLogo/>
        </div>

      </div>


        <Image
        className="h-4/6 w-auto ml-36"
        src="/image-hero-desktop.png"
        alt="Hero Image"
        width={960}
        height={1280}
        />
      

    </main>
  )
}