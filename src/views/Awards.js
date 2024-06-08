import React from 'react';
import '../styles/PubsStyle.css';
import cornellSeal from '../images/cornell_seal.png';
import opamSeal from '../images/opam.png';
import nsfSeal from '../images/nsf.png';

export default function Awards() {
  const talks = [
    {
      year: "2021",
      date: "Nov. 2021",
      details: "Eye movements to targets and distractors: insights into the size congruity effect in visual search.",
      event: "Object Perception, Visual Attention, and Visual Memory",
      speakers: ["Paternoster, N.", "Andrews, A.", "Williams, J.", "Dague, T.", "Sobel, K. V.", "Puri, A."],
      role: "[Speaker]"
    },
    {
      year: "2021",
      date: "Nov. 2021",
      details: "Effects of set size on ensemble processing of semantic information.",
      event: "Chalk Talk, College of Natural Sciences and Mathematics, University of Central Arkansas",
      speakers: ["Paternoster, N.", "Andrews, E.", "Lee, K.", "Sobel, K. V.", "Puri, A."],
      role: "[Speaker]"
    },
    {
      year: "2020",
      date: "Nov. 2020",
      details: "The processing pathway of interaction between semantic and perceptual information.",
      event: "Research and Industry Day. Louisiana State University",
      speakers: ["Paternoster, N.", "Lee, K.", "Dague, T.", "Sobel, K. V.", "Puri, A."],
      role: "[Speaker]",
      award: "(Third Place Award)"
    }
  ];

  const posters = [
    {
      year: "2022",
      date: "Nov. 2022",
      details: "Eye movements reveal interactions between the SNARC and size congruity effects.",
      event: "Object Perception, Visual Attention, and Visual Memory",
      speakers: ["Paternoster, N.", "Wilson, N.T.", "Andrews, E.R.", "Sobel, K. V.", "Puri, A."],
      role: "[Presenter]"
    },
    {
      year: "2022",
      date: "May 2022",
      details: "Interaction Between SNARC and Size Congruity Effects Revealed by Eye Movements.",
      event: "Vision Sciences Society Annual Meeting",
      speakers: ["Puri, A.", "Dague, T.", "Sobel, K.", "Paternoster, N."],
      role: "[Co-Author]"
    },
    {
      year: "2021",
      date: "Nov. 2021",
      details: "The Spatial Resolution of Object Discrimination Across Echolocation and Touch Interpreting sensation: Quantifying the bottleneck of information transfer between echolocation.",
      event: "Object Perception, Visual Attention, and Visual Memory",
      speakers: ["Dacus, C.", "Paternoster, N.", "Ezeana, M.", "Teng, S.", "& Puri, A."],
      role: "[Co-Author]",
      award: "(First Place Award)"
    },
    {
      year: "2021",
      date: "Oct. 2021",
      details: "Slower Eye Movements to Incongruent Targets May Underlie the SCE In Digit Perception.",
      event: "Arkansas Idea Network of Biomedical Research Excellence",
      speakers: ["Paternoster, N.", "Ezeana, M.", "Teng, S.", "& Puri, A."],
      role: "[Presenter]"
    },
    {
      year: "2021",
      date: "May 2021",
      details: "Eye movements and interactions between numerical and physical size in visual search for digits.",
      event: "Vision Sciences Society Annual Meeting",
      speakers: ["Puri, A.", "Dague, T.", "Sobel, K.", "Paternoster, N."],
      role: "[Co-Author]"
    },
    {
      year: "2021",
      date: "May 2021",
      details: "Is There a SNARC Effect in The Size Congruity Effect?.",
      event: "Vision Sciences Society Annual Meeting",
      speakers: ["Wilson, N.T.", "Paternoster, N.", "Dacus, C.", "Sobel, K.", "& Puri, A."],
      role: "[Co-Author]"
    },
    {
      year: "2020",
      date: "Oct. 2020",
      details: "Effects of set size on ensemble processing of semantic information.",
      event: "Research and Industry Day. Louisiana State University",
      speakers: ["Paternoster, N.", "Lee, K.", "Dague, T.", "Sobel, K. V.", "Puri, A."],
      role: "[Presenter]",
      award: "(Third Place Award)"
    }
  ];

  return (
    <div className="parent-container">
      <div className="presenter-title">Awards</div>
      <div className="award-entry">
        <div className="award-images">
          <img src={cornellSeal} alt="Cornell University Seal" className="award-image" />
          <img src={nsfSeal} alt="NSF Seal" className="award-image" />
          <img src={opamSeal} alt="OPAM Seal" className="award-image" />
        </div>
      </div>
      <div className="presenter-title">Conference Presentations</div>
      {talks.map((talk, index) => (
        <div key={index}>
         <p className="centered-text-conferences"> <strong>{talk.details}</strong><br></br>{talk.role}<br></br> {talk.event}. {talk.date}. {talk.award || ''}</p>
        </div>
      ))}
      <div className="presenter-title">Conference Posters</div>
      {posters.map((poster, index) => (
        <div key={index}>
          <p className="centered-text-conferences"><strong>{poster.details}</strong><br></br>{poster.role}<br></br>{poster.event}. {poster.award || ''}</p>
        </div>
      ))}
    </div>
  );
}
