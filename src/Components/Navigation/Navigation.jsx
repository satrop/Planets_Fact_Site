import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
	return (
		<nav>
			<li>
				<Link to="Planets_Fact_Site/">Earth</Link>
				<Link to="Planets_Fact_Site/jupiter/">Jupiter</Link>
				<Link to="Planets_Fact_Site/mars">mars</Link>
				<Link to="Planets_Fact_Site/mercury">Mercury</Link>
				<Link to="Planets_Fact_Site/neptune">Neptune</Link>
				<Link to="Planets_Fact_Site/saturn">Saturn</Link>
				<Link to="Planets_Fact_Site/uranus">Uranus</Link>
				<Link to="Planets_Fact_Site/venus">Venus</Link>
			</li>
		</nav>
	);
};

export default Navigation;
