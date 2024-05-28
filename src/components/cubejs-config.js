import cubejs from '@cubejs-client/core';
const API_URL = 'http://localhost:4000/cubejs-api/v1'; // Adjust the URL if different
const CUBEJS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTY5NTI0ODYsImlhdCI6MTcxNjg2NjA4Nn0.3erM_h9Y4xr7IeFQrCBrYjSkx5_uGwhqcUYJbHAGLBc';
const cubejsApi = cubejs(CUBEJS_TOKEN, { apiUrl: API_URL });
export default cubejsApi;
