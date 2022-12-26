import React from 'react';
import Content from '../Content/Content';
import data from '../../assets/data.json';

const Venus = () => {
	const contentData = data.map((item) => {
		return <Content key={item.name} {...item} />;
	});

	return <>{contentData[1]}</>;
};

export default Venus;
