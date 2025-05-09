const fastify = require('fastify')();

fastify.get('/', async (request, reply) => {
  return { hello: 'world from Fastify!' };
});

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
    console.log('Server listening on port 3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();