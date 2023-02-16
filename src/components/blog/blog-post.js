import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../../components/Layout"
import {Helmet} from "react-helmet";
import Newsletter from "../../components/Newsletter";
import Header from "../Header";

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const metaDescription = `${post.frontmatter.title} (${post.frontmatter.number}) ${post.html} - SAP Transaktionen im Überblick - Espresso Tutorials GmbH`;
        const { previous, next } = this.props.pageContext

        return(
            <Layout key={post.frontmatter.number}>
                <Helmet>
                    <title>{post.frontmatter.title} - {post.frontmatter.number} - SAP Transaktionen im Überblick - Espresso Tutorials GmbH</title>
                    <meta name="description" content={metaDescription} />
                </Helmet>
                <Header/>
                <div className="px-8 w-full py-16">
                    <div className="w-full max-w-stage mx-auto">
                        <div className="w-full">
                            <h1 className="text-blue-500 text-6xl md:text-5xl font-semibold leading-tight pb-4 mb-4">{post.frontmatter.title} <span className="text-gray-800 text-base md:text-xl">SAP Transaktion</span></h1>
                        </div>
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 ">
                            <div className="bg-gray-400 rounded-lg p-8">
                                <div className="w-full">
                                    <div className="flex flex-row flex-wrap mb-4 pb-4 border-b border-solid border-gray-600">
                                        <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
                                            <p className="font-semibold text-gray-800">Transaktionsname</p>
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                            <p className="text-gray-650">{post.frontmatter.title}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row flex-wrap mb-4 pb-4 border-b border-solid border-gray-600">
                                        <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
                                            <p className="font-semibold text-gray-800">Programm</p>
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                            <p className="text-gray-650">{post.frontmatter.program ? post.frontmatter.program : 'nicht verfügbar'}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row flex-wrap mb-4 pb-4 border-b border-solid border-gray-600">
                                        <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
                                            <p className="font-semibold text-gray-800">Nummer</p>
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                            <p className="text-gray-650">{post.frontmatter.number}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row flex-wrap">
                                        <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
                                            <p className="font-semibold text-gray-800">Beschreibung</p>
                                        </div>
                                        <div className="w-full sm:w-1/2 text-gray-650" dangerouslySetInnerHTML={{ __html: post.html }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-0 md:px-8 md:pt-4">
                                <h2 className="text-gray-900 font-extrabold text-4xl leading-tight mb-8">SAP-Fachbücher und Videos</h2>
                                <p className="text-gray-700 mb-4">Espresso Tutorials bietet Ihnen auf das Wesentliche fokussierte Lernmedien für Ihren Weg vom Schnelleinstieg zum SAP-Profi. <a className="text-blue-500 hover:text-orange-500 underline" href="https://www.espresso-tutorials.de" target="_blank" rel="noopener" title="Erfahren Sie hier mehr über Espresso Tutorials">Erfahren Sie mehr über uns</a> </p>
                                <p className="text-gray-700">Mit unserer SAP-Lernplattform <a className="text-blue-500 hover:text-orange-500 underline" href="https://et.training" target="_blank" rel="noopener" title="SAP-Lernplattform et.training besuchen">et.training</a> bieten wir Ihnen eine Flatrate für E-Books und Videos. Unser Motto: „Learn SAP anytime, anywhere, and on any device“.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-stage mx-auto mt-8">
                        <ul className="w-full flex flex-row justify-between text-sm">
                            <li>
                                {previous && (
                                    <Link to={previous.fields.slug} rel="prev" className="p-2 text-blue-500 hover:text-orange-500">
                                        ← Vorherige Transaktion
                                    </Link>
                                )}
                            </li>
                            <li>
                                <Link to={'/'} rel="next" className="p-2 text-blue-500 hover:text-orange-500" title="Zurück zur Übersicht aller SAP Transaktionen">
                                    Zurück zur Übersicht
                                </Link>
                            </li>
                            <li>
                                {next && (
                                    <Link to={next.fields.slug} rel="next" className="p-2 text-blue-500 hover:text-orange-500">
                                        Weitere Transaktion →
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="w-full max-w-stage mx-auto">
                        <Newsletter></Newsletter>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        number
        program
      }
    }
  }
`
