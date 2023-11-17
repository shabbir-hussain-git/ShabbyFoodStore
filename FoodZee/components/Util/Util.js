import Config from 'react-native-config';
import {Platform, Alert} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

class Util {
  static async getData(url, headers = {}) {
    let resp = {status: 0, desc: 'Error'};
    try {
      resp = await fetch(url, {
        method: 'GET',
        headers: headers,
      });
      resp = await resp.json();
    } catch (e) {
      console.error(e);
    }
    return resp;
  }
  static async postData(url, body, headers = {}) {
    let resp = {status: 0, desc: 'Error'};
    try {
      resp = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      });
      resp = await resp.json();
    } catch (e) {
      console.error(e);
    }
    return resp;
  }

  static isAndroid() {
    return Platform.OS == 'android' ? true : false;
  }
  static isIOS() {
    return Platform.OS == 'ios' ? true : false;
  }
  static userToken = null;
}

export default Util;
