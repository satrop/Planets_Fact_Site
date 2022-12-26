import React from 'react';
import Content from '../Content/Content';
import data from '../../assets/data.json';

const Mercury = () => {
	const contentData = data.map((item) => {
		return <Content key={item.name} {...item} />;
	});

	return <>{contentData[0]}</>;
};

export default Mercury;
