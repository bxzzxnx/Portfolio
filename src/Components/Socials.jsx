import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Socials() {
  return (
    <div className=" flex flex-row p-3 text-white ">
      <a
        className="mr-3 cursor-pointer hover:text-[#333] "
        href="https://github.com/bxzzxnx"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={40} />
      </a>
      <a
        className="mr-3 cursor-pointer hover:text-[#0077B5] "
        href="https://www.linkedin.com/in/antonio-bozzano-229a481ab/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={40} />
      </a>
      <a
        className="mr-3 cursor-pointer hover:text-[#d62976]"
        href="https://www.instagram.com/antoniobozzano/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram size={40} />
      </a>
    </div>
  )
}
