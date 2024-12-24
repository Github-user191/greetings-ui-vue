const getBaseUrl = () => {
    const env = import.meta.env.VITE_ENV ?? "DEV";
    const hostname = import.meta.env.VITE_HOSTNAME;
    return env === 'DEV' ? 'http://localhost:8080' : `https://${hostname}`;
  };

  export { getBaseUrl };