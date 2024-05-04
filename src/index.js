import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom/client';
import App from './App';
import cube from '@cubejs-client/core';
import {CubeProvider} from "@cubejs-client/react";

const cubeApi = cube(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTQ3NzkyODMsImV4cCI6MTcxNDg2NTY4M30.3gY4Xmy_-UIdW8D6OA0VqciuMSAPJIAJHVAEZws-TQ8',
    {apiUrl: 'http://localhost:4000/cubejs-api/v1'}
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CubeProvider cubeApi={cubeApi}>
        <App/>
    </CubeProvider>
);
