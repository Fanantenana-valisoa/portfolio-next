"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();
  const isActive = pathname === "/" && href.startsWith("#");

  return (
    <Link
      href={href}
      className={`
        group relative
        text-green-500 font-medium
        transition duration-300
        hover:text-green-400
        hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]
      `}
    >
      {title}

      {/* underline animé */}
      <span
        className={`
          absolute left-0 -bottom-1
          h-[2px] bg-green-400
          transition-all duration-300
          w-0 group-hover:w-full
        `}
      />
    </Link>
  );
};

export default NavLink;
