import axios from '../config/axios';

/** Cities **/

export const getCities = () => ({
  type: 'CITIES',
  payload: axios.get('cities')
})
