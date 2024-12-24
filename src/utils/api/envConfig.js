class EnvConfig {
  constructor() {

    const defaults = {
        apiUrl: 'http://localhost:8080'
    }
  
    const isStaticEnv = import.meta.env.VITE_IS_STATIC;
    this.isStatic = isStaticEnv === undefined ? true : isStaticEnv === 'true';
    this.apiUrl = import.meta.env.VITE_API_URL || defaults.apiUrl;

  }

  isDevelopment() {
    return import.meta.env.DEV;
  }

  isProduction() {
    return import.meta.env.PROD;
  }

  getApiUrl() {
    return this.apiUrl
  }

  isStaticSite() {
    return this.isStatic
  }
}

export const envConfig = new EnvConfig()
