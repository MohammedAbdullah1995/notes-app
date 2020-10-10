import React from 'react';
import './add-note.scss';
import addNoteIcon from '../../globalStyles/images/add.png';
import errorIcon from '../../globalStyles/images/error.png';
import { useForm } from 'react-hook-form';


export default function AddNote({ addNote }) {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className="wrapper">

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="row">

                    <div className="col-md-9">

                        <div className="m-3">

                            <input className={errors.title && 'invalid'} name="title" ref={register({ required: true })} type="text" placeholder="Title" />
                            
                        </div>

                        <div>

                            <textarea name="content" ref={register({ required: true })} className="m-3" placeholder="content"></textarea>

                            {errors.content && <img className="error-icon" src={errorIcon} height="20px" alt="" />}

                            {errors.content && <p className="error-message">this field is required</p>}

                        </div>

                    </div>

                    <div className="col-md-3 d-flex ">

                        <span className="mt-auto mb-4 ml-4">

                            <button>

                                <img height="30px" src={addNoteIcon} alt="" />

                            </button>

                        </span>
                    </div>

                </div>

            </form>
        </div>
    )

}