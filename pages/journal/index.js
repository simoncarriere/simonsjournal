import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import JournalListPreview from '../../components/JournalListPreview'
import {journals} from '../../lib/data'




export default function Home() {
  return (
      <div className="px-8 py-36">
        <h1>Latest Notes</h1> 
        <h2>Notes of purpose driven design, adventure & advocacy</h2>
        <div className="flex flex-col">
            {journals.map((entry) => (
                <JournalListPreview key={entry.id} {...entry} />
            ))}
        </div>
      </div>
  )
}

