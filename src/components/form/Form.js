import React, { Component } from 'react';
import './form.scss'

class Form extends Component {
    render() {
        return (
            <div className='todo-form'>
                <form>
                    <input type='text' placeholder=' ' name='name' />
                    <button
                        className='todo-save'
                        placeholder='Input todo'
                        type='submit'
                    >
                        SAVE
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;