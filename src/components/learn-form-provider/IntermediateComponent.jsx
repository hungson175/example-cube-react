import React from 'react';
import NestedChildForm from './NestedChildForm';

const IntermediateComponent = () => {
    return (
        <div>
            <h2>Intermediate Component</h2>
            <NestedChildForm />
        </div>
    );
};

export default IntermediateComponent;
