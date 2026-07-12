import { Route, Routes} from 'react-router-dom';

import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import WelcomeDialog from './components/WelcomeDialog';

const App = () => {

  return(
      <>
      <WelcomeDialog />
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="workouts" element={<Workouts />} />
        </Route> 
      </Routes>
      </>
  );
}

export default App
