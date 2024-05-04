import * as React from 'react';
import {useForm} from 'react-hook-form';

let renderCount = 0;
export default function SampleHookForm(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    renderCount++;
    const firstname = watch('firstname');

    return (
        <div>
            <div>RenderCount: {renderCount}</div>
            <form onSubmit={handleSubmit((data) => {
                console.log(JSON.stringify((data)));
            })}>
                <input {...register("firstname", {required: true})} placeholder="First Name"/>
                <p>{firstname}</p>
                <input {...register(
                    "lastname",
                    {required: "This is required, min length is 4", minLength: 4})
                       }
                       placeholder="Last Name"/>
                <input type="submit"/>
            </form>
        </div>
    );
}