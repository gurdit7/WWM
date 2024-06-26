"use client"

import Container from "@/components/ui/container/container"
import H2 from "@/components/ui/headings/h2"
import Wrapper from "@/components/ui/wrapper/wrapper"
import { businessWatchPlatform } from "@/assets/data/busineswatchplatform"
import IconBell from "../../../../../public/icons/IconBell"
import H4 from "@/components/ui/headings/h4"
import Text from "@/components/ui/text/text"
import { useState } from "react"
import ImageWrapper from "@/components/ui/image/image-wrapper"
import Image from "next/image"
import laptop from "@/assets/images/login-bg.jpg"
import IconRecommandUs from "../../../../../public/icons/IconRecommandUs"
import { businessMarketing } from "@/assets/data/business-marketing"

const BusinessWatchPlatform = () => {

    const [selectedTab, setSelectedTab] = useState(0)

    return (

        <Container className="py-[100px]">
            <Wrapper>
                <H2 as="tag" className="text-center">
                    The biggest B2B watch-platform in the world.
                </H2>
                <Wrapper className="flex items-start my-[48px] py-[40px] pl-[40px] mx-auto rounded-[10px] bg-[#F4F4F3] gap-x-[12px] w-full max-w-[1271px]">
                    <Wrapper className="rounded-[6px] w-full max-w-[436px]">
                        {businessWatchPlatform.map((platform, i) => (
                            <Wrapper
                                onClick={() => setSelectedTab(i)}
                                className={`flex flex-col gap-y-[18px] cursor-pointer p-[18px] ${selectedTab === i && "bg-white"
                                    }`}
                                key={i}
                            >
                                <Wrapper className="flex gap-x-2 items-center">
                                    <IconBell />
                                    <H4 as="tag" className="font-semibold text-[#000]">
                                        {platform.title}
                                    </H4>
                                </Wrapper>
                                <Text className="text-[14px] text-left leading-[24px] text-[#595959]">
                                    {platform.description}
                                </Text>
                            </Wrapper>
                        ))}
                    </Wrapper>
                    <Wrapper className="flex justify-center w-full">
                        <Image
                            src={businessWatchPlatform[selectedTab].image}
                            width={600}
                            height={70}
                            objectFit="cover"
                            alt={"laptop"}
                        />
                    </Wrapper>
                </Wrapper>
                <Wrapper className="flex w-full mx-auto justify-center items-center gap-x-[65px]">
                    {businessMarketing.map((marketing, i) => (
                        <Wrapper key={i} className="flex items-center gap-x-[12px]">
                            {marketing.logo}
                            <Wrapper className="flex flex-col gap-y-[4px] items-center">
                                <H4 className="font-semibold" as="tag">
                                    {marketing.title}
                                </H4>
                                <Text className="text-[14px] leading-[22px] text-[#2A292C]">
                                    {marketing.subTitle}
                                </Text>
                            </Wrapper>
                        </Wrapper>
                    ))}
                </Wrapper>
            </Wrapper>
        </Container>

    )
}

export default BusinessWatchPlatform