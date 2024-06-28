
"use client"

import Wrapper from "@/components/ui/wrapper/wrapper"
import { useEffect, useState } from "react"
import PasswordVisibilty from "../../public/icons/IconPasswordVisibility"
import PasswordVisibiltyOff from "../../public/icons/IconPasswordVisibilityOff"
import Input from "@/components/form/input"
import Button from "@/components/form/button"
import Text from "@/components/ui/text/text"
import useTheme from "@/contexts/theme/ThemeContext"

const LoginForm = () => {
        const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    const {setHideHeader, setHideFooter} = useTheme();
    useEffect(()=>{
        setHideHeader(true);
        setHideFooter(true);
    },[])
    return (
        <Wrapper className="w-full">
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
            </Wrapper>
    )
}
export default LoginForm