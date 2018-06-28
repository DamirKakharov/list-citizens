import React from 'react';

export default class DocrForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.doc ? props.doc.number : '',
            type: props.doc ? props.doc.type : '',
            fromMake: props.doc ? props.doc.fromMake : '',
            dateStart: props.doc ? props.doc.dateStart : '',
            dataEnd: props.doc ? props.doc.dataEnd : '',
            userId: props.doc ? props.doc.userId : props.userId,
            id: props.doc ? props.doc.id : props.userid,
            error: '',
        };
    }
    onNumberChange = (e) => {
        const number = e.target.value;
        this.setState(() => ({ number: number }));
    }

    onTypeChange = (e) => {
        const type = e.target.value;
        this.setState(() => ({ type: type }));
    }

    onFromMakeChange = (e) => {
        const fromMake = e.target.value;
        this.setState(() => ({ fromMake: fromMake }));
    }

    onDateStartChange = (e) => {
        const dateStart = (e.target.value);
        this.setState(() => ({ dateStart: dateStart }));
    }

    onDateEndChange = (e) => {
        const dataEnd = (e.target.value);
        this.setState(() => ({ dataEnd: dataEnd }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.type ||
            !this.state.number ||
            !this.state.fromMake ||
            !this.state.dateStart ||
            !this.state.dataEnd) {
            this.setState(() => ({ error: 'Введите все поля' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitDoc(
                {
                    type: this.state.type,
                    number: this.state.number,
                    fromMake: this.state.fromMake,
                    dateStart: this.state.dateStart,
                    dataEnd: this.state.dataEnd,
                    userId: this.state.userId,
                    id: this.state.i,
                },
            );
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="error">{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className="add-doc-form">

                    <input
                        type="text"
                        placeholder="Number"
                        autoFocus
                        value={this.state.number}
                        onChange={this.onNumberChange}
                    />
                    <br />

                    <input
                        type="text"
                        placeholder="Type Document"
                        value={this.state.type}
                        onChange={this.onTypeChange}
                    />
                    <br />

                    <input
                        type="text"
                        placeholder="Place of issue"
                        value={this.state.fromMake}
                        onChange={this.onFromMakeChange}
                    />
                    <br />

                    <input
                        type="date"
                        value={this.state.dateStart}
                        onChange={this.onDateStartChange}
                    />
                    <br />

                    <input
                        type="date"
                        value={this.state.dataEnd}
                        onChange={this.onDateEndChange}
                    />
                    <br />

                    <button className="button__submit" >{this.props.buttonName}</button>
                </form>
            </div>
        );
    }
}
