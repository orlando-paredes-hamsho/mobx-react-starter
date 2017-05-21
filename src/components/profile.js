import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	onClick: PropTypes.func,
	selected: PropTypes.bool,
	user: PropTypes.object,
};

const Profile = (props) => {
	//If it's selected, highlight it.
	const classes = props.selected ? 'bold' : '';
	return (
		<li onClick={ props.onClick } className={classes}>
			<i className="fa fa-user"></i> { props.user.name }
		</li>
	);
};

Profile.propTypes = propTypes;

export default Profile;
