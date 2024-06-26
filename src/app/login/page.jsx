
"use client"

import loginbg from "../../assets/images/login-bg.jpg"
import { useState } from "react"
import Input from "@/components/form/input"
import Button from "@/components/form/button"
import GoogleIcon from "../../../public/icons/IconGoogle"
import GitHubIcon from "../../../public/icons/IconGithub"
import Text from "@/components/ui/text/text"
import PasswordVisibilty from "../../../public/icons/IconPasswordVisibility"
import PasswordVisibiltyOff from "../../../public/icons/IconPasswordVisibilityOff"
import H1 from "@/components/ui/headings/h1"
import ImageWrapper from "@/components/ui/image/image-wrapper"
import IconArrowBack from "../../../public/icons/IconArrowBack.jsx"
import LinkComponent from "@/components/ui/Link"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordShow, setIsPasswordShow] = useState(false)

    return (
        <div className="min-h-screen flex flex-col md:flex-row w-full">
            <div className="w-full relative hidden md:block max-w-[1166px]">
                <ImageWrapper
                    className="max-h-screen"
                    image={loginbg}
                    alt="Picture of the login background"
                />
                <LinkComponent
                    to="/"
                    children={<><IconArrowBack className="fill-white" />Back to dashboard</>}
                    className="absolute cursor-pointer flex items-center gap-x-2 text-white top-[40px] left-[40px]"
                />
                <Text className="text-[15px] absolute left-[40px] bottom-[40px] leading-[22.5px] text-white font-semibold">© 2024 Copyright WorldWatch Market</Text>

            </div>
            <div className="w-full max-w-[562px] bg-white lg:w-1/2 flex  items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <H1 className="text-[17px] leading-[28px] font-semibold mb-7 text-center">Log in to WW/M to continue </H1>
                    <form action="#" method="POST" className="space-y-4">
                        <div>
                            <Input
                                label="Email adress"
                                name="email"
                                type="email"
                                placeholder="Email adress"
                                required={true}
                                value={email}
                                setInputData={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <Input
                                name="password"
                                type={isPasswordShow ? "password" : "text"}
                                placeholder="Password"
                                required={true}
                                label="Password"
                                value={password}
                                className="relative"
                                setInputData={(e) => setPassword(e.target.value)}
                            />
                            {isPasswordShow ?
                                <PasswordVisibiltyOff
                                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                                    className="absolute cursor-pointer right-[10px] top-[17px]"
                                /> :
                                <PasswordVisibilty
                                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                                    className="absolute cursor-pointer right-[10px] top-[17px]"
                                />}
                        </div>
                        <Text className="text-left cursor-pointer leading-[24px]">Forget Password?</Text>
                        <div>
                            <Button
                                type="type"
                                btnType="solid"
                                color="black"
                                children={"Continue"}
                            />
                        </div>
                    </form>
                    <div className="mt-4 text-black text-center flex justify-center gap-x-2">
                        <Text className="opacity-45">Don't have an account? </Text>
                        <Text>Sign up</Text>
                    </div>
                    <div className="mt-4 flex flex-row items-center justify-center text-center">
                        <div className="h-[1.5px] bg-[#F4F2F0]  w-full max-w-[183px]"></div>
                        <Text className="px-4 text-black opacity-50 font-semibold">OR</Text>
                        <div className="h-[1.5px] bg-[#F4F2F0] w-full max-w-[183px]"></div>
                    </div>
                    <div className="mt-4 flex flex-col gap-y-2  items-center justify-between">
                        <Button
                            children={<div className="flex items-center gap-x-4 justify-center"><GoogleIcon />Continue with Google</div>}
                            btnType="solid"
                            color="light-green"
                        />
                        <Button
                            children={<div className="flex items-center gap-x-4 justify-center"><GitHubIcon /> Continue with Github</div>}
                            btnType="solid"
                            color="light-green"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login