import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/PubsStyle.css';

export default function Pubs() {
  return (
    <div className="parent-container">
      <div className="pubs-title">Journal Publications</div>
      <div className="year-container">
        <div className="year">2024</div>
        <div className="publication-details">
          <p>Teng, S., Danforth, C., Paternoster, N., Ezeana, M., & Puri, A. (2024). Object recognition via echoes: Quantifying the crossmodal transfer of three-dimensional shape information between echolocation, vision, and haptics. <em>Frontiers in Neuroscience, 18.</em> https://doi.org/10.3389/fnins.2024.1288635</p>
        </div>
      </div>
      <div className="year-container">
        <div className="year">2021</div>
        <div className="publication-details">
          <p>Lee, K. R., Dague, T. D., Sobel, K. V., Paternoster, N. J., & Puri, A. M. (2021). Set size and ensemble perception of numerical value. <em>Attention, Perception, & Psychophysics, 83(3)</em>, 1169–1178. <a href="https://doi.org/10.3758/s13414-020-02196-8">https://doi.org/10.3758/s13414-020-02196-8</a></p>
        </div>
      </div>
      <div className="pubs-title">In-Preparation</div>
      <div className="year-container">
        <div className="publication-details">
          <p>Paternoster, N. J., Dague, T. D., Sobel, K. V., Puri, A. M., Eye movements reveal an influence of semantic-perceptual congruity on attentional selection in visual search</p>
        </div>
      </div>
      <NavLink exact to="/research" className="button-below">Get More Information</NavLink>
    </div>
  );
}
