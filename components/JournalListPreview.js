import Link from 'next/link'
import {format, parseISO, add } from 'date-fns'

const JournalPreview = ({title, slug, date}) => {
    return ( 
        <Link href={`journal/${slug}`}>
            <a className="mb-4 border-b border-gray-200 py-4 w-1/2">     
                <h1>{title}</h1>
                <h4 className="text-xs text-gray-500">{format(parseISO(date), 'MMMM do')}</h4>
            </a>
        </Link>
     );
}
 
export default JournalPreview;