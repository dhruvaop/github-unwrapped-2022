import React from 'react';
import {BASE_COLOR} from '../palette';

export const button: React.CSSProperties = {
	appearance: 'none',
	WebkitAppearance: 'none',
	padding: '14px 20px',
	border: 0,
	color: 'white',
	backgroundColor: BASE_COLOR,
	borderRadius: 5,
	fontSize: 20,
	fontFamily: 'MonaSans',
	cursor: 'pointer',
	fontVariationSettings: '"wght" 700',
};

export const backButton: React.CSSProperties = {
	...button,
	backgroundColor: 'white',
	color: 'black',
};
