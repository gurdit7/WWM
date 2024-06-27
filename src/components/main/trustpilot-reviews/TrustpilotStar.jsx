import Wrapper from "@/components/ui/wrapper/Wrapper";
import IconTrustPilot from "../../../../public/icons/IconTrustPilot";

const TrustpilotStar = ({rating, className}) => {
  return (
    <Wrapper className="flex items-center gap-1 relative">
      <Wrapper
        className={`${className || ''} w-6 h-6 flex items-center justify-center relative bg-gradient-to-r from-[#00B67A] from-100% to-[#D7D7E2] to-0 overflow-hidden`}
      >
        <IconTrustPilot className="fill-white" size={18} />
      </Wrapper>
      <Wrapper
        className={`${className || ''}  w-6 h-6 flex items-center justify-center relative bg-[#00B67A] overflow-hidden`}
      >
        <IconTrustPilot className="fill-white" size={18} />
      </Wrapper>
      <Wrapper
        className={`${className || ''}  w-6 h-6 flex items-center justify-center relative bg-[#00B67A] overflow-hidden`}
      >
        <IconTrustPilot className="fill-white" size={18} />
      </Wrapper>
      <Wrapper
        className={`${className || ''}  w-6 h-6 flex items-center justify-center relative bg-[#00B67A] overflow-hidden`}
      >
        
        <IconTrustPilot className="fill-white" size={18} />
      </Wrapper>
      <Wrapper
        className={`${className || ''}  w-6 h-6 flex items-center justify-center relative bg-gradient-to-r from-[#00B67A] from-50% to-[#D7D7E2] to-50% overflow-hidden`}
      >
        <IconTrustPilot className="fill-white" size={18} />
      </Wrapper>
    </Wrapper>
  );
};

export default TrustpilotStar;
