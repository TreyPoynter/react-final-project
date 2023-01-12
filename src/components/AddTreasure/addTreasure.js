import {nanoid} from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import '../style/addTreasure.css'

function AddTreasure(props) {

    const createTreasure = () => {
        const newTreasure = {'id': nanoid(), 'name': props.name, 'goldAmount': props.goldAmount, 'spawnRate': props.spawnRate, 'image': URL.createObjectURL(props.selectedFile)}
        props.addTreasure(newTreasure);
    }

    const imageUpdate = (evt) => {
        props.setSelectedFile(evt.target.files[0])
    }

    return(
        <div className="row mb-4" id='addTreasure'>
            <div className="col-lg-3 col-md-6">
                <label className="form-label" htmlFor="txtName">Enter Name for Treasure :</label>
                <input className="form-control" type="text" name="txtName" id="txtName" onChange={(evt) => props.setName(evt.currentTarget.value)} value={props.name} />
            </div>
            <div className="col-lg-3 col-md-6">
                <label className="form-label" htmlFor="numGold">Enter the Gold Amount :</label>
                <input className="form-control" type="text" name="numGold" id="numGold" onChange={(evt) => props.setGoldAmount(evt.currentTarget.value)} value={props.goldAmount} />
            </div>
            <div className="col-lg-3 col-md-6">
                <label className="form-label" htmlFor="numSpawn">Enter the Spawn Rate :</label>
                <input className="form-control" type="text" name="numSpawn" id="numSpawn" onChange={(evt) => props.setSpawnRate(evt.currentTarget.value)} value={props.spawnRate} />
            </div>
            <div className="col-lg-3 col-md-6">
            <label className="form-label" htmlFor="fileUpload">Select a Photo :</label>
                <input className="form-control" type="file" name="file" id="fileUpload" onChange={imageUpdate} />
            </div>
            <div className="d-flex justify-content-around mt-4">
                 <button className="btn btn-lg btn-primary" type="button" id="btnAdd" onClick={createTreasure}>Add Treasure <FontAwesomeIcon icon={faCirclePlus}/></button>
            </div>
        </div>
    )
}

export default AddTreasure;