import React from "react"
import Layout from "../components/Layout"
import Blog from "../components/blog"
import {SEO} from "../components/Seo";
import {Helmet} from "react-helmet";

const Home = () => {
  return(
    <Layout>
    <Helmet>
        <title>SAP Transaktionen im Überblick - Espresso Tutorials GmbH</title>
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
        <Blog/>
      </section>
    </Layout>
  )
}

export default Home

export const Head = () => (
    <SEO/>
)
