const { helloFunction } = require('../functions/hello');

describe('GET /api/hello', () => {
  it('should return Hello World!', async () => {
    const request = { url: '/api/hello', method: 'GET' };
    const context = { log: jest.fn() };
    const response = await helloFunction(request, context);
    expect(response.body).toBe('Hello World!');
  });
});
