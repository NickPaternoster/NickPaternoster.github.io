import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/PubsStyle.css';
import cornellSeal from '../images/cornell_seal.png';
import opamSeal from '../images/opam.png';
import nsfSeal from '../images/nsf.png';

export default function Awards() {

  return (
    <div className="parent-container">
      <div className="pubs-title">Awards</div>

      
      <div className="award-entry">
        <div className="award-images">
        <img src={cornellSeal} alt="Cornell University Seal" className="award-image" />
          <img src={nsfSeal} alt="NSF Seal" className="award-image" />
          <img src={opamSeal} alt="OPAM Seal" className="award-image" />
        </div>
      </div>
        


      <div className="pubs-title">Conference Presentations</div>

      <div>
        Paternoster, N., Andrews, A., Williams, J., Dague, T., Sobel, K. V., & Puri, A. (Nov. 2021). Eye movements to targets and distractors: insights into the size congruity effect in visual search. [Speaker] Object Perception, visual Attention, and visual Memory.
      </div>

      <div>
        Paternoster, N., Andrews, E., Lee, K., Sobel, K. V., & Puri, A. (Nov. 2021). Effects of set size on ensemble processing of semantic information. [Speaker] Chalk Talk, College of Natural Sciences and Mathematics, University of Central Arkansas.
      </div>

    <div>
        Paternoster, N., Lee, K., Dague, T., Sobel, K. V., & Puri, A. (Nov. 2020). Visual search of digits and the processing pathway of interaction between semantic and perceptual information. [Speaker] Research and Industry Day. Louisiana State University. (Third Place Award)
      </div>
      <div className="pubs-title">Conference Posters</div>
      <div>
        Paternoster, N., Wilson, N.T., Andrews, E.R., Sobel, K. V., & Puri, A. (Nov. 2022). Eye movements reveal interactions between the SNARC and size congruity effects. [Presenter] Object Perception, visual Attention, and visual Memory.
      </div>

      <div>
        Puri, A., Dague, T., Sobel, K., Paternoster, N. (May 2022). Interaction Between SNARC and Size Congruity Effects Revealed by Eye Movements. [Co-Author] Vision Sciences Society Annual Meeting. 
      </div>
      <div>
        Dacus, C., Paternoster, N., Ezeana, M., Teng, S., & Puri., A. (Nov. 2021). The Spatial Resolution of Object Discrimination Across Echolocation and Touch Interpreting sensation: Quantifying the bottleneck of information transfer between echolocation. [Co-Author] Object Perception, visual Attention, and visual Memory. (First Place Award) 
      </div>
      <div>
        Paternoster, N., Ezeana, M., Teng, S., & Puri., A. (Oct. 2021). Slower Eye Movements to Incongruent Targets May Underlie the SCE In Digit Perception. [Presenter] Arkansas Idea Network of Biomedical Research Excellence
      </div>
      <div>
        Puri, A., Dague, T., Sobel, K., Paternoster, N. (May 2021). Eye movements and interactions between numerical and physical size in visual search for digits. [Co-Author] Vision Sciences Society Annual Meeting.  
      </div>
      <div>
        Wilson, N.T., Paternoster, N., Dacus, C., Sobel, K., & Puri., A. (May 2021). Is There a SNARC Effect in The Size Congruity Effect?. [Co-Author] Vision Sciences Society Annual Meeting.  
      </div>
      <div>
        RAID - Paternoster, N., Lee, K., Dague, T., Sobel, K. V., & Puri, A. (Oct. 2020). Effects of set size on ensemble processing of semantic information. [Presenter] Research and Industry Day. Louisiana State University. 
      </div>
    </div>
  );
}
