import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import hamburger from '../../../public/icon-hamburger.svg';
import './navigation.scss';

const Navigation = () => {
	const [isActive, setActive] = useState(true);
	const ToggleClass = () => {
		setActive(!isActive);
	};

	return (
		<nav className="main-nav">
			<Link
				className="logo"
				to="Planets_Fact_Site/">
				The Planets
			</Link>
			<button
				className={`menu-trigger ${isActive ? 'active' : ''}`}
				onClick={ToggleClass}
				aria-label="Open mobile menu">
				<img
					src={hamburger}
					alt=""
				/>
			</button>
			<ul className={isActive ? 'active' : ''}>
				<li>
					<Link
						onClick={ToggleClass}
						className="mercury"
						to="Planets_Fact_Site/mercury">
						Mercury
					</Link>
				</li>
				<li>
					<Link
						onClick={ToggleClass}
						className="venus"
						to="Planets_Fact_Site/venus">
						Venus
					</Link>
				</li>
				<li>
					<Link
						onClick={ToggleClass}
						className="earth"
						to="Planets_Fact_Site/">
						Earth
					</Link>
				</li>
				<li>
					<Link
						onClick={ToggleClass}
						className="mars"
						to="Planets_Fact_Site/mars">
						Mars
					</Link>
				</li>
				<li>
					<Link
						onClick={ToggleClass}
						className="jupiter"
						to="Planets_Fact_Site/jupiter/">
						Jupiter
					</Link>
				</li>
				<li>
					<Link
						onClick={ToggleClass}
						className="saturn"
						to="Planets_Fact_Site/saturn">
						Saturn
					</Link>
				</li>
				<li>
					<Link
						onClick={ToggleClass}
						className="uranus"
						to="Planets_Fact_Site/uranus">
						Uranus
					</Link>
				</li>
				<li>
					<Link
						onClick={ToggleClass}
						className="neptune"
						to="Planets_Fact_Site/neptune">
						Neptune
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
