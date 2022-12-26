import React from 'react';

const Content = (props) => {
	return (
		<div className="planet-card">
			<nav className="planet-card__nav">
				<button>Overview</button>
				<button>Structure</button>
				<button>Surface</button>
			</nav>
			<img
				src={props.images.planet}
				alt={props.name}
				className="planet-card__image"
			/>
			<div className="planet-card__info">
				<div className="header">{props.name}</div>
				<div className="text">{props.overview.content}</div>
				<a href="#nogo" className="source">
					{props.overview.source} --icon--
				</a>
			</div>
			<div className="planet-card__stats">
				<div className="stat-card">
					<div className="header">Rotation Time</div>
					<div className="stat">{props.rotation}</div>
				</div>
				<div className="stat-card">
					<div className="header">Revolution Time</div>
					<div className="stat">{props.revolution}</div>
				</div>
				<div className="stat-card">
					<div className="header">Radius</div>
					<div className="stat">{props.radius}</div>
				</div>
				<div className="stat-card">
					<div className="header">AVERAGE TEMP. Average temp.</div>
					<div className="stat">{props.temperature}</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
