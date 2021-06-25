import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {journals} from '../../lib/data'




export default function Home() {
  return (
      <div className="w-full h-screen bg-gray-100 flex justify-center  items-center">
        {journals.map((entry) => (
            <div key={entry.id}>
                <Link href={`journal/${entry.slug}`}>
                    <a>     
                        <h1>{entry.title}</h1>
                        <h1>{entry.date}</h1>
                        <h1>{entry.content}</h1>
                    </a>
                </Link>
            </div>
        ))}
      </div>
  )
}
