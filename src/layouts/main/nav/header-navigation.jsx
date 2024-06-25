import { headerMenu } from "@/assets/data/navigation";
import NavHoz from "@/components/nav-section/desktop/horizontal";

const HeaderNavigation = () => {
  return (
      <NavHoz items={headerMenu}/>
  );
};

export default HeaderNavigation;
