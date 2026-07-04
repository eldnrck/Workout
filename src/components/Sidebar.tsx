import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
     <>
     <nav>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/workouts">Workouts</Link></li>
        </ul>
     </nav>

     </> 
    );
}

export default Sidebar;
