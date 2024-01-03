'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImRadioChecked2, ImRadioUnchecked } from "react-icons/im";
import { IoBarbellOutline, IoCard, IoCardOutline, IoCloseCircle, IoCloseCircleSharp, IoLocationOutline, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";


export default function Card() {
    const [selectedTheme, setSelectedTheme] = useState('')
    const [availableThemesList, setAvailableThemesList] = useState([''])
    const [open, setOpen] = useState(false);
    const [openAnimation, setOpenAnimation] = useState(false);
    const [skill, setSkill] = useState([])
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0,
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
        setOpenAnimation(!openAnimation)
        setTimeout(() => {
            setOpen(!open)
            setSkill(skills)
        }, 200);
    }

    const skillFrontEnd = [
        {
            "name": "next",
            "title": "Next.JS"
        }, {
            "name": "react",
            "title": "React.JS"
        }, {
            "name": "javascript",
            "title": "Javascript"
        }, {
            "name": "tailwind",
            "title": "Tailwind"
        }, {
            "name": "figma",
            "title": "Figma"
        }, {
            "name": "inkscape",
            "title": "Inkscape"
        },
    ]

    const skillBackEnd = [
        {
            "name": "next",
            "title": "Next.JS"
        }, 
    ]


    return (
        <>

            <div className="md:mt-[20%] lg:mt-0">
                <div className="flex flex-col gap-5 items-center justify-center w-full min-h-screen absolute z-50 md:-mt-40 lg:md:-mt-0">
                    {open &&
                        <div onMouseLeave={handleOpen} className={`${openAnimation ? "animate-jump-in" : "animate-jump-out animate-duration-250"}  absolute z-[70] w-3/4 lg:w-1/2 card-glass justify-center items-center text-center rounded-2xl shadow-2xl`}>
                            <span onClick={handleOpen} className="z-[60] absolute right-0 px-2 py-1 text-2xl text-gray-800"><IoCloseCircleSharp /></span>
                            <div className="flex flex-wrap max-w-screen-md mx-auto gap-1">
                                {skill?.map((data, idx) => (
                                    <div key={idx} className="flex flex-col h-36 w-full md:w-1/6 items-center mx-auto relative p-4">
                                        <img src={`images/skill/${data.name}.png`} className="w-20 h-24  object-contain my-auto" alt="" />
                                        <span className="text-lg bottom-0 text-white font-semibold">{data.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }


                    <div className="flex shadow-2xl  items-center w-3/4 lg:w-1/2 rounded-2xl card-glass">
                        <div>

                            <Image
                                src={`https://avatars.githubusercontent.com/u/70558897?v=4`}
                                width={0}
                                height={0}
                                alt="middle"
                                sizes="100vw"
                                style={{ width: '105%', height: '150%' }}
                                className=""
                            />
                        </div>
                        <div className="flex flex-col ml-5 text-white">
                            <span className="text-2xl"><IoCardOutline className="inline-flex" /> Rajyavardhan Bithale</span>
                            <span className="text-2xl"><IoLocationOutline className="inline-flex" /> Raipur | IN</span>
                            <span className="text-2xl"><IoMailOutline className="inline-flex" /> bithale02@gmail.com </span>
                            <span className="text-2xl my-2">
                                <IoBarbellOutline className="inline-flex mr-1" />
                                What do I know ?
                                <ul>
                                    <li className="text-xl px-5 py-0.5 text-gray-50">+ Backend Development</li>
                                    <li onMouseEnter={() => handleOpen(skillFrontEnd)} className="text-lg px-5 py-0.5 text-gray-100">+ Full Stack Web Development</li>
                                    <li className="text-lg px-5 py-0.5 text-gray-100">+ Cloud</li>
                                    <li className="text-xl px-5 py-0.5 text-gray-50">+ Linux</li>
                                    <li className="text-lg px-5 py-0.5 text-gray-100">+ ML/DL*</li>
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
                    </div>
                </div>


                <div className="flex flex-col gap-5 items-start p-4 justify-center  min-h-screen absolute z-50 -mt-36 lg:-mt-0">
                    <ImRadioUnchecked className="text-white lg:text-2xl text-lg font-bold" />
                    <ImRadioChecked2 className="text-white lg:text-2xl text-lg font-bold" />
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
            <div className="flex justify-center  items-center h-screen md:-mt-36 lg:-mt-0">
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


function PopUP() {
    const skillFrontEnd = [
        {
            "name": "next",
            "title": "Next.JS"
        }, {
            "name": "react",
            "title": "React.JS"
        }, {
            "name": "javascript",
            "title": "Javascript"
        }, {
            "name": "tailwind",
            "title": "Tailwind CSS"
        },
    ]
    const handleClose = () => {

    }
    return (
        <>
            <div className="absolute z-50 w-3/4 card-glass justify-center items-center text-center rounded-2xl shadow-2xl">
                <span onClick={handleClose} className="absolute right-0 px-2 py-1 text-2xl text-gray-800"><IoCloseCircleSharp /></span>
                <div className="flex gap-5">
                    {skillFrontEnd.map((data, idx) => (
                        <div key={idx} className="flex flex-col h-36 w-full items-center mx-auto relative p-4 ">
                            <img src={`images/skill/${data.name}.png`} className="w-20 h-24  object-contain my-auto" alt="" />
                            <span className="text-lg bottom-0 text-white font-semibold">{data.title}</span>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}