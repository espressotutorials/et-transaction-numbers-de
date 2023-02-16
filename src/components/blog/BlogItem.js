import React from 'react'

const BlogItem = ({slug, title, number, program}) => {

    const moreLinkLabel = `Weiter Informationen zu ${title} anzeigen`;
    return (
        <tr className="mb-4 pb-4 border-b border-solid border-gray-400">
            <td className="relative py-4 pl-6 pr-3 text-sm font-medium">
                <a className="text-blue-500 hover:text-orange-500" href={`/${slug}`} title={moreLinkLabel}>{title}</a>
            </td>
            <td className="relative py-4 pl-6 pr-3 text-sm">
                {number}
            </td>
            <td className="relative py-4 pl-6 pr-3 text-sm">
                {program}
            </td>
            <td className="relative py-4 pl-6 pr-3 text-sm text-right">
                <a href={`/${slug}`} title={moreLinkLabel} type="button" rel="nofollow" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30">Weitere Informationen</a>
            </td>
        </tr>
    )
}

export default BlogItem
