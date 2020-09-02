const config = require('./config');
const fetch = require('isomorphic-unfetch');

const getCurrentUTCHours = () => new Date().getUTCHours();

const keepAlive = (fromUTCHours = 7, toUTCHours = 23, URIs) => {
  const currentUTCHours = getCurrentUTCHours();

  if (!URIs || URIs === []) {
    console.error('No URIs to ping specified');
    return;
  }

  if (currentUTCHours >= fromUTCHours && currentUTCHours <= toUTCHours) {
    console.log(
      `[${new Date().getUTCHours()}:${new Date().getUTCMinutes()}] Pinging Heroku App URIs as sheduled...`,
    );
    URIs.forEach(async (URI) => await fetch(URI));
  }
};

keepAlive(config.UTC_KEEP_ALIVE_FROM, config.UTC_KEEP_ALIVE_TO, []);

setInterval(
  () =>
    keepAlive(
      config.UTC_KEEP_ALIVE_FROM,
      config.UTC_KEEP_ALIVE_TO,
      config.URIS_TO_KEEP_ALIVE,
    ),
  config.PING_INTERVAL,
);
