import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/PubsStyle.css';

export default function Awards() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleBoxClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const isBoxExpanded = (index) => {
    return index === expandedIndex;
  };

  return (
    <div className="parent-container">
      <div className="pubs-title">Awards</div>
      <div
        className={`publications ${isBoxExpanded(0) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(0)}
      >
        NSF Graduate Research Fellowship Program (2023 - 2028)
      </div>
      <div
        className={`publications ${isBoxExpanded(1) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(1)}
      >
        Deans Excellence Fellowship (2023 - 2028)
      </div>
      <div
        className={`publications ${isBoxExpanded(2) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(2)}
      >
        Professional Development Award, OPAM (2022)
      </div>
      <div className="pubs-title">Conference Presentations</div>
      <div
        className={`publications ${isBoxExpanded(3) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(3)}
      >
        Paternoster, N., Andrews, A., Williams, J., Dague, T., Sobel, K. V., & Puri, A. (Nov. 2021). Eye movements to targets and distractors: insights into the size congruity effect in visual search. [Speaker] Object Perception, visual Attention, and visual Memory.
      </div>
      <div
        className={`publications ${isBoxExpanded(4) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(4)}
      >
        Paternoster, N., Andrews, E., Lee, K., Sobel, K. V., & Puri, A. (Nov. 2021). Effects of set size on ensemble processing of semantic information. [Speaker] Chalk Talk, College of Natural Sciences and Mathematics, University of Central Arkansas.
      </div>
      <div
        className={`publications ${isBoxExpanded(5) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(5)}
      >
        Paternoster, N., Lee, K., Dague, T., Sobel, K. V., & Puri, A. (Nov. 2020). Visual search of digits and the processing pathway of interaction between semantic and perceptual information. [Speaker] Research and Industry Day. Louisiana State University. (Third Place Award)
      </div>
      <div className="pubs-title">Conference Posters</div>
      <div
        className={`publications ${isBoxExpanded(6) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(6)}
      >
        Paternoster, N., Wilson, N.T., Andrews, E.R., Sobel, K. V., & Puri, A. (Nov. 2022). Eye movements reveal interactions between the SNARC and size congruity effects. [Presenter] Object Perception, visual Attention, and visual Memory.
      </div>
      <div
        className={`publications ${isBoxExpanded(7) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(7)}
      >
        Puri, A., Dague, T., Sobel, K., Paternoster, N. (May 2022). Interaction Between SNARC and Size Congruity Effects Revealed by Eye Movements. [Co-Author] Vision Sciences Society Annual Meeting. 
      </div>
      <div
        className={`publications ${isBoxExpanded(8) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(8)}
      >
        Dacus, C., Paternoster, N., Ezeana, M., Teng, S., & Puri., A. (Nov. 2021). The Spatial Resolution of Object Discrimination Across Echolocation and Touch Interpreting sensation: Quantifying the bottleneck of information transfer between echolocation. [Co-Author] Object Perception, visual Attention, and visual Memory. (First Place Award) 
      </div>
      <div
        className={`publications ${isBoxExpanded(9) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(9)}
      >
        Paternoster, N., Ezeana, M., Teng, S., & Puri., A. (Oct. 2021). Slower Eye Movements to Incongruent Targets May Underlie the SCE In Digit Perception. [Presenter] Arkansas Idea Network of Biomedical Research Excellence
      </div>
      <div
        className={`publications ${isBoxExpanded(10) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(10)}
      >
        Puri, A., Dague, T., Sobel, K., Paternoster, N. (May 2021). Eye movements and interactions between numerical and physical size in visual search for digits. [Co-Author] Vision Sciences Society Annual Meeting.  
      </div>
      <div
        className={`publications ${isBoxExpanded(11) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(11)}
      >
        Wilson, N.T., Paternoster, N., Dacus, C., Sobel, K., & Puri., A. (May 2021). Is There a SNARC Effect in The Size Congruity Effect?. [Co-Author] Vision Sciences Society Annual Meeting.  
      </div>
      <div
        className={`publications ${isBoxExpanded(12) ? 'expanded' : ''}`}
        onClick={() => handleBoxClick(12)}
      >
        RAID - Paternoster, N., Lee, K., Dague, T., Sobel, K. V., & Puri, A. (Oct. 2020). Effects of set size on ensemble processing of semantic information. [Presenter] Research and Industry Day. Louisiana State University. 
      </div>
    </div>
  );
}
