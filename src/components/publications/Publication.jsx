import React from 'react'
import "./publication.css"
import {BiLinkExternal} from "react-icons/bi";
const Publication = ({pub}) => {
  return (
    <>
    <div className="publication">
        <div className="title">
            <a href={pub.url}>{pub.title}</a>
            <BiLinkExternal/>
        </div>
            <p>author:{pub.nameOfAuthor}</p>
            <p>typeOfPublication:{pub.type}</p>
            <p>noOfCitations:{pub.noOfCitations}</p>
    </div>
    </>
  )
}

export default Publication