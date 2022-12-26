import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Earth from './Components/Earth/Earth';
import Jupiter from './Components/Jupiter/Jupiter';
import Mars from './Components/Mars/Mars';
import Mercury from './Components/Mercury/Mercury';
import Neptune from './Components/Neptune/Neptune';
import Saturn from './Components/Saturn/Saturn';
import Uranus from './Components/Uranus/Uranus';
import Venus from './Components/Venus/Venus';

import './App.scss';

const App = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route exact path="Planets_Fact_Site/" element={<Earth />} />
				<Route
					exact
					path="Planets_Fact_Site/Jupiter/"
					element={<Jupiter />}
				/>
				{/* <Route exact path="/Mars" element={<Mars />} />
				<Route exact path="/Mercury" element={<Mercury />} />
				<Route exact path="/Neptune" element={<Neptune />} />
				<Route exact path="/Saturn" element={<Saturn />} />
				<Route exact path="/Uranus" element={<Uranus />} />
				<Route exact path="/Venus" element={<Venus />} /> */}
			</Routes>
		</>
	);
};

export default App;
