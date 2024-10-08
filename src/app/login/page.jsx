

import loginbg from "../../assets/images/login-bg.jpg"
import Button from "@/components/form/button"
import GoogleIcon from "../../../public/icons/IconGoogle"
import GitHubIcon from "../../../public/icons/IconGithub"
import Text from "@/components/ui/text/text"
import ImageWrapper from "@/components/ui/image/image-wrapper"
import IconArrowBack from "../../../public/icons/IconArrowBack.jsx"
import LinkComponent from "@/components/ui/Link"
import H4 from "@/components/ui/headings/h4"
import Wrapper from "@/components/ui/wrapper/wrapper"
import Image from "next/image"
import LoginForm from "@/sections/LoginForm"

export const metadata = {
    title: "Login - WWM",
    description: "Generated by create next app",
  };

const Login = () => {

    return (
        <div className="flex h-full flex-col relative md:flex-row w-full">

            <div className="w-full relative max-xs-tab:absolute top-0 left-0 lg:max-w-[67.5%]">
                <ImageWrapper
                    className="h-full min-h-screen object-cover absolute w-full"
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
            <div className="w-full  lg:max-w-[32.5%] flex items-start relative z-10 pt-[169.5px] pb-[157.5px]  md:items-center justify-center">
                <div className=" max-w-[624px]  w-full py-[18px] px-[16px] md:px-[40x] lg:px-[80x] xl:px-[100px] bg-white">
                    <Wrapper
                        className="flex flex-col justify-center items-center gap-y-[12px]"
                    >
                        <Image
                            src="/image/icon.png"
                            width={41.25}
                            height={34.98}
                            alt="Logo Icon"
                        />
                        <H4
                            as="tag"
                            className="font-semibold mb-10 text-center">Log in to WW/M to continue </H4>

                            <LoginForm/>
                    </Wrapper>
                    
                  
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
    )
}
export default Login