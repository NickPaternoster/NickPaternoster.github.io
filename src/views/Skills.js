import React from 'react';
import CVBoxes from '../components/CV_Boxes';
import cplus from '../images/C++_logo.png'; 
import matlab from '../images/matlab.png'; 
import ml from '../images/nn_scale.png'; 
import experimental from '../images/exp_des_scale.png'; 
import programming from '../images/prog_scale.png'; 

export default function Skills() {
  return (
    <div className="cv-box-container">
      <CVBoxes title = "C++" image = {cplus} percentage={100} experience="5 Years" environment="Academia"/>
      <CVBoxes title = "Python" image = "python.png" percentage={80} experience="2 Years" environment="Academia"/>
      <CVBoxes title = "MATLAB" image = {matlab} percentage={100} experience="3 Years" environment="Industry"/>
      <CVBoxes title = "Machine Learning" image = {ml} percentage={75} experience="2.5 Years" environment="Academia"/>
      <CVBoxes title = "Experimental Design" image = {experimental} percentage={60} experience="3 Years" environment="Academia"/>
      <CVBoxes title = "Other Technical Skills" image = {programming} percentage={50} experience="8 Years" environment="Both"/>
    </div>
  );
}
