import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace
    this.key = `${namespace}:access_token`
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(this.key)
    return accessToken
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(this.key, accessToken)
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(this.key)
  }
}

export default AuthStorage
