import {FlightSection, Navbar} from "@/components";
import Image from "next/image";

export default function Banner() {

    return (
        <section className={"relative pt-8 pb-20"}>
            <Image
                src="/bg-image.svg"
                alt="Hero"
                fill
                style={{ objectFit: 'cover' }}
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={"relative z-50"}>
                <Navbar />
                <div className={"mt-36 text-center text-[#223A60]"}>
                    <h1 className={"font-bold text-6xl leading-16 tracking-normal"}>
                        Your next adventure? Just a tap away.
                    </h1>
                    <p className={"text-lg mt-4"}>
                        TapTravel is your always on travel partner blending smart planning with local gems, so you spend less time stressing and more time exploring. <br/>
                        It&#39;s like having a friend who knows every hidden spot and makes sure you never overpay.
                    </p>
                </div>
                <div className={"mt-20"}>
                    <FlightSection />
                </div>
            </div>

        </section>
    )
}