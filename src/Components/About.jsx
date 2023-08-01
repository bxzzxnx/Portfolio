export default function About() {
  return (
    <div name="about" className="h-screen w-full bg-[#4F4A6D] text-white ">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="grid w-full max-w-[1000px] grid-cols-2 gap-8 ">
          <div className="pb-8 pl-4 sm:text-right">
            <p className=" text-4xl font-bold ">About</p>
          </div>
          <div></div>
        </div>
        <div className="grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2">
          <div className="text-4xl font-bold  sm:text-right">
            <p>Hii, My Name is Antonio Bozzano nice to meet you</p>
          </div>
          <div>
            <p>
              I’m 24 years old and actually live in Brazil. My dev journey
              started in 2022 when I graduated in Information Systems. Since
              then I continue to study hard to improve my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
