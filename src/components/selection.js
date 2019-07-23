// src/components/Selection.js
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
 user: PropTypes.object
};

const Selection = ({ user }) => (
    <ul>
        <li>Name: { user.name }</li>
        <li>Username: { user.username }</li>
        <li>Phone: { user.phone }</li>
        <li>Email: <a href={`mailto:${user.email}`}>{user.email}</a></li>
    </ul>
);
Selection.propTypes = propTypes;

export default Selection;
