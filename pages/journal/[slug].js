import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {journals} from '../../lib/data'



export default function Entry({id, title, slug, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full h-screen bg-gray-100 flex flex-col justify-center  items-center">
        <h1>{title}</h1>
        <h1>{date}</h1>
        <h1>{slug}</h1>
        <h1>{content}</h1>
      </div>
    </div>
  )
}



export async function getStaticPaths() {
  // List of blog post slug name

  // note that the  alue of each 'params' must match the parameteer used in the page name "slug"
    return {
      paths: journals.map((i) => ({
        params: {
          slug: i.slug,
        }
      })),
      fallback: false
  }
}

export async function getStaticProps(context) {
  const {params} = context
  
  return {
    props: journals.find((i) => i.slug=== params.slug)
  }
}






