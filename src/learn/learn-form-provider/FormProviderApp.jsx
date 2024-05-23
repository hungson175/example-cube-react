import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import IntermediateComponent from './IntermediateComponent';

const FormProviderApp = () => {
    const methods = useForm();

    const handleFormSubmit = () => {
        const data = methods.getValues();
        console.log(data); // Access form data here
    };

    return (
        <FormProvider {...methods}>
            <div>
                <h1>Ancestor Component</h1>
                <button onClick={handleFormSubmit}>Log Form Data</button>
                <IntermediateComponent />
            </div>
        </FormProvider>
    );
};

export default FormProviderApp;
