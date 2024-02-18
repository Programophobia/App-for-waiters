import { updateTables } from '../../../redux/store';
import { useDispatch } from 'react-redux';

import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/store';
import { useEffect } from 'react';


const Table = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const table = useSelector(state => getTableById(state, id));
    return (

        
        <div><h1>Table {table[0].id}</h1>

        <form>
            <div>
                <label htmlFor="status"><b>Status:</b></label>
                <select  defaultValue={table[0].status.toLowerCase()} aria-label="Default select example">
                    <option value="busy">Busy</option>
                    <option value="reserved">Reserved</option>
                    <option value="free">Free</option>
                    <option value="cleaning">Cleaning</option>
                </select>
            </div>
            <div>
            <label htmlFor="people" className="form-label"><b>People:</b></label>
                        <input type="number" min="0" max="10" defaultValue={table[0].peopleAmount} id="people" /> / <input className="form-control" type="number" min="0" max="10" defaultValue={table[0].maxPeopleAmount} />
                    </div>
                    <div>
                        <label htmlFor="bill"><b>Bill:</b></label>
                        $ <input  type="number" min="0" defaultValue={table[0].bill} id="bill" />
                    </div>
                    <button className="btn btn-primary">Update</button>
        </form></div>
    )
}

export default Table