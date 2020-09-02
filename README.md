# Heroku-Keep-Alive

A tiny Node.js app to keep all your free Heroku repos alive by pinging them in an interval you can specify in the config file.

A free Heroku app needs to "sleep" for at least 7 hours a day to not go beyond the free tier monthly usage. Therefore you can specify a time window in which the apps will be pinged to keep them alive.

## Usage

Install the one dependency "isomorphic unfetch" with

```
npm install
```

Then run the app with the following CLI command

```
npm start
```

## Configuration

Edit the following values in config.js to configure the app:

All times are in UTC.

| Value               | Description                                                  | Default Value   |
| ------------------- | ------------------------------------------------------------ | --------------- |
| UTC_KEEP_ALIVE_FROM | Start of the time window in which your apps should be pinged | 7a.m.           |
| UTC_KEEP_ALIVE_TO   | End of the time window in which your apps should be pinged   | 11p.m.          |
| URIS_TO_KEEP_ALIVE  | An array with the strings of all URIs                        | n/a             |
| PING_INTERVAL       | The interval ath which your apps will be pinged              | 90000ms (15min) |
