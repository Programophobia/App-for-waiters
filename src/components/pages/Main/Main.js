import { useDispatch, useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/store';


const Main = () => {

    const dispatch = useDispatch();
    const tables = useSelector(state => getAllTables(state));

    return (
        <div>
            <h1>All tables</h1>
            <ul className="list-group list-group-flush">
                    {tables.map(table =>
                        <li className="list-group-item">
                            <div>
                                <h2>Table {table.id}</h2>
                                <p><b>Status:</b> {table.status}</p>
                            </div>
                            <button>Show more</button>
                        </li>
                    )}
                </ul>

      
        </div>
    )
}

export default Main