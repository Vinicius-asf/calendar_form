import React, { Component } from 'react';

class Form extends Component {
    state = {  }
    render() { 
        return (
                <form className="container" action="submit">
                    <label className="row" htmlFor="name">
                        Nome:
                        <input type="text" name="name" id="name"/>
                    </label>
                    <label className="row" htmlFor="email">
                        E-mail:
                        <input type="email" name="email" id="email"/>
                    </label>
                    <label className="row" htmlFor="date">
                        Data:
                        <input type="text" name="date" id="date"/>
                    </label>
                    <label className="row" htmlFor="time">
                        Horário:
                        <input type="text" name="time" id="time"/>
                    </label>
                    <label className="row" htmlFor="plan">
                        Plano de Saúde:
                        <input type="text" name="plan" id="plan"/>
                    </label>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        );
    }
}
 
export default Form;