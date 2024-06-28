"use client"

import Container from "@/components/ui/container/container"
import H2 from "@/components/ui/headings/H2"
import Wrapper from "@/components/ui/wrapper/wrapper"
import { businessWatchPlatform } from "@/assets/data/busineswatchplatform"
import IconBell from "../../../../public/icons/IconBell"
import H4 from "@/components/ui/headings/H4"
import Text from "@/components/ui/text/text"
import { useState } from "react"
import Image from "next/image"
import { businessMarketing } from "@/assets/data/business-marketing"

const BusinessWatchPlatform = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    return (

        <Container className="py-[35px] md:py-[100px]">
            <Wrapper>
                <H2 as="tag" className="text-center">
                    The biggest B2B watch-platform in the world.
                </H2>
                <Wrapper className="flex flex-col-reverse md:flex-row items-start my-[35px] md:my-[48px] py-[40px] md:pl-[40px] mx-auto rounded-[10px] bg-[#F4F4F3] gap-y-[12px] md:gap-y-0 md:gap-x-[12px] w-full max-w-[1271px]">
                    <Wrapper className="rounded-[6px] px-[16px] md:px-0 flex flex-col gap-y-[12px] w-full  md:max-w-[436px]">
                        {businessWatchPlatform.map((platform, i) => (
                            <Wrapper
                                onClick={() => setSelectedTab(i)}
                                className={`flex flex-col gap-y-[12px] cursor-pointer py-[16px] px-[18px] ${selectedTab === i && "bg-white rounded-[6px]"
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
                    <Wrapper className="flex justify-center w-full px-[24px] md:px-0">
                        <Image
                            src={businessWatchPlatform[selectedTab].image}
                            width={600}
                            height={70}
                            className="object-cover"
                            alt={"laptop"}
                        />
                    </Wrapper>
                </Wrapper>
                <Wrapper className="flex flex-col md:flex-row w-full mx-auto justify-center items-start md:items-center gap-y-[65px] md:gap-y-0 md:gap-x-[20px] lg:gap-x-[35px] xl:gap-x-[65px]">
                    {businessMarketing.map((marketing, i) => (
                        <Wrapper key={i} className="flex items-center justify-center  md:justify-start  px-[24px] md:px-0 gap-x-[12px]">
                            {marketing.logo}
                            <Wrapper className="flex flex-col gap-y-[4px] items-start md:items-center">
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