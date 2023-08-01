import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <div className="fixed flex h-20 w-full flex-col flex-wrap items-center justify-between bg-[#4F4A6D] px-4 text-white md:flex-row ">
      <span className="ml-3 text-2xl">Antonio Bozzano Dev</span>

      <ul className="flex flex-grow items-center justify-center text-base md:ml-4 md:justify-end">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 hover:text-[#DE9773]"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 hover:text-[#DE9773]"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          offset={-80}
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 hover:text-[#DE9773]"
        >
          Projects
        </Link>
      </ul>
    </div>
  )
}
