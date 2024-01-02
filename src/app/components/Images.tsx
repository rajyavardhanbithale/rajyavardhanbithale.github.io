import Image from "next/image";

interface ImagesProps {
  theme: string;
}

export default function Images(props: ImagesProps) {
  return (
    <>
      {/* <img src={`images/${props.theme}/inner.webp`} className="absolute w-[30%] z-40 spinning-object1 " />
      <img src={`images/${props.theme}/middle.webp`} className="absolute w-[43%] z-30 spinning-object2 " />
      <img src={`images/${props.theme}/outer.webp`} className="absolute w-[53%] z-10  spinning-object3 " /> */}
      {/* <img src={`images/${props.theme}/background.webp`} className="" /> */}

      {/* <Image src={`/images/${props.theme}/background.webp`} height={100} width={200}></Image> */}

      {/* <Image src={`/images/${props.theme}/background.webp`} height={100} width={200}></Image> */}

      <Image
        src={`/images/${props.theme}/inner.webp`}
        width={0}
        height={0}
        alt="inner"
        sizes="100vw"
        style={{ width: '30%', height: 'auto' }}
        className="absolute z-40 spinning-object1"
        priority
      />

      <Image
        src={`/images/${props.theme}/middle.webp`}
        width={0}
        height={0}
        alt="middle"
        sizes="100vw"
        style={{ width: '43%', height: 'auto' }}
        className="absolute z-30 spinning-object2"
        priority
      />

      <Image
        src={`/images/${props.theme}/outer.webp`}
        width={0}
        height={0}
        alt="outer"
        sizes="100vw"
        style={{ width: '53%', height: 'auto' }}
        className="absolute z-10 spinning-object3"
        priority
      />

      <Image
        src={`/images/${props.theme}/background.webp`}
        width={0}
        height={0}
        alt="outer"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        priority
      />
    </>
  )
}
