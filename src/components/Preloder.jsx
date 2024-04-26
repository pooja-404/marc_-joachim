import { Logo } from "./common/Icons";

export default function Preloder() {
    return (
        <div class='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
            <Logo />
            <span class='sr-only'>Loading...</span>
            <div class='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div class='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div class='h-4 w-4 bg-black rounded-full animate-bounce'></div>
        </div>
    )
}