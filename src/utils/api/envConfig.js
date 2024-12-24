class EnvConfig {
  constructor() {

    const defaults = {
        serverHostname: 'http://localhost:8080'
    }
  
    const isStaticEnv = import.meta.env.VITE_IS_STATIC;
    this.isStatic = isStaticEnv === undefined ? true : isStaticEnv === 'true';
    this.serverHostname = `https://${import.meta.env.VITE_SERVER_HOSTNAME}` || defaults.serverHostname;

  }

  isDevelopment() {
    return import.meta.env.DEV;
  }

  isProduction() {
    return import.meta.env.PROD;
  }

  getServerHostname() {
    return this.serverHostname
  }

  isStaticSite() {
    return this.isStatic
  }
}

export const envConfig = new EnvConfig()
