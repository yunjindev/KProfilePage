import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './logoSearch.css'

export function LogoSearch() {
  return (
    <div className="container">
      <img src="src/assets/herald_logo-2.png" />
      <div className="searchBar">
        <input type="text" placeholder="Type here to search..." />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/>
      </div>
    </div>
  );
}