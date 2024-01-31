
export default function Loader() {
    
    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center align-middle items-center">

                <div className="lds-ripple scale-110">
                    <div></div>
                    <div></div>
                </div>
                <span className=" mt-5 text-xl">Hola! Loading .. </span>
            </div>
        </>
    )
}