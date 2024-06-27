
"use client"

import loginbg from "../../assets/images/login-bg.jpg"
import { useState } from "react"
import Input from "@/components/form/input"
import Button from "@/components/form/button"
import GoogleIcon from "../../../public/icons/IconGoogle"
import GitHubIcon from "../../../public/icons/IconGithub"
import Text from "@/components/ui/text/Text"
import PasswordVisibilty from "../../../public/icons/IconPasswordVisibility"
import PasswordVisibiltyOff from "../../../public/icons/IconPasswordVisibilityOff"
import H1 from "@/components/ui/headings/H1"
import ImageWrapper from "@/components/ui/image/image-wrapper"
import IconArrowBack from "../../../public/icons/IconArrowBack.jsx"
import LinkComponent from "@/components/ui/Link"
import H4 from "@/components/ui/headings/H4"
import IconWarranty from "../../../public/icons/IconWarranty"
import Wrapper from "@/components/ui/wrapper/Wrapper"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordShow, setIsPasswordShow] = useState(false)

    return (
        <div className="min-h-screen flex flex-col relative md:flex-row w-full">
            <div className="bg-[url('/image/login-bg.jpg')] h-screen bg-cover bg-center " >

            <div className="w-full relative hidden md:block max-w-[1166px]">
                <ImageWrapper
                    className="h-screen"
                    image={loginbg}
                    alt="Picture of the login background"
                />
                <LinkComponent
                    to="/"
                    withIcon={true}
                    children={<><IconArrowBack className="fill-white" />Back to dashboard</>}
                    className="absolute cursor-pointer flex items-center gap-x-2 text-white top-[40px] left-[40px]"
                >
                </LinkComponent>
                <Text className="text-[15px] absolute left-[40px] bottom-[40px] leading-[22.5px] text-white font-semibold">© 2024 Copyright WorldWatch Market</Text>
            </div>
            <div className="w-full absolute top-0  bg-white lg:w-1/2 flex items-start  md:items-center justify-center">
                <div className="max-w-md w-full py-[18px] px-[20px]">
                    <Wrapper
                        className="flex flex-col justify-center items-center gap-y-[12px]"
                    >
                        <IconWarranty
                            className="w-[41.25px] h-[34.98px]"
                        />
                        <H4
                            as="tag"
                            className="font-semibold mb-10 text-center">Log in to WW/M to continue </H4>
                    </Wrapper>
                    <form action="#" method="POST" className="space-y-3">
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
                        <Text className="text-left text-[#000] text-[14px] cursor-pointer leading-[24px]">Forget Password?</Text>
                        <div>
                            <Button
                                type="type"
                                btnType="solid"
                                color="black"
                                children={"Continue"}
                            />
                        </div>
                    </form>
                    <div className="mt-[12px] text-center flex justify-center gap-x-2">
                        <Text className="text-[#8C8C8C]">Don't have an account? </Text>
                        <Text className="text-black" >Sign up</Text>
                    </div>
                    <div className="my-[40px] flex flex-row gap-[18px]  items-center justify-center text-center">
                        <div className="h-[1.5px] bg-[#DCDAD8]  w-full max-w-[183px]"></div>
                        <Text className="px-4 text-[#808080] text-[15px] leading-[22.5px] font-semibold">OR</Text>
                        <div className="h-[1.5px] bg-[#DCDAD8] w-full max-w-[183px]"></div>
                    </div>
                    <div className="mt-4 flex flex-col gap-y-3  items-center justify-between">
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

        </div>
    )
}
export default Login