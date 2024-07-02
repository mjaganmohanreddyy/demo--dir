import { PlusIcon } from "lucide-react"
import Link from "next/link"


export default function Hero({children}){
    return(
        <div className="flex flex-col items-center md:items-start md:px-2 justify-center gap-2 md:ml-12 top-0 py-2 px-5 lg:py-5 ">
        <div className="flex items-center space-x-2">
          <h1 className="text-5xl font-black text-left">LaunchFast Directory</h1>
        </div>
        <div className="flex flex-col items-center md:items-start md:mt-4">
          <p className="mt-2 text-center md:text-left  text-sm md:text-base px-2">
          Explore the tools made by makers, for makers, and add yours 
          </p>
        </div>
        <div className="flex mt-4 mb-4 space-x-4">
          <button className=" border rounded px-2 py-2 bg-slate-500">
            <Link href="/submit" className="flex items-center  text-white">
              <PlusIcon className="size-4 mr-1" /> Submit tool
            </Link>
          </button>
          </div>
        {children}
      </div>
    )
}