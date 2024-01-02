import { IoPaperPlane } from "react-icons/io5";
import { Major_Mono_Display } from 'next/font/google';


const MMD = Major_Mono_Display({
  subsets: ['latin'], variable: '--font-Exo2',
  weight: ["400"]
})

export default function Home() {


  return (
    <>
      <div className="flex w-full justify-center items-center align-middle">
        <nav className=" text-white p-4 fixed top-2 w-3/4 z-50 nav-glass rounded-full ">
          <div className="container mx-auto flex justify-between items-center">
            <div className={`text-xl font-bold logo-brand ${MMD.className}`}>rAjyAvArdhAn</div>

            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="flex flex-col gap-5 items-center justify-center w-full min-h-screen absolute z-50">
        <div className="text-5xl text-name  text-white">I&apos;m</div>
        <div className="content">
          <span className="text-6xl font-semibold text-name text-white">Rajyavardhan Bithale</span>
        </div>
        {/* <IonIcon icon={paperPlane} className="text-5xl text-white absolute animate-wiggle-more animate-infinite"></IonIcon>     */}
        <IoPaperPlane className="text-5xl text-white absolute animate-wiggle-more animate-infinite" />

      </div>

      <div className="flex items-center z-0 justify-center w-full lg:min-h-screen">
        <img src="images/inner_layer.png" className="absolute w-[23%] z-40 spinning-object1" />
        <img src="images/middle_layer.png" className="absolute w-[37%] z-30 spinning-object2" />
        <img src="images/outer_layer.png" className="absolute w-[47%] z-10  spinning-object3" />
        <img src="images/background.jpg" className="" />
      </div>
    </>
  )
}
