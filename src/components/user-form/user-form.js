import React from 'react';

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: props.user ? props.user.surname : '',
            name: props.user ? props.user.name : '',
            patronymic: props.user ? props.user.patronymic : '',
            birthday: props.user ? props.user.birthday : '',
            sex: props.user ? props.user.sex : '',
            location: props.user ? props.user.location : '',
            error: '',
        };
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name: name }));
    }

    onSurnameChange = (e) => {
        const surname = e.target.value;
        this.setState(() => ({ surname: surname }));
    }

    onPatronymicChange = (e) => {
        const patronymic = e.target.value;
        this.setState(() => ({ patronymic: patronymic }));
    }

    onBirthdayChange = (e) => {
        const birthday = (e.target.value);
        this.setState(() => ({ birthday: birthday }));
    }

    onSexChange = (e) => {
        const sex = (e.target.value);
        this.setState(() => ({ sex: sex }));
    }

    onLocationChange = (e) => {
        const location = (e.target.value);
        this.setState(() => ({ location: location }));
    }
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.name ||
            !this.state.surname ||
            !this.state.patronymic ||
            !this.state.birthday ||
            !this.state.sex ||
            !this.state.location) {
            this.setState(() => ({ error: 'Введите все поля' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitUser(
                {
                    name: this.state.name,
                    surname: this.state.surname,
                    patronymic: this.state.patronymic,
                    birthday: this.state.birthday,
                    sex: this.state.sex,
                    location: this.state.location,
                }
            );
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="error">{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className="add-user-form">

                    <input
                        type="text"
                        placeholder="Name"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <br />

                    <input
                        type="text"
                        placeholder="Surname"
                        value={this.state.surname}
                        onChange={this.onSurnameChange}
                    />
                    <br />

                    <input
                        type="text"
                        placeholder="Patronymic"
                        value={this.state.patronymic}
                        onChange={this.onPatronymicChange}
                    />
                    <br />

                    <input
                        type="date"
                        placeholder="birthday"
                        value={this.state.birthday}
                        onChange={this.onBirthdayChange}
                    />
                    <br />

                    <p
                        // className="input__sex"
                        onChange={this.onSexChange}
                    >

                        <label>
                            <input
                                type="radio"
                                placeholder="Sex"
                                name="select-sex"
                                value="male"
                                className="input__sex"
                            /> male
                        </label>
                        <label>
                            <input
                                type="radio"
                                placeholder="Sex"
                                name="select-sex"
                                value="female"
                                className="input__sex"
                            />female
                        </label>

                    </p>

                    <input
                        type="text"
                        placeholder="Location"
                        value={this.state.location}
                        onChange={this.onLocationChange}
                    />
                    <br />

                    <button className="button__submit">{this.props.buttonName}</button>
                </form>
            </div>
        );
    }
}