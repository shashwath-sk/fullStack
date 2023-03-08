const { createClient } = require('redis');


const redisClient = createClient(
  {
    socket:{
      host:'redis',
      port:6379
    }
  }
);

redisClient.on('error', (err) => {
  console.error(err);
});

async function getRedisClient() {
  if (!redisClient.isReady) {
    await redisClient.connect();
  }
  return redisClient;
}

async function disconnectRedis() {
  if (redisClient.isReady)
    await redisClient.disconnect();
}

module.exports = {
  getRedisClient,
  disconnectRedis,
};