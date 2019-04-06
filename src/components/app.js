import React, { PureComponent } from 'react';
import { observer } from 'mobx-react';
import {mainColor as color} from '../constants';
import RegistrationForm from '../containers/registration-form'
import form from '../models/form'

@observer
export default class App extends PureComponent {
	render() {
		return (
			<div className="registration">
				<h1 style={{color}}>Registro</h1>
				<RegistrationForm model={form} />
			</div>
		);
	}
}
