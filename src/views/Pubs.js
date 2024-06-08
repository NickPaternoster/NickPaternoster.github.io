import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/PubsStyle.css';
import downloadIcon from '../images/highlight_download.png';
import highlightDownloadIcon from '../images/download_highlight.png';


export default function Pubs() {
  const publications = [
    {
      year: "2024",
      description: "Object recognition via echoes: Quantifying the crossmodal transfer of three-dimensional shape information between echolocation, vision, and haptics.",
      authors: ["Teng, S.", "Danforth, C.", "Paternoster, N. J.", "Ezeana, M.", "& Puri, A. M."],
      link: "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2024.1288635/full",
      journal: "Frontiers in Neuroscience"
    },
    {
      year: "2021",
      description: "Set size and ensemble perception of numerical value.",
      authors: ["Lee, K. R.", "Dague, T. D.", "Sobel, K. V.", "Paternoster, N. J.", "& Puri, A. M."],
      link: "https://link.springer.com/article/10.3758/s13414-020-02196-8",
      journal: "Attention, Perception, & Psychophysics"
    }
  ];
  const [hoverDownloads, setHoverDownloads] = useState(new Array(publications.length).fill(false));

  const renderAuthors = (authors) => authors.map((author, index) => 
    author.includes("Paternoster, N. J.") ? <strong key={index}>{author}</strong> : <span key={index}>{author}</span>
  );

  return (
    <div className="parent-container">
      <div className="pubs-title">Journal Publications</div>
      {publications.map((pub, index) => (
        <div className="year-container" key={index}>
          <div className="year">{pub.year}</div>
          <div className="publication-details">
            <p>{pub.description}</p>
            <p>{renderAuthors(pub.authors).reduce((prev, curr) => [prev, ", ", curr])}</p>
            <div className="button-link-container">
              <button
                className="download-button"
                onMouseEnter={() => {
                  const updated = [...hoverDownloads];
                  updated[index] = true;
                  setHoverDownloads(updated);
                }}
                onMouseLeave={() => {
                  const updated = [...hoverDownloads];
                  updated[index] = false;
                  setHoverDownloads(updated);
                }}
              >
                <img src={hoverDownloads[index] ? highlightDownloadIcon : downloadIcon} alt="Download" />
              </button>
              <span className="separator">|</span>
              <a href={pub.link} className="frontiers-button">Read on {pub.journal}</a>
            </div>
          </div>
        </div>
      ))}
      <div className="pubs-title">In-Preparation</div>
      <div className="year-container">

      <div className="publication-details">
          <p>Investigating the effects of the noradrenergic system on visual processing</p>
          <p><strong>Paternoster, N. J.</strong>, Swallow, K. M.</p>
        </div>

        <div className="publication-details">
          <p>Eye movements reveal an influence of semantic-perceptual congruity on attentional selection in visual search</p>
          <p><strong>Paternoster, N. J.</strong>, Dague, T. D., & Puri, A. M.</p>
        </div>
      <NavLink exact to="/research" className="button-below">Get More Information</NavLink>
    </div>
    </div>
  );
}
