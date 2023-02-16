import React from 'react'
import {GatsbyImage} from "gatsby-plugin-image";

const BookItem = ({link, title, language, image, claim, pages, price}) => {
    return (
        <article className="p-4 md:p-8 mb-12 relative rounded-xl shadow-2xl group">
            <span className="absolute top-0 right-0 py-1 px-3 rounded-lg bg-blue-500 text-white text-sm font-semibold shadow -mt-4 -mr-3">{price} €</span>
            <a href={link} target="_blank" rel="noopener nofollow noreferrer" title={title}>
                <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={title} className="w-full h-auto block overflow-hidden"/>
                <h3 className="font-semibold group-hover:text-orange-500 text-blue-500 transition-colors duration-200 ease-in-out mb-2 capitalize text-lg mt-4">{title}</h3>
                <ul className="flex flex-row items-center flex-wrap text-gray-700 font-semibold text-sm mt-2">
                    <li className="mr-4">Seiten: {pages}</li>
                    <li>Sprache: {language}</li>
                </ul>
                <p className="text-gray-700 mt-2">{claim}</p>
                <span title="Jetzt im Espresso Tutorials Shop kaufen" className="block mt-4 rounded-lg bg-blue-500 text-center group-hover:bg-orange-500 transition-colors duration-200 ease-in-out text-white font-semibold text-sm py-2 px-4">
                    Jetzt kaufen
                </span>
            </a>
        </article>
    )
}

export default BookItem
