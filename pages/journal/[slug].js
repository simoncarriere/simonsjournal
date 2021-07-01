import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {journals} from '../../lib/data'
import {format, parseISO, add } from 'date-fns'



export async function getStaticPaths() {
  // List of blog post slug name

  // note that the  value of each 'params' must match the parameter used in the page name "slug"
    return {
      paths: journals.map((i) => ({
        params: {
          slug: i.slug,
        }
      })),
      fallback: false
  }
}

export async function getStaticProps({params}) {
  return {
    props: journals.find((i) => i.slug === params.slug)
  }
}


export default function Entry({id, title, slug, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full h-screen bg-gray-100 flex flex-col justify-center  items-center">
        <h1>{title}</h1>
        <h1>{date}</h1>
        <h1>{format(parseISO(date), 'MMMM do, uuu')}</h1>
        <h1>{format(parseISO(date), 'MMMM do')}</h1>
        <h1>{slug}</h1>
        <h1>{content}</h1>
      </div>
    </div>
  )
}