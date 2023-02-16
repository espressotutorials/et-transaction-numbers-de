import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import {Helmet} from "react-helmet";
import {SEO} from "../components/Seo";
import Newsletter from "../components/Newsletter";

const Article = ({data}) => {
    console.log(data);
    const { html } = data.markdownRemark
    const { title, number, program } = data.markdownRemark.frontmatter
    const metaDescription = `${title} (${number}) ${html} - SAP Transaktionen im Überblick - Espresso Tutorials GmbH`;
    return(
      <Layout key={data.link}>
          <Helmet>
              <title>{title} - {number} - SAP Transaktionen im Überblick - Espresso Tutorials GmbH</title>
              <meta name="description" content={metaDescription} />
          </Helmet>
          <div className="px-8 w-full py-16">
              <div className="w-full max-w-stage mx-auto">
                  <div className="w-full">
                      <h1 className="text-blue-500 text-6xl md:text-5xl font-semibold leading-tight pb-4 mb-4">{title} <span className="text-gray-800 text-base md:text-xl">SAP Transaktion</span></h1>
                  </div>
                  <div className="grid gap-8 grid-cols-1 md:grid-cols-2 ">
                      <div className="bg-gray-400 rounded-lg p-8">
                          <div className="w-full">
                              <div className="flex flex-row flex-wrap mb-4 pb-4 border-b border-solid border-gray-600">
                                  <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
                                      <p className="font-semibold text-gray-800">Transaktionsname</p>
                                  </div>
                                  <div className="w-full sm:w-1/2">
                                      <p className="text-gray-650">{title}</p>
                                  </div>
                              </div>
                              <div className="flex flex-row flex-wrap mb-4 pb-4 border-b border-solid border-gray-600">
                                  <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
                                      <p className="font-semibold text-gray-800">Programm</p>
                                  </div>
                                  <div className="w-full sm:w-1/2">
                                      <p className="text-gray-650">{program ? program : 'nicht verfügbar'}</p>
                                  </div>
                              </div>
                              <div className="flex flex-row flex-wrap mb-4 pb-4 border-b border-solid border-gray-600">
                                  <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
                                      <p className="font-semibold text-gray-800">Nummer</p>
                                  </div>
                                  <div className="w-full sm:w-1/2">
                                      <p className="text-gray-650">{number}</p>
                                  </div>
                              </div>
                              <div className="flex flex-row flex-wrap">
                                  <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
                                      <p className="font-semibold text-gray-800">Beschreibung</p>
                                  </div>
                                  <div className="w-full sm:w-1/2 text-gray-650" dangerouslySetInnerHTML={{ __html: html }}></div>
                              </div>
                          </div>
                      </div>
                      <div className="p-0 md:px-8 md:pt-4">
                          <h2 className="text-gray-900 font-extrabold text-4xl leading-tight mb-8">SAP-Fachbücher und Videos</h2>
                          <p className="text-gray-700 mb-4">Espresso Tutorials bietet Ihnen auf das Wesentliche fokussierte Lernmedien für Ihren Weg vom Schnelleinstieg zum SAP-Profi. <a className="text-blue-500 hover:text-orange-500 underline" href="https://www.espresso-tutorials.de" target="_blank" rel="noopener" title="Erfahren Sie hier mehr über Espresso Tutorials">Erfahren Sie mehr über uns</a> </p>
                          <p className="text-gray-700">Mit unserer SAP-Lernplattform <a className="text-blue-500 hover:text-orange-500 underline" href="https://et.training" target="_blank" rel="noopener" title="SAP-Lernplattform et.training besuchen">et.training</a> bieten wir Ihnen eine Flatrate für E-Books und Videos. Unser Motto: „Learn SAP anytime, anywhere, and on any device“.</p>
                      </div>
                  </div>
                  <div className="w-full mt-4">
                      <p className="text-sm">
                          <a className="text-blue-500 hover:text-orange-500 underline" href="/" title="Zurück zur Übersicht aller SAP Transaktionen">zurück zur Übersicht</a>
                      </p>
                  </div>
              </div>
              <div className="w-full max-w-stage mx-auto">
                  <Newsletter></Newsletter>
              </div>
          </div>
        </Layout>
    )
}

export default Article

export const Head = () => (
    <SEO/>
)

export const query = graphql`
  query ArticleQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        number
      }
    }
  }
`
