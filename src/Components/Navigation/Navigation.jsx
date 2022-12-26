import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
	return (
		<nav>
			<li>
				<Link to="Planets_Fact_Site/">Earth</Link>
				<Link to="Planets_Fact_Site/jupiter/">Jupiter</Link>
				{/* <Link to="/mars">mars</Link>
				<Link to="/mercury">Mercury</Link>
				<Link to="/neptune">Neptune</Link>
				<Link to="/saturn">Saturn</Link>
				<Link to="/uranus">Uranus</Link>
				<Link to="/venus">Venus</Link> */}
			</li>
		</nav>
	);
};

export default Navigation;
