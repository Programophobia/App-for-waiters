import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import Loading from '../../common/Loading';

const Main = () => {
	const tables = useSelector((state) => getAllTables(state));
	if (tables.length === 0) {
		return <Loading />;
	}
	return (
		<div >
			<h2 className='fs-1 mx-3 my-4'>All tables</h2>
			<ul className='list-group list-group-flush'>
				{tables.map((table) => (
					<li className='list-group-item d-flex flex-row justify-content-between shadow-lg p-3 mb-5 bg-body rounded'
						key={table.id}>
						<div className='d-flex flex-row'>
							<h5 className='fs-3'><i className="fa-solid fa-chair"></i> Table {table.id}</h5>
							<h5 className='mx-4 mt-2 position-absolute top-30 start-50'>
								<span>
									<strong>Status: </strong>
								</span>
								<span className='alert alert-success'>{table.status}</span>
							</h5>
						</div>
						<Link key={table.id} to={'/table/' + table.id}>
							<Button>Show more</Button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Main;