import Image from "next/image"
import { DatabizLogo } from "./clientDatabiz"
import { AudiophileLogo } from "./clientAudiophile"
import { MeetLogo } from "./clientMeet"
import { MakerLogo } from "./clientMaker"

export function MainContentMobile(){
  return(
    <main className="flex flex-col mt-[3%] text-sm text-center">

      <Image
        className="h-auto w-screen"
        src="/image-hero-mobile.png"
        alt="Hero Image"
        width={750}
        height={564}
      />

      <div>

        <div className="flex flex-col gap-4 py-8 px-3">
          <h1 className="font-bold text-3xl text-neutral-black">Make remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          
        </div>

        <button className="px-5 py-2 rounded-xl text-neutral-white bg-neutral-black border-neutral-black border-2 hover:bg-transparent hover:text-neutral-black transition duration-300">Learn more</button>

        <div className="pt-[15%] px-3 flex justify-center items-center flex-row gap-4">
          <DatabizLogo/>
          <AudiophileLogo/>
          <MeetLogo/>
          <MakerLogo/>
        </div>

      </div>
      

    </main>
  )
}