const { app } = require('@azure/functions');

const helloFunction = async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);
    return { body: `Hello World!` };
};

if (process.env.NODE_ENV !== 'test') {
    app.http('hello', {
        methods: ['GET', 'POST'],
        authLevel: 'anonymous',
        handler: helloFunction
    });
}

module.exports = { helloFunction };
