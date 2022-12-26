import React, { useState } from 'react';

const Content = (props) => {
	const [displayText, setDisplayText] = useState(props.overview.content);
	const [displayImage, setDisplayImage] = useState(props.images.planet);

	return (
		<div className="planet-card">
			<nav className="planet-card__nav">
				<button
					onClick={() => {
						setDisplayText(props.overview.content);
						setDisplayImage(props.images.planet);
					}}
				>
					Overview
				</button>
				<button
					onClick={() => {
						setDisplayText(props.structure.content);
						setDisplayImage(props.images.internal);
					}}
				>
					Structure
				</button>
				<button
					onClick={() => {
						setDisplayText(props.geology.content);
						setDisplayImage(props.images.planet);
					}}
				>
					Surface
				</button>
			</nav>
			<img
				src={displayImage}
				alt={props.name}
				className="planet-card__image"
			/>
			<div className="planet-card__info">
				<div className="header">{props.name}</div>
				<div className="text">{displayText}</div>
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
