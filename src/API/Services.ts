import Axios, { AxiosRequestConfig } from 'axios';
import { googleAPIKey } from '../config/google';
import API from './API';
import { headerCreator } from './commonAPI';

const requestService = async () => {
  const response = await Axios({
    method: 'POST',
    headers: {},
    url: API.DEV_API + API.PATHS.requestService,
    data: {
      first_name: 'Igor Claudino',
      last_name: 'de França Costa',
      phone: '88994055054',
      service_description: 'Cozinhar',
      country: 'Brazil',
      city: 'Crateús',
      postal_code: '63707-460',
      address: 'Rua Homero Fontenele, 1310',
      complement: 'SSSS',
      language: 'Portuguese',
      contact_app: 'Telegram',
      service_id: 'd2cd5f1e-da49-46fb-86db-8ce6c3266a15',
      email: 'igor.claudino.ic@gmail.com',
      urgent_service: false,
      mandatory_language: true,
    },
  });
  console.log('response', response);
  return response;
};

// Google
// Auto Complete
const getGoogleLocatio = async (textLocation: string) => {
  const request: AxiosRequestConfig = {
    method: 'POST',
    url: `${API.PATHS.googleAutoComplete}input=${textLocation}&key=${googleAPIKey}`,
    headers: headerCreator(),
  };
  console.log('request', request);
  const response = await Axios(request);
  return response;
};

export default {
  requestService,
  getGoogleLocatio,
};
