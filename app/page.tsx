'use client'

import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Home() {

  const router = useRouter()

  return (
    <div>
      <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
        <h1 className="text-3xl font-bold">Welcome to Dropbox. <br />
          <br />
          Storing Everthing for you and your business needs. All in one Place
        </h1>
        <p className="pb-10">
          Enhance your personal space with Dropbox, offering a simple and
          efficient way to upload, organize and access files from anywhere.
          Securely store important documents and media, and experience the
          convience of easy file management and sharing in one centeralized
          solution.
        </p>
        <h1 onClick={() => router.push('/dashboard')} className="flex cursor-pointer bg-blue-500 p-5 w-fit">
          Try it for free!  <ArrowRight className="ml-10" />
        </h1>
      </div>
    </div>
  )
}
