import React, { useState } from 'react';
import icon from '../../../public/icon-source.svg';
import './content.scss';

const Content = (props) => {
	const [displayText, setDisplayText] = useState(props.overview.content);
	const [displayImage, setDisplayImage] = useState(props.images.planet);

	const [isActive, setIsActive] = useState(false);
	const addClassActive = () => {
		setIsActive(true);
	};
	const removeClassActive = () => {
		setIsActive(false);
	};

	const [buttonData, setButtonData] = useState([
		{
			number: '01',
			text: 'overview',
			isHeld: true,
			id: 1,
		},
		{
			number: '02',
			text: 'structure',
			isHeld: false,
			id: 2,
		},
		{
			number: '03',
			text: 'surface',
			isHeld: false,
			id: 3,
		},
	]);

	const buttonClick = (event) => {
		setButtonData((prevButtons) => {
			return prevButtons.map((button) => {
				if (button.id == event.target.id) {
					return { ...button, isHeld: true };
				} else return { ...button, isHeld: false };
			});
		});

		if (event.target.id == 1) {
			setDisplayText(props.overview.content);
			setDisplayImage(props.images.planet);
			removeClassActive();
		} else if (event.target.id == 2) {
			setDisplayText(props.structure.content);
			setDisplayImage(props.images.internal);
			removeClassActive();
		} else if (event.target.id == 3) {
			setDisplayText(props.geology.content);
			setDisplayImage(props.images.planet);
			addClassActive();
		}
	};

	const buttons = buttonData.map((button) => {
		return (
			<button
				id={button.id}
				key={button.id}
				className={button.isHeld ? 'active' : ' '}
				onClick={buttonClick}>
				<span className="num">{button.number}</span>
				{button.text}
			</button>
		);
	});

	return (
		<div className="container">
			<div className={`planet-card ${props.name}`}>
				<nav className="planet-card__nav">{buttons}</nav>
				<div className="planet-card__image">
					<img
						src={displayImage}
						alt={props.name}
					/>
					<img
						className={`geology-image ${isActive ? 'active' : ''}`}
						src={props.images.geology}
						alt={`${props.name} geology`}
					/>
				</div>
				<div className="planet-card__info">
					<div className="header">{props.name}</div>
					<div className="text">{displayText}</div>
					<div className="link">
						Source
						<a
							href="{props.overview.source}"
							className="source">
							Wikipedia
							<div className="visually-hidden">
								External link to Wikipedia about the planet {props.name}
							</div>
						</a>
						<img
							src={icon}
							alt=""
							aria-hidden="true"
						/>
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
