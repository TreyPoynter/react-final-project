import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../style/searchTreasure.css';

let keyword;

function SearchTreasure(props) {
    const [keywords, setKeywords] = useState('');
    keyword = keywords;
    return(
        <div className="row mb-4" id="searchTreasure">
            <div className="col-lg-3">
                <label className="form-label" htmlFor="txtKeywords">Search by Name :</label>
                <input className="form-control" type="text" placeholder="Castaways Chest" onChange={evt => setKeywords(evt.currentTarget.value)} value={keywords}/>
            </div>
            <div className="d-flex justify-content-around mt-4">
                <button className="btn btn-lg btn-secondary" type="button" id="btnSearch" onClick={props.searchTreasure}>Search Treasure <FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>
        </div>
    );
}
export {keyword};
export default SearchTreasure;