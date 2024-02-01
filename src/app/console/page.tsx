'use client'
import { Source_Code_Pro } from 'next/font/google'
import { useEffect, useRef, useState } from "react";

interface Dictionary {
    [key: string]: string;
}

const SSP = Source_Code_Pro({
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Console() {
    const [dictArray, setDictArray] = useState<Dictionary[]>([]);
    const [inputKey, setInputKey] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Focus on the input element when the component mounts
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);


    const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputKey(event.target.value);
    };

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            appendDict();
        }
    };

    const appendDict = () => {
        if (inputKey.trim() !== '') {
            let newValue: any = inputValue;

            // Check if the inputKey is "help" and set a specific value
            if (inputKey.toLowerCase() === 'help') {
                newValue = ['cd - change directory',
                    'ls - list file/folder',
                    'open [PROJECT] - open the project '];
            }

            if (inputKey.toLowerCase() === 'ls') {
                newValue = ['agrihelp', 'RAGE OS',];
            }

            if (inputKey.toLowerCase() === 'll') {
                newValue = ['project 0 rajyavardhan github  4096 Nov 7 23  Agrihelp',
                            'project 1 rajyavardhan github  4096 Oct 1 22  RAGE OS'];
            }
            

            const newDict: Dictionary = { key: inputKey, value: newValue };
            setDictArray((prevDictArray) => [...prevDictArray, newDict]);
            setInputKey(''); // Clear the inputKey after appending
            setInputValue(''); // Clear the inputValue after appending

            if (inputKey.toLowerCase() === 'clear') {
                setDictArray('')
            }
        }
    };

    const returnColor = (command: string) => {
        let color;
        console.log(command);
        
        switch (command) {
            case "ls":
                color = "#72C4EE"
                break;

            case "ll":
                color = "#9DE2EE"
                break;

            default:
                color = "#CDCDF6"
                break;
        }

        return color;
    }

    
    
    return (
        <>
            <div className="absolute h-screen w-full bg-[#201A2E] -z-50"></div>
            <div className={`mt-24 ml-5 z-10 ${SSP.className}`}>
                <div>
                    {dictArray && dictArray.map((dict, index) => (
                        <div key={index} className="my-2">
                            <div className="flex gap-4">
                                <TerminalHost />
                                <span className=" text-[#FDB0E6] font-bold text-xl">{dict.key} </span>

                            </div>

                            {typeof dict.value === "object" ? (
                                <div className="my-2">
                                    {(dict.value as any[]).map((value, index) => (
                                        <div>
                                            <span
                                                className={`font-semibold text-xl`}
                                                key={index}
                                                style={{ color: `${returnColor(dict.key)}` }}
                                            >
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    <span className="text-[#CDCDF6] font-semibold text-xl">
                                        {dict.value}
                                    </span>
                                </div>
                            )}


                        </div>
                    ))}
                </div>
                <div className="py-2 flex gap-2">
                    <TerminalHost />
                    <input
                        type="text"
                        value={inputKey}
                        onChange={handleKeyChange}
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                        className="bg-transparent outline-none text-[#FDB0E6] font-semibold text-xl"
                    />
                </div>

            </div>


        </>
    )
}


function TerminalHost() {
    return (
        <>
            <div className="font-bold text-xl tracking-wide">
                <span className="text-[#009FB7]">dev</span>
                <span className="text-[#FB7AA6]">@</span>
                <span className="text-[#91A7FC]">rajyavardhan.bithale:$ ~ </span>

            </div>
        </>
    )
}