import React from 'react'
import {SEO} from "./Seo";
import {Helmet} from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    const year = new Date().getFullYear();
    return (
        <div>
            <Helmet>
                <title>SAP Transaktionen im Überblick - Espresso Tutorials GmbH</title>
            </Helmet>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout

export const Head = () => (
    <SEO/>
)

