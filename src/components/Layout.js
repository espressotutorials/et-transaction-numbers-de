import React from 'react'
import {Helmet} from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
    render() {
        const { children } = this.props
        return (
            <div>
                <Helmet>
                    <title>SAP Transaktionen im Überblick - Espresso Tutorials GmbH</title>
                </Helmet>
                <Header/>
                {children}
                <Footer/>
            </div>
        )
    }
}

export default Layout
