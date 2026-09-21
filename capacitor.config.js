const config = {
  appId: 'com.worktime.tracker',
  appName: '工时打卡',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
      keystorePassword: undefined,
      keystoreKeyPassword: undefined,
    }
  }
};

module.exports = config;
