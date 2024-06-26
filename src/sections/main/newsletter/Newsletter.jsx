"use client";
import Button from "@/components/form/button";
import Input from "@/components/form/input";
import Container from "@/components/ui/container/container";
import H2 from "@/components/ui/headings/h2";
import TickItem from "@/components/ui/tick-list/tick-list-item";
import Wrapper from "@/components/ui/wrapper/wrapper";
import { useState } from "react";

const Newsletter = ({labelBgColor}) => {
  const [formData, setFormData] = useState();
  const getFormData = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
    <Wrapper className="py-[52px] flex flex-col gap-6">
      <H2 className="text-center">Join WorldWatch Market today!</H2>
      <Wrapper className="max-w-[581px] w-full p-6 mx-auto">
        <form onSubmit={onSubmit} className="flex gap-3">
          <Input
            className="!bg-transparent !py-[13px] !px-[18px]"
            labelBgColor={labelBgColor}
            label="Email address"
            required={true}
            setInputData={getFormData}
            placeholder="Email address"
            name="email"
            value={formData?.email}
            type="email"
          />
          <Button
            type="submit"
            btnType="solid"
            color="black"
            additionalCss="max-w-[169px]"
          >
            Free trial
          </Button>
        </form>
      </Wrapper>
      <Wrapper>
        <ul className="flex items-center gap-[28px] justify-center">
          <TickItem label="Free register" />
          <TickItem label="Quick browsing and buying" />
          <TickItem label="Don’t wait to way" />
        </ul>
      </Wrapper>

    </Wrapper>
    </Container>
  );
};

export default Newsletter;
