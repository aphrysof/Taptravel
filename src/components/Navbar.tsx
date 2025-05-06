import {Button} from "@/components/index";

export default function Navbar() {
    return (
        <nav className={"h-20 max-w-10/12 mx-auto p-4 bg-[#EAF0F0]/30 rounded-xl shadow-lg flex justify-between items-center"}>
            <h1 className={"font-bold text-xl"}>TAPTRAVEL</h1>
            <div className={"inline-flex gap-5"}>
                <Button variant={"ghost"} size={"large"}>Sign in</Button>
                <Button variant={"solid"} size={"large"}>Sign up</Button>
            </div>
        </nav>
    )
}