import React from 'react'
import {Link} from "gatsby";

const BlogItem = ({slug, title, number, program}) => {
    console.log('slug', slug);

    const moreLinkLabel = `Weiter Informationen zu ${title} anzeigen`;
    return (
        <tr className="mb-4 pb-4 border-b border-solid border-gray-400">
            <td className="relative py-4 pl-6 pr-3 text-sm font-medium">
                <Link to={slug} className="text-blue-500 hover:text-orange-500" title={moreLinkLabel}>
                    {title}
                </Link>
            </td>
            <td className="relative py-4 pl-6 pr-3 text-sm">
                {number}
            </td>
            <td className="relative py-4 pl-6 pr-3 text-sm">
                {program}
            </td>
            <td className="relative py-4 pl-6 pr-3 text-sm text-right">
                <Link to={slug} rel="nofollow" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30" title={moreLinkLabel} type="button">
                    Weitere Informationen
                </Link>
            </td>
        </tr>
    )
}

export default BlogItem
