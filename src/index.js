import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom/client';
import cube from '@cubejs-client/core';
import {CubeProvider} from "@cubejs-client/react";
import ChartApp from "./ChartApp";
import HelloMUI from "./learn/learn-mui/hello-mui";
import CreateReactApp from "./learn/learn-mui/CreateReactApp";
import SignIn from "./learn/learn-mui/SignIn";
import LearnCubejJS from "./learn/cubejs/cubeQuery";
import SimpleMenu from "./learn/learn-mui/popup-state-hooks/SimpleMenuWithoutHooks";
import SimpleMenuWithHooks from "./learn/learn-mui/popup-state-hooks/SimpleMenuWithHooks";
import SimpleFormControl from "./learn/learn-mui/SimpleFormControl";


const cubeApi = cube(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTQ3NzkyODMsImV4cCI6MTcxNDg2NTY4M30.3gY4Xmy_-UIdW8D6OA0VqciuMSAPJIAJHVAEZws-TQ8',
    {apiUrl: 'http://localhost:4000/cubejs-api/v1'}
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CubeProvider cubeApi={cubeApi}>
        {/*<SignIn />*/}
        {/*<CreateReactApp />*/}
        {/*<ChartApp />*/}
        {/*<LearnCubejJS />*/}
        {/*<SimpleMenu />*/}
        {/*<SimpleMenuWithHooks />*/}
        <SimpleFormControl />
        {/*<FormProviderApp />*/}
    </CubeProvider>
);
