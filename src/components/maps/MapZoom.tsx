import Link from "next/link";
import Image from "next/image";

interface Props {
    zoomsize: string;
    position: string;
    iconUrl: string;
    title: string;
    content: string;
}

export default function MapZoom({
    zoomsize,
    position,
    iconUrl,
    title,
    content,
} : Props) {
    return (
        <div className={`h-[900px]
            bg-[url(/map-zoom.png)] bg-no-repeat bg-size-[${zoomsize}] 
            bg-position-[${position}]`}>

                <div className="h-[900px] bg-linear-to-b from-transparent from-0% to-[#35303f] to-80% 
                flex justify-center-safe">

                    <div className="w-[55%] absolute bottom-[45%]">
                        <div className=" tracking-[3px] flex py-5 px-10
                            w-50% border border-white
                        bg-[#23cfd0]/70 rounded-t-4xl">
                            <Image
                                src={`/icon/${iconUrl}.png`}
                                alt="Icon Stage"
                                width={60}
                                height={60}
                            />
                            <div className="flex-1 text-center uppercase text-4xl">{title}</div>
                        </div>
                        <div className="text-center text-xl py-5 px-15
                        bg-gray-200/80 text-gray-950 rounded-b-4xl">
                            {content}
                        </div>
                        <div className="flex justify-center mt-5">
                            <Link href={'/map'}>
                                <Image
                                    src="/btn-close.png"
                                    alt="Button Close"
                                    width={60}
                                    height={60}
                                />
                            </Link>
                        </div>
                        
                    </div>
                    
                </div>
            
        </div>
    )
}