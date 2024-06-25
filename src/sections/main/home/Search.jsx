import H2 from "@/components/ui/headings/h2";
import Text from "@/components/ui/text/text";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Link from "next/link";

const Search = () => {
  const searchTags = ["Rolex", "Gold", "34mm", "Europe", "Gold capped", "32mm"];
  return (
    <Wrapper className="bg-dark-100 py-[125px]">
      <Wrapper className="max-w-[760px] w-full mx-auto">
        <H2 className="text-white text-center" as={"tag"}>
          Find every watch, worldwide.
        </H2>

        <Wrapper className="mt-6 mb-1">
          <ul className="flex items-center gap-2 justify-center">
            {searchTags.map((item, i) => (
              <li key={i}>
                <Link
                  href={"/" + item.toLowerCase()}
                  className="border border-light-200 rounded-[8px] px-4 py-[10px] text-white opacity-65 leading-[19.6px] text-sm font-normal block hover:opacity-100 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Wrapper>
        <Wrapper className='mt-6'>
          <Text className='text-white'>
            <span className="opacity-75">Currently</span>
            <span className="border border-light-200 py-[2px] px-[6px] mx-2 rounded-[6px]">786.021</span>
            <span className="opacity-75"> watches online</span>
          </Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Search;
