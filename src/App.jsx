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
				<Route exact path="Planets_Fact_Site/Mars" element={<Mars />} />
				<Route
					exact
					path="Planets_Fact_Site/Mercury"
					element={<Mercury />}
				/>
				<Route
					exact
					path="Planets_Fact_Site/Neptune"
					element={<Neptune />}
				/>
				<Route
					exact
					path="Planets_Fact_Site/Saturn"
					element={<Saturn />}
				/>
				<Route
					exact
					path="Planets_Fact_Site/Uranus"
					element={<Uranus />}
				/>
				<Route
					exact
					path="Planets_Fact_Site/Venus"
					element={<Venus />}
				/>
			</Routes>
		</>
	);
};

export default App;


// http://localhost:5176/Planets_Fact_Site/jupiter/planet-jupiter.svg