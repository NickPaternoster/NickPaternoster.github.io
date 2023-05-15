import { NavLink } from 'react-router-dom';
import MenuBarStyle from '../styles/MenuBarStyle.css';
import { useParams } from 'react-router-dom';

function MenuBar(props) {
  const { id } = useParams();

  return (
    <nav>
      <ul id="menu">
        <li class="name">Nickolas Paternoster</li>

        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/research" activeClassName="active">Research</NavLink></li>
        <li><NavLink to="/cv" activeClassName="active">CV</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><a href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=vVLtL3cAAAAJ&gmla=AHoSzlV9YJAf5GCwXvJwKDascNwXyMyNb-jNUXUdSDargPDN_uLPz9WwJBE296hWzx4MzGA3nHSlcJLwHeHrw38yH2MVcexr2pqvCUQ" target="_blank"><img src="scholar.png" alt="Google Scholar" class="ico" /></a></li>
        <li><a href="https://github.com/NickPaternoster" target="_blank"><img src="github-mark.svg" alt="Github" class="ico" /></a></li>
        <li><a href="https://www.researchgate.net/profile/Nickolas-Paternoster" target="_blank"><img src="researchgate-svgrepo-com.svg" alt="ResearchGate" class="ico" /></a></li>
        <li><a href="https://www.linkedin.com/in/nickolas-paternoster-24b3211ba/" target="_blank"><img src="Linkedin_circle.svg" alt="LinkedIn" class="ico" /></a></li>
      </ul>
    </nav>
  );
}

export default MenuBar;
