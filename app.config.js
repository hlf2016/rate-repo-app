export default {
  "name": "rate-repo-app",
  "slug": "rate-repo-app",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/icon.png",
  "userInterfaceStyle": "light",
  "splash": {
    "image": "./assets/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  "assetBundlePatterns": [
    "**/*"
  ],
  "ios": {
    "supportsTablet": true
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    },
    "package": "com.pannio.raterepoapp"
  },
  "web": {
    "favicon": "./assets/favicon.png",
    "bundler": "metro"
  },
  "extra": {
    "env": "development",
    "eas": {
      "projectId": "100fdb86-b4b2-4983-bf86-2528d71043b4"
    },
    "APOLLO_URI": process.env.EXPO_PUBLIC_APOLLO_URI
  },
  "owner": "pannio"
}

