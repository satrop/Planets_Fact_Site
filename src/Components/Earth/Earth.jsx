import React from 'react';
import Content from '../Content/Content';
import data from '../../assets/data.json';

const Earth = () => {
	const contentData = data.map((item) => {
		return <Content key={item.name} {...item} />;
	});

	return <>{contentData[2]}</>;
};

export default Earth;
