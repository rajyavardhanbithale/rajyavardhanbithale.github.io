'use client'
import { ImRadioChecked2, ImRadioUnchecked } from "react-icons/im";
import { Major_Mono_Display } from 'next/font/google';
import { useEffect, useState } from "react";
import Images from "./components/Images";



const MMD = Major_Mono_Display({
  subsets: ['latin'], variable: '--font-Exo2',
  weight: ["400"]
})

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState('')
  const [availableThemesList, setAvailableThemesList] = useState([''])
  const [seed, setSeed] = useState(1);
  const [screenSize, setScreenSize] = useState({
    width:0,
    height:0,
  });


  // window height and width to filter out theme for mobile and desktop
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let availableThemes: string[];
  
  // updating the theme list base of the device width
  useEffect(() => {
    if (screenSize?.width <= 1024) {
      availableThemes = ['road_mobile','beach_mobile','desert_mobile'];
    } else {
      availableThemes = ['forest', 'desert', 'beach', 'ocean'];
    }
    setSelectedTheme(availableThemes[0])
    setAvailableThemesList(availableThemes)
  }, [screenSize]);

  
  // setting theme configuration
  const theme: string = selectedTheme
  const themeCount: number = availableThemesList?.length
  const themeActive: number = availableThemesList?.indexOf(theme)


  // handle the theme change using the bottom button
  const handleThemeUpdate = (themeIndex: number) => {
    setSelectedTheme(availableThemesList[themeIndex])
    setSeed(Math.random());
  }



  return (
    <>


      <div className="md:mt-[20%] lg:mt-0">
        <div className="flex flex-col gap-5 items-center justify-center w-full min-h-screen absolute z-50 md:-mt-40 lg:md:-mt-0">
          <div className="text-center animate-jump-in animate-delay-[2500ms]">
            <div className="lg:text-4xl text-3xl text-name  text-white">Hello, I&apos;m</div>
            <span className="lg:text-6xl text-4xl font-semibold text-name tracking-wider text-white">Rajyavardhan Bithale</span>
            <div className="w-full h-0.5 bg-white rounded-full mt-3 animate-fade-right animate-delay-[3500ms]"></div>
          </div>

        </div>

        <div className="flex flex-col gap-5 items-start p-4 justify-center w-full min-h-screen absolute z-50 -mt-36 lg:-mt-0">
          <ImRadioChecked2 className="text-white lg:text-2xl text-lg font-bold" />
          <ImRadioUnchecked className="text-white lg:text-2xl text-lg font-bold" />
          <ImRadioUnchecked className="text-white lg:text-2xl text-lg font-bold" />
          <ImRadioUnchecked className="text-white lg:text-2xl text-lg font-bold" />
          <div>
            <img src="images/help_arrow.png" className="absolute w-[5%] left-[4.5%] top-[43%] lg:w-[5%] lg:left-[2.5%] lg:top-[39%] animate-pulse" />
            <span className="text-base tracking-tighter lg:tracking-tighter lg:text-2xl text-white absolute left-[10%] top-[41%] underline lg:left-[8%] lg:top-[36%] drop-shadow-2xl">Click Here To Navigate</span>
          </div>
        </div>

        <div className="flex flex-row gap-5 items-end p-8 justify-center w-full bottom-0 absolute z-50 -mt-[23rem] lg:-mt-0">

          {[...Array(themeCount)].map((_, index) => (
            <div
              onClick={() => handleThemeUpdate(index)}
              key={index}
              className={`h-2 w-10 rounded-full bg-white ${index === themeActive ? "opacity-100" : "opacity-60"} hover:opacity-100 transition duration-500 cursor-pointer`}></div>

          ))}
        </div>


      </div>
      <div className="flex justify-center  items-center h-screen md:-mt-48 lg:-mt-0">
        <Images theme={selectedTheme} key={seed}></Images>
      </div>


    </>
  )
}

