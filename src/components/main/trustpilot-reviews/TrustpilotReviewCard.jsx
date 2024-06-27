import Wrapper from "@/components/ui/wrapper/Wrapper";
import TrustpilotStar from "./TrustpilotStar";
import { getHoursFromNow } from "@/utils/hours-from-now";
import H4 from "@/components/ui/headings/H4";
import Text from "@/components/ui/text/Text";

const TrustpilotReviewCard = ({item}) => {

  return (
    <Wrapper className="bg-white rounded-[6px] max-w-[475.33px] w-full">
      <Wrapper className="p-[34px] flex flex-col gap-3">
      <Wrapper className="flex items-center justify-between">
        <TrustpilotStar rating={item?.rating} className='!w-[19.99px] !h-[19.99px]'/>
        <span className="text-[13px] leading-[18.2px] text-dark-100 text-opacity-65">
                {getHoursFromNow(item?.createdAt)}
        </span>
      </Wrapper>
      <H4>{item?.title}</H4>
      <Wrapper>
      <Text className='!leading-[24px]'>{item?.description}</Text>
      <address className="font-medium not-italic	mt-[18px] text-[13px] leading-[18.2px] text-dark-100">{item?.name}</address>
      </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default TrustpilotReviewCard;
