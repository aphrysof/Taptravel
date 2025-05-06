import {Navbar} from "@/components";

export default function Banner() {
    return (
        <div className={"cover-image py-8"}>
            <Navbar />
                <div className={"mt-36 text-center text-[#223A60]"}>
                <h1 className={"font-bold text-6xl leading-16 tracking-normal"}>
                    Your next adventure? Just a tap away.
                </h1>
                <p className={"text-lg mt-4"}>
                    TapTravel is your always-on travel partner mixing local secrets with seamless planning,
                    so you spend less time stressing and more time wandering.<br/>
                    Think of us as the friend who always knows the best spots (and never lets you overpay).
                </p>
            </div>
        </div>
    )
}