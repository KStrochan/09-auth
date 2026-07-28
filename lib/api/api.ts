import axios from 'axios';

// Спільний екземпляр axios для звернень до власних /api маршрутів Next.js
// (не до notehub-api.goit.study напряму — це роблять файли у app/api/**).
const baseURL = process.env.NEXT_PUBLIC_API_URL + '/api';

export const api = axios.create({
  baseURL,
  withCredentials: true,
});
