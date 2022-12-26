import React from 'react';
import Content from '../Content/Content';
import data from '../../assets/data.json';

const Mars = () => {
	const contentData = data.map((item) => {
		return <Content key={item.name} {...item} />;
	});

	return <>{contentData[3]}</>;
};

export default Mars;
