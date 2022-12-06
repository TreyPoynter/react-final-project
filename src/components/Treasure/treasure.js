import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faPencil, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Treasure(props){
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState('');
    const [goldAmount, setGoldAmount] = useState(0);
    const [spawnRate, setSpawnRate] = useState(0);

    useEffect(() => {
      setName(props.treasure.name);
      setGoldAmount(props.treasure.goldAmount);
      setSpawnRate(props.treasure.spawnRate);
    },[]);

    const saveTreasure = () => {
      const updatedTreasure = {name:name, goldAmount:goldAmount, spawnRate:spawnRate, id:props.treasure.id, image:props.treasure.image}
      props.editTreasureItem(updatedTreasure);
      setEditMode(false);
    }

    return(
        <div className="card mt-3">
            <img src={props.treasure.image} className="card-img-top" alt="treasure"/>
                {!editMode && <ul className="list-group list-group-flush">
                  <li className="list-group-item h4">{props.treasure.name}</li>
                  <li className="list-group-item">Gold Amount : {props.treasure.goldAmount}</li>
                  <li className="list-group-item">Spawn Rate : {props.treasure.spawnRate}</li>
                  <button className='btn btn-lg btn-danger' type='button' onClick={() => props.deleteTreasure(props.treasure)}>Delete Treasure <FontAwesomeIcon icon={faXmarkCircle}/></button>
                  <button className='btn btn-lg btn-warning' type='button' onClick={() => setEditMode(true)}>Edit <FontAwesomeIcon className="ms-1" icon={faPencil}/></button>
                </ul>}

                {editMode && <ul className="list-group list-group-flush">
                  <li className="list-group-item h4"><input className="form-control" type="text" value={name} onChange={(evt) => setName(evt.currentTarget.value)}/></li>
                  <li className="list-group-item"><input className="form-control" type="number" value={goldAmount} onChange={(evt) => setGoldAmount(evt.currentTarget.value)}/></li>
                  <li className="list-group-item"><input className="form-control" type="number" value={spawnRate} onChange={(evt) => setSpawnRate(evt.currentTarget.value)}/></li>
                  <button className='btn btn-lg btn-success' type='button' onClick={saveTreasure}>Save Edit<FontAwesomeIcon className="ms-2" icon={faCheckCircle}/></button>
                </ul>}
        </div>
    )
};
export default Treasure;