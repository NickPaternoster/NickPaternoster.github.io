import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/PubsStyle.css';

export default function Pubs() {
  return (
    <div className="parent-container">
      <div className="pubs-title">Journal Publications</div>
      <div className="publications">
        Lee, K. R., Dague, T. D., Sobel, K. V., Paternoster, N. J., &amp; Puri, A. M. (2021). Set size and ensemble perception of numerical value. Attention, Perception, &amp; Psychophysics, 83(3), 1169–1178. <a href="https://doi.org/10.3758/s13414-020-02196-8">https://doi.org/10.3758/s13414-020-02196-8</a>
      </div>
      <div className="pubs-title">In-Preparation</div>
      <div className="publications">
        Paternoster, N. J., Dague, T. D., Sobel, K. V., Puri, A. M., Eye movements reveal an influence of semantic-perceptual congruity on attentional selection in visual search
      </div>
      <div className="publications">
        Teng, S., Danforth, C., Paternoster, N. J., Ezeana, M., Puri, A. M., How blurry are echoes? Quantifying crossmodal transfer of object information between echolocation, vision, and haptics
      </div>
      <NavLink exact to="/research" className="button-below">Get More Information</NavLink>
    </div>
  );
}
