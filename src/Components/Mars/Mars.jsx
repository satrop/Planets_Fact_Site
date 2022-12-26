import React from 'react';
import Content from '../Content/Content';
import data from '../../assets/data.json';
import './mars.scss';

const Mars = () => {
	const contentData = data.map((item) => {
		return <Content key={item.name} {...item} />;
	});

	return <>{contentData[3]}</>;
};

export default Mars;
