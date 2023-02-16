import Newsletter from "../Newsletter";
import React from "react";
import BlogItem from "./BlogItem";
import {graphql, Link} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from "../Layout";

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props
        const posts = data.allMarkdownRemark.edges
        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? '/' : `/${(currentPage - 1).toString()}`
        const nextPage = `/${(currentPage + 1).toString()}`;

        return (
            <Layout key={currentPage}>
                <Helmet>
                    <title>SAP Transaktionen im Überblick - Espresso Tutorials GmbH</title>
                    <meta name="description" content="Unsere SAP Transaktionen Liste ist Ihre Anlaufstelle bei Verständnisproblemen in der SAP-Welt. Wir erklären Ihnen die unterschiedlichen Transaktionen und Begrifflichkeiten." />
                </Helmet>
                <aside className="px-8 py-16 md:py-32 bg-blue-200" id="stage">
                    <div className="max-w-stage w-full mx-auto flex flex-row flex-wrap">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-gray-800 text-4xl font-semibold leading-tight mb-4">SAP Transaktionen im Überblick</h1>
                            <p className="text-base md:text-lg text-gray-700">Unsere SAP Transaktionen Liste ist Ihre Anlaufstelle bei Verständnisproblemen in der SAP-Welt. Wir erklären Ihnen die unterschiedlichen Transaktionen und Begrifflichkeiten.</p>
                        </div>
                    </div>
                </aside>
                <section className="px-8">
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
                                    {posts.map(({ node, index }) => {
                                        const title = node.frontmatter.title || node.fields.slug
                                        const number = node.frontmatter.number
                                        const program = node.frontmatter.program
                                        return (
                                            <BlogItem
                                                key={index}
                                                slug={node.fields.slug}
                                                alt={title}
                                                title={title}
                                                number={number}
                                                program={program}
                                            />
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="w-full">
                                <ul className="w-full flex flex-row justify-center text-sm">
                                    {!isFirst && (
                                        <Link to={prevPage} rel="prev" className="p-2 text-blue-500 hover:text-orange-500">
                                            ← Vorherige
                                        </Link>
                                    )}
                                    {Array.from({ length: numPages }, (_, i) => (
                                        <li
                                            className="flex items-center"
                                            key={`pagination-number${i + 1}`}
                                        >
                                            <Link
                                                className="p-2 text-blue-500 hover:text-orange-500"
                                                to={`/${i === 0 ? '' : i + 1}`}
                                            >
                                                {i + 1}
                                            </Link>
                                        </li>
                                    ))}
                                    {!isLast && (
                                        <Link to={nextPage} rel="next"  className="p-2 text-blue-500 hover:text-orange-500">
                                            Weitere →
                                        </Link>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full pb-16">
                            <Newsletter></Newsletter>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
       sort: { fields: [frontmatter___title], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            number
            program
          }
          html
        }
      }
    }
  }
`
