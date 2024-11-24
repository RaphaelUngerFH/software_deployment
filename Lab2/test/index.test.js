const request = require('supertest');
const app = require('../index'); // Adjust the path as necessary

describe('GET /hello', () => {
  it('should return Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
