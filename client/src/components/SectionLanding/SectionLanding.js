import React from "react"
import "./SectionLanding.css"

const SectionLanding = ({ title, importantText, link }) =>{
    return (
        <section className="section">
        <header>
          <h2>{title} <span className="important">{importantText}</span></h2>
          <a href={link} className="view-more">
            <span>Ver más</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </header>
        <div className="line"></div>
      </section>
);
}

export default SectionLanding;