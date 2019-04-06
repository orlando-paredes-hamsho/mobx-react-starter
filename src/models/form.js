import { observable, computed, action } from 'mobx';
import {validateEmail} from '../utils/validators'
import {database} from '../'
import moment from 'moment';

class FormStore {
	@observable name = '';
	@observable email = '';
	@observable instagram = '';
	@observable phone = '';
	@observable school = '';
	@observable major = '';
	@observable grade = '';
	@observable student = false;
	@observable birthday = null;
	@observable modal = false;
	@observable date = null;
	@observable loading = false;

	@computed get ready() {
		return this.name && this.phone && this.instagram
	}

	@computed get validEmail() {
		return validateEmail(this.email)
	}

	@computed get params() {
		return {
			email: this.email,
			nombre: this.name,
			fecha_de_nacimiento: (this.birthday) ? this.birthday.toString() : this.birthday,
			telefono: this.phone,
			escuela: this.school,
			carrera: this.major,
			semestre: this.grade,
			instagram: this.instagram,
			fecha_de_registro: this.date
		}
	}

	@action setName = (name) => {
		if (typeof name !== 'string') return;
		this.name = name;
	}

	@action setInstagram = (instagram) => {
		if (typeof instagram !== 'string') return;
		this.instagram = instagram;
	}

	@action setEmail = (email) => {
		if (typeof email !== 'string') return;
		this.email = email;
	}

	@action setPhone = (phone) => {
		if (typeof phone !== 'string') return;
		this.phone = phone;
	}

	@action setSchool = (school) => {
		if (typeof school !== 'string') return;
		this.school = school;
	}

	@action setMajor = (major) => {
		if (typeof major !== 'string') return;
		this.major = major;
	}

	@action setIsStudent = (student) => {
		if (typeof student !== 'boolean') return;
		this.student = student;
	}

	@action setGrade = (grade) => {
		if (typeof grade !== 'string') return;
		this.grade = grade;
	}

	@action setBirthday = (birthday) => {
		if (typeof birthday !== 'object') return;
		this.birthday = birthday;
	}

	@action setError = (error) => {
		if (typeof error !== 'string') return;
		this.error = error;
	}

	@action setLoading = (loading) => {
		if (typeof loading !== 'boolean') return;
		this.loading = loading;
	}

	@action openModal = () => {
		this.modal = true;
	}

	@action closeModal = () => {
		this.modal = false;
	}

	@action clear = () => {
		this.name = '';
		this.email = '';
		this.birthday = null;
		this.error = '';
		this.phone = '';
		this.school = '';
		this.grade = '';
		this.major = '';
		this.instagram = '';
		this.student = false;
	}

	@action submit = () => {
		this.date = moment().format('MM/DD/YYYY h:mm:ss a');
		this.setLoading(true);
		database.ref('platica_jovenes').push(this.params, (error) => {
			if (error) {
				// Handle Error
				this.setLoading(false);
				this.setError('Lo sentimos, no pudimos registrarte, intentalo de nuevo.');
			} else {
				// Handle Success
				this.setLoading(false);
				this.openModal();
			}
		})
	}

}

const model = new FormStore();

export default model;
export { FormStore };
