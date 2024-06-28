"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import IconArrowRight from "../../../public/icons/IconArrowRight";
import Container from "../ui/container/container";

const Breadcrumb = () => {
  const path = usePathname();
  const links = path.split("/");
  return (
    <Container>
      <ul className="flex items-center gap-x-1">
        {path.includes("collections") && (
          <li className="flex items-center gap-x-1">
            <Link
              href="/collections"
              className="text-sm leading-[19.6px] text-dark-150 capitalize opacity-50"
            >
              All Watches
            </Link>
            <IconArrowRight className="w-5 h-5 fill-dark-100" />
          </li>
        )}
        {links.map((link, i) => (
          <Item link={link} i={i} links={links} key={i} path={path} />
        ))}
      </ul>
    </Container>
  );
};

export default Breadcrumb;

const Item = ({ link, i, links, path }) => {
  return (
    i > 0 &&
    !link.includes("collections") && (
      <li key={i} className="flex items-center gap-x-1">
        <Link
          href={path.split(link)[0] + link}
          className={`text-sm leading-[19.6px] text-dark-150 capitalize ${
            i !== links.length - 1 && links.length > 2 ? "underline" : ""
          }`}
        >
          {link}
        </Link>
        {i > 0 && i !== links.length - 1 && (
          <IconArrowRight className="w-5 h-5 fill-dark-100" />
        )}
      </li>
    )
  );
};
