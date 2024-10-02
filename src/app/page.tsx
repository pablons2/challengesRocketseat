import Link from "next/link";

export default function Home() {
    return <div className="text-3xl font-bold w-screen h-screen flex justify-between items-center gap-4 flex-col"> 
    <header className="h-[6rem] bg-purple-800 w-screen text-gray-300 flex justify-center items-center rounded-bl-[20rem] rounded-br-[20rem]"><h1>Desafios:</h1></header>
    <nav className="h-full w-screen  items-stretch p-4 ">
    <nav className="flex flex-col text-purple-800   items-center justify-center border-2 border-gray-700 w-full h-full rounded-[5rem] ">
        <Link href="/todolist" className="transform transition-transform duration-200 hover:scale-110">todolist</Link>
    </nav>
       
    </nav>
    </div>;
}