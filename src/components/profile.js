import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	user: PropTypes.object,
};

const Profile = (props) => {
	return (
		<li>
			<i className="fa fa-user"></i> { props.user.name }
		</li>
	);
};

Profile.propTypes = propTypes;

export default Profile;
