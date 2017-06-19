import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	user: PropTypes.object
};

const Selection = ({ user }) => {
	return (
		<ul>
			<li><i className="fa fa-book fa-fw"></i> Name: { user.name }</li>
			<li><i className="fa fa-user fa-fw"></i> Username: { user.username }</li>
			<li><i className="fa fa-phone fa-fw"></i> Phone: { user.phone }</li>
			<li><i className="fa fa-envelope fa-fw"></i> Email: <a href={`mailto:${user.email}`}>{user.email}</a></li>
		</ul>
	);
};

Selection.propTypes = propTypes;

export default Selection;
