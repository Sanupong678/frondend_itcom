// API Configuration
const config = {
  // Development
  development: {
    backendUrl: 'http://localhost:5000',
    apiUrl: 'http://localhost:5000/api'
  },
  // Production
  production: {
    backendUrl: process.env.VITE_BACKEND_URL || 'https://your-backend-app.railway.app',
    apiUrl: process.env.VITE_BACKEND_URL || 'https://your-backend-app.railway.app/api'
  }
};

// Get current environment
const env = import.meta.env.MODE || 'development';

// Export current config
export const currentConfig = config[env];

// Export individual values
export const backendUrl = currentConfig.backendUrl;
export const apiUrl = currentConfig.apiUrl;

export default currentConfig; 