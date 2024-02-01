'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImRadioChecked2, ImRadioUnchecked } from "react-icons/im";
import { IoBarbellOutline, IoCardOutline, IoCloseCircleSharp, IoLocationOutline, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

import { skillBackEnd, skillFrontEnd, skillCloud, skillLinux, skillML } from "./skills";
import { createSession, randomKey, readSession } from "@/hooks/useManageSessions";

export default function Card() {
    const [selectedTheme, setSelectedTheme] = useState('')
    const [availableThemesList, setAvailableThemesList] = useState([''])
    const [open, setOpen] = useState(false);
    const [openAnimation, setOpenAnimation] = useState(false);
    const [skill, setSkill] = useState([])

    const [hoverState, setHoverState] = useState(true)
    const hoverKey = process.env.NEXT_PUBLIC_HOVER_KEY ? parseInt(process.env.NEXT_PUBLIC_HOVER_KEY, 10) : 8
    const hoverSession = readSession("hover")

    useEffect(() => {
        setHoverState(hoverKey && hoverSession?.length === hoverKey ? true : false)
    }, [hoverState, setHoverState])

    const [screenSize, setScreenSize] = useState({
        width: (typeof window !== 'undefined' ? window.innerWidth : 0),
        height: (typeof window !== 'undefined' ? window.innerHeight : 0),
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
            availableThemes = ['road_mobile', 'beach_mobile', 'desert_mobile'];
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
    }


    const handleOpen = (skills: any) => {
        setOpenAnimation(true)
        setOpen(true)
        setSkill(skills)

    }
    const handleClose = () => {
        setOpenAnimation(false)
        setTimeout(() => {
            setOpen(!false)
        }, 200);
    }

   
    const handleHover = () => {
        createSession("hover", randomKey(hoverKey))
        setHoverState(false)
    }


    return (
        <>

            <div className="md:mt-[20%] lg:mt-0">
                <div className=" flex flex-col gap-5 items-center justify-center w-full min-h-screen absolute z-50 md:-mt-40 lg:md:-mt-0">
                    {open &&
                        <div onMouseLeave={handleClose} className={`${openAnimation ? "animate-jump-in animate-duration-1000" : "animate-jump-out animate-duration-250"}  absolute z-[70] w-3/4 lg:w-1/2 skill-card-glass justify-center items-center text-center rounded-2xl shadow-2xl`}>
                            <span onClick={handleClose} className="z-[60] absolute right-0 px-2 py-1 text-2xl text-gray-800"><IoCloseCircleSharp /></span>
                            <div className="flex flex-wrap max-w-screen-md mx-auto gap-1">
                                {skill?.map((data: any, idx) => (
                                    <div key={idx} className="flex flex-col h-36 w-full md:w-1/6 items-center mx-auto relative p-4">
                                        <img src={`images/skill/${data?.name}.png`} className="w-20 h-24  object-contain my-auto drop-shadow-2xl" alt="" />
                                        <span className="text-lg bottom-0 text-white font-semibold">{data.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }


                    <div className="animate-fade-up flex shadow-2xl  items-center w-3/4 lg:w-1/2 rounded-2xl card-glass">
                        <div className="">

                            <Image
                                src={`https://avatars.githubusercontent.com/u/70558897?v=4`}
                                width={0}
                                height={0}
                                alt="middle"
                                sizes={`${selectedTheme === 'road_mobile' ? "91vw" : "100vw"}`}
                                style={{ width: '105%', height: '150%' }}
                                className=""
                            />
                        </div>
                        <div className="flex flex-col ml-5 text-white">
                            <span className="text-xl py-1"><IoCardOutline className="inline-flex" /> Rajyavardhan Bithale</span>
                            <span className="text-xl py-1"><IoLocationOutline className="inline-flex" /> Raipur | IN</span>
                            <span className="text-xl py-1"><IoMailOutline className="inline-flex" /> bithale02@gmail.com </span>
                            <span className="text-xl my-2">
                                <IoBarbellOutline className="inline-flex mr-1" />
                                What do I know ?
                                <ul>
                                    <li onMouseOver={() => handleOpen(skillBackEnd)} className="text-xl px-5 py-0.5 text-gray-50">+ Back-end</li>
                                    <li onMouseOver={() => handleOpen(skillFrontEnd)} className="text-lg px-5 py-0.5 text-gray-100">+ Front-end</li>
                                    <li onMouseOver={() => handleOpen(skillCloud)} className="text-lg px-5 py-0.5 text-gray-100 w-1/2">+ Cloud</li>
                                    <li onMouseOver={() => handleOpen(skillLinux)} className="text-xl px-5 py-0.5 text-gray-50 w-1/2">+ Linux</li>
                                    <li onMouseOver={() => handleOpen(skillML)} className="text-lg px-5 py-0.5 text-gray-100 w-1/2">+ ML/DL*</li>
                                </ul>
                            </span>



                            <div className="absolute bottom-3 right-3">
                                <span className="text-3xl">
                                    <a href="https://www.linkedin.com/in/rajyavardhan-bithale-999482258/">
                                        <IoLogoLinkedin className="inline-flex mr-1" />

                                    </a>
                                </span>
                                <span className="text-3xl">
                                    <a href="https://github.com/rajyavardhanbithale">
                                        <IoLogoGithub className="inline-flex mr-1" />

                                    </a>
                                </span>
                                <span className="text-3xl">
                                    <a href="https://www.instagram.com/rajyavardhan.8/">
                                        <IoLogoInstagram className="inline-flex mr-1" />

                                    </a>
                                </span>
                            </div>
                        </div>

                        {hoverState &&
                            <div >
                                <img onClick={handleHover} src="images/card_hover_help.png" className="absolute w-[14%] right-28 top-40 opacity-50 lg:right-36 lg:top-48" />
                                <span onClick={handleHover} className="absolute text-xl text-white underline right-12 lg:right-20 top-[13.3rem] lg:top-[16.8rem] opacity-80 animate-pulse">Hover</span>
                            </div>
                        }

                    </div>
                </div>


                <div className="flex flex-col gap-5 items-start p-4 justify-center  min-h-screen absolute z-50 -mt-36 lg:-mt-0">
                    <Link href={"/"}>
                        <ImRadioUnchecked className="text-white lg:text-2xl text-lg font-bold" />

                    </Link>
                    <ImRadioChecked2 className="animate-fade text-white lg:text-2xl text-lg font-bold" />
                    <ImRadioUnchecked className="text-white lg:text-2xl text-lg font-bold" />
                    <ImRadioUnchecked className="text-white lg:text-2xl text-lg font-bold" />

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
                <Image
                    src={`/images/${selectedTheme}/background.webp`}
                    width={0}
                    height={0}
                    alt="outer"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    priority={true}
                />
            </div>


        </>
    )
}

