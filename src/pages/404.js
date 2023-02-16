import * as React from "react"
import Layout from "../components/Layout";
import {SEO} from "../components/Seo";
import {Helmet} from "react-helmet";

const NotFoundPage = () => {
  return (
      <Layout key="404">
          <Helmet>
              <title>404 | SAP Transaktionen im Überblick - Espresso Tutorials GmbH</title>
          </Helmet>
          <div>
              <section className="bg-blue-200 text-gray-800 pt-16 pb-10 text-left">
                  <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                      <h1 className="font-semibold md:text-4xl text-2xl pb-4">404</h1>
                      <p className="lg:text-2xl sm:text-lg text-sm">Seite nicht gefunden</p>
                  </div>
              </section>
              <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex flex-row flex-wrap py-10">
                  <div className="w-full md:w-content md:pr-16 lg:pr-24">
                      <div className="w-full mt-9 article">
                          <div className="prose lg:prose-xl">
                              <p>Leider konnte die gewünschte Seite nicht gefunden werden.</p>
                              <p>Bitte versuchen Sie es mit einer anderen Seite erneut.</p>
                          </div>
                      </div>
                  </div>
                  <div className="w-full w-sidebar mt-12 md:mt-0">
                  </div>
              </div>
          </div>
      </Layout>
  )
}

export default NotFoundPage

export const Head = () => (
    <SEO/>
)
