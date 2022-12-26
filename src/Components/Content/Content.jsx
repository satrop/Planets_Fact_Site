import React, { useState } from 'react';
import icon from '../../../public/icon-source.svg';
import './content.scss';

const Content = (props) => {
	const [displayText, setDisplayText] = useState(props.overview.content);
	const [displayImage, setDisplayImage] = useState(props.images.planet);

	return (
		<div className="container">
			<div className={`planet-card ${props.name}`}>
				<nav className="planet-card__nav">
					<button
						className="active"
						onClick={() => {
							setDisplayText(props.overview.content);
							setDisplayImage(props.images.planet);
						}}
					>
						<span className="num">01</span>
						<span>Overview</span>
					</button>
					<button
						onClick={() => {
							setDisplayText(props.structure.content);
							setDisplayImage(props.images.internal);
						}}
					>
						<span className="num">02</span>
						<span>Structure</span>
					</button>
					<button
						onClick={() => {
							setDisplayText(props.geology.content);
							setDisplayImage(props.images.planet);
						}}
					>
						<span className="num">03</span>
						<span>Surface</span>
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
					<div className="link">
						Source
						<a href="{props.overview.source}" className="source">
							Wikipedia
							<div className="visually-hidden">
								External link to Wikipedia about the planet{' '}
								{props.name}
							</div>
						</a>
						<img src={icon} alt="" aria-hidden="true" />
					</div>
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
						<div className="header">Average temp.</div>
						<div className="stat">{props.temperature}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
