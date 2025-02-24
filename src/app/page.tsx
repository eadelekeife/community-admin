import { Input } from "antd";
import { useState } from "react";


export default function Home() {
  const [loadingButton, setLoadingButton] = useState(false);
  const handleSignIn = () => {
    setLoadingButton(true)
    setTimeout(() => {
      setLoadingButton(false)
    }, 3000)
  }
  return (
    <div className="flex h-screen items-center justify-center flex-col px-5 md:px-0">
      <div className="border-2 border-solid md:w-[30%] p-5 bg-white rounded-xl">
        <form action="">
          <h4 className="text-xl mb-5">Sign in to continue</h4>
          <div className="form-group mb-5">
            <label htmlFor="" className="text-sm mb-2">Email address</label>
            <Input className="py-4 text-sm" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-sm mb-2">Password</label>
            <Input className="py-4 text-sm" />
          </div>
          <button onClick={handleSignIn} className="bg-accent rounded-lg text-sm block mt-5 text-white py-4 w-full">
            {
              loadingButton ? "Sign In" : "Loading"
            }
          </button>
        </form>
      </div>
    </div>
  )
}
