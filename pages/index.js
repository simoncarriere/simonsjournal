import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen bg-gray-100 flex justify-center  items-center">
        <h1>Header</h1>
      </div>
      <div className="w-full h-screen bg-gray-200 flex justify-center  items-center">
        <h1>Guides</h1>
      </div>
    </div>
  )
}
