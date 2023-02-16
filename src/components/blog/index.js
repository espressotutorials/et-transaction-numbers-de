import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlogItem from "./BlogItem"
import Newsletter from "../Newsletter";

const Blog = () => {

    const articles = useStaticQuery(graphql`
    {
        allMarkdownRemark {
        nodes {
            frontmatter {
                title
                slug
                number
                program
            }
            html
            }
        }
    }
    `)

    const allArticles = articles.allMarkdownRemark.nodes.map((item, index) => (
        <BlogItem
        key={index}
        slug={item.frontmatter.slug}
        alt={item.frontmatter.title}
        title={item.frontmatter.title}
        number={item.frontmatter.number}
        program={item.frontmatter.program}
        />
    ))
    return (
        <div className="max-w-stage w-full mx-auto">
            <div className="w-full py-16">
                <div className="w-full overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col"
                                className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900">Titel
                            </th>
                            <th scope="col"
                                className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900">Nummer
                            </th>
                            <th scope="col"
                                className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900">Programm
                            </th>
                            <th scope="col"
                                className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900">
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {allArticles}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full pb-16">
                <Newsletter></Newsletter>
            </div>
        </div>
    )
}

export default Blog
