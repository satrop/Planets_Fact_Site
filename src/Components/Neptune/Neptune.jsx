import React from 'react';
import Content from '../Content/Content';
import data from '../../assets/data.json';

const Neptune = () => {
	const contentData = data.map((item) => {
		return <Content key={item.name} {...item} />;
	});

	return <>{contentData[7]}</>;
};

export default Neptune;
