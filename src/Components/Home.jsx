import Socials from './Socials'

export default function Home() {
  return (
    <div name="home" className="h-screen w-full bg-[#4F4A6D]">
      <div className="mx-auto flex h-full max-w-[1000px] flex-col items-center justify-center  px-8">
        <h1 className="text-4xl font-bold text-white sm:text-6xl">
          Antonio Bozzano
        </h1>
        <h2 className="text-3xl font-bold text-[#DE9773] sm:text-5xl">
          Developer
        </h2>
        <p className="max-w-[700px] py-4  text-center text-white">
          I’m a developer, and this is my first portfolio, which I made to show
          my projects 😺
        </p>

        <Socials />
      </div>
    </div>
  )
}
