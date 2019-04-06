import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { mainColor as color } from '../constants';

@observer
class RegistrationForm extends PureComponent {
  setName = (event, name) => this.props.model.setName(name);
  setBirthday = (event, birthday) => {
    this.props.model.setBirthday(birthday);
  };
  setEmail = (event, email) => this.props.model.setEmail(email);
  setInstagram = (event, instagram) => this.props.model.setInstagram(instagram);
  setPhone = (event, phone) => this.props.model.setPhone(phone);
  setSchool = (event, school) => this.props.model.setSchool(school);
  setGrade = (event, grade) => this.props.model.setGrade(grade);
  setMajor = (event, major) => this.props.model.setMajor(major);
  setIsStudent = () => this.props.model.setIsStudent(!this.props.model.student);
  closeModal = () => {
    this.props.model.clear();
    this.props.model.closeModal();
  };
  componentDidMount() {
    window.addEventListener('beforeunload', ev => {
      ev.preventDefault();
      return (ev.returnValue = 'Are you sure you want to close?');
    });
  }
  render() {
    if (!this.props.model) return null;
    if (this.props.model.loading)
      return <CircularProgress size={300} thickness={10} />;
    return (
      <form>
        <Dialog
          actions={[
            <RaisedButton
              label="Terminar"
              fullWidth
              primary
              onClick={this.closeModal}
            />
          ]}
          actionsContainerStyle={{
            padding: '0 24px 24px 24px'
          }}
          modal={false}
          open={this.props.model.modal}
        >
          <div>
            <h2 style={{ color, textAlign: 'center' }}>¡Felicidades!</h2>
            <p style={{ textAlign: 'center' }}>¡Bienvenid@ al evento!</p>
          </div>
        </Dialog>
        <p className="error-text">{this.props.model.error}</p>
        <TextField
          floatingLabelText="Nombre Completo *"
          fullWidth
          value={this.props.model.name}
          onChange={this.setName}
        />
        <TextField
          floatingLabelText="Número de teléfono *"
          fullWidth
          value={this.props.model.phone}
          onChange={this.setPhone}
        />
        <TextField
          floatingLabelText="Cuenta de Instagram *"
          fullWidth
          value={this.props.model.instagram}
          onChange={this.setInstagram}
        />
        <div style={{ textAlign: 'right', paddingTop: 30 }}>
          <span style={{ display: 'inline-block', width: 190 }}>
            <Checkbox
              label="Soy Estudiante"
              checked={this.props.model.student}
              onCheck={this.setIsStudent}
            />
          </span>
        </div>
        <div style={{ display: this.props.model.student ? 'block' : 'none' }}>
          <TextField
            floatingLabelText="Escuela / Colegio"
            fullWidth
            value={this.props.model.school}
            onChange={this.setSchool}
          />
          <TextField
            floatingLabelText="Carrera"
            fullWidth
            value={this.props.model.major}
            onChange={this.setMajor}
          />
          <TextField
            floatingLabelText="Semestre / Grado"
            fullWidth
            value={this.props.model.grade}
            onChange={this.setGrade}
          />
        </div>
        <div className="button-container">
          <RaisedButton
            label="Registrar"
            fullWidth
            primary
            disabled={!this.props.model.ready}
            onClick={this.props.model.submit}
          />
        </div>
      </form>
    );
  }
}

RegistrationForm.propTypes = {
  model: PropTypes.object,

};

export default RegistrationForm;
