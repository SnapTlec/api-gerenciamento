const swaggerAutogen = require('swagger-autogen')();


const outputFile = './swagger_output.json';

const endpointsFiles = ['./src/routers/index.router.ts'];


swaggerAutogen(outputFile, endpointsFiles);