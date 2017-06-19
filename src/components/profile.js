import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	onClick: PropTypes.func,
	selected: PropTypes.bool,
	label: PropTypes.string
};

const Profile = ({onClick, label, selected}) => {
  //If it's selected, highlight it.
	const classes = selected ? 'bold' : '';
	return (
		<li onClick={onClick} className={classes}>
			{label}
		</li>
	);
};

Profile.propTypes = propTypes;
export default Profile;
