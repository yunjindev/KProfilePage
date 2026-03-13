import "./categories.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

export function Categories() {
    const categoryList = ["GIRL GROUPS", "BOY GROUPS", "CO-ED", "DUOS", "SOLOS", "J-POP", "C-POP", "ACTORS", "FACTS", "OTHERS", ]
    return (
        <div className="categoryContainer"> 
            {categoryList.map((item) => {
                 return (
                 <a href="#" key={item}>
                {item}    
                <FontAwesomeIcon className="arrow" icon={faSortDown} />
                </a>
                
                 )
            })}
            <a className="forum">FORUM</a>
        </div>
    )
}