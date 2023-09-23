import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'food-app',
  webDir: 'dist/food-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
