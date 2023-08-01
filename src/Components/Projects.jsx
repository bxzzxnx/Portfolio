import { data } from '../data'

export default function Projects() {
  return (
    <div name="projects" className="w-full bg-[#4F4A6D] text-white md:h-screen">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center px-4">
        <div>
          <p className="text-4xl font-bold ">Projects</p>
          <p className="py-6">Some of my projects</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className="content-div group container mx-auto flex 
              items-center justify-center rounded-md text-center shadow-lg shadow-[#040c16] "
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="font bold text-2xl tracking-wider text-white ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button
                      className="m-2 rounded-lg bg-white px-4 py-3
                       text-center text-lg font-bold text-gray-700"
                    >
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
