import React from 'react';
import { useFormContext } from 'react-hook-form';

const NestedChildForm = () => {
    const { register } = useFormContext();

    return (
        <div>
            <h3>Nested Child Form</h3>
            <label>
                Child Input:
                <input {...register('childInput')} />
            </label>
        </div>
    );
};

export default NestedChildForm;
