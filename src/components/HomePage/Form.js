import React from 'react';
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <input type="checkbox" id="pop-up-form" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className='input input-bordered input-primary w-full max-w-xs mb-3'
                            placeholder='name'
                            type={"text"}
                            {...register("name", { required: true, maxLength: 15 })} />

                        <input
                            className='input input-bordered input-primary w-full max-w-xs mb-3'
                            placeholder='email'
                            type="email"
                            {...register("email", { required: true })} />

                        <input
                            className='input input-bordered input-primary w-full max-w-xs mb-3'
                            placeholder='phone number'
                            type="number"
                            {...register("number")} />

                        <input
                            className='input input-bordered input-primary w-full max-w-xs mb-3'
                            placeholder='hobby'
                            type={"text"}
                            {...register("name", { required: true, maxLength: 30 })} />
                        <br />

                        <input className='btn btn-primary w-full max-w-xs' type="submit" />
                    </form>

                    <div class="modal-action">
                        <label for="pop-up-form" class="btn btn-primary btn-outline">X</label>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Form;