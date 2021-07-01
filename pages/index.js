import Image from 'next/image'

const projects = [
  {
    id: 1,
    thumbnail: '/',
    title: 'Interactive Storytelling with Mapbox',
    content: 'Experimenting with interactive methods of using mapbox to tell data powered stories'
  },
  {
    id: 2,
    thumbnail: '/',
    title: 'Designing for voice interraction on the web; is it the future ?',
    content: 'Experimenting with interactive methods of using mapbox to tell data powered stories'
  }
]

export default function Home() {
  return (
    <div className="lg:relative">
      <div className="mx-auto w-full pt-16 pb-20 lg:py-40 lg:text-left h-screen">
        <div className="lg:w-1/2 pl-16 pr-24">
          <div>
            <h2 className="mt-3 text-gray-600">
              <span className="font-medium text-gray-900">I'm Simon,</span>  a creative technologist looking to join a startup working towards transforming our cities, building a decentralized democratic future or making our species multi planatary.
            </h2>
          </div>

          {/* PROJECTS */}
          <div className="mt-20">
            <h3 className="font-medium">Current Projects</h3>
            <div className="flex flex-row">
              {projects.map((i) => (
                <div key={i.id} className="mr-8">
                  <div className="rounded-lg w-full h-72 bg-gray-200 my-6"></div>
                  <h3 className="mb-2">{i.title}</h3>
                  <h4 className="text-xs text-gray-500 font-light tracking-wide leading-relaxed">{i.content}</h4>
                </div>
             ))}
            </div>

            
          </div>

        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full object-contain">
        <Image src="/header.jpg" layout='fill' className="absolute inset-0 w-full h-full object-cover"/>
      </div>
    </div>
  )
}
