import * as api from '../api/index.js';

export const sendContactUsEmail = (contactFormData) => async () => {
  try {
    const { data } = await api.contactUs(contactFormData);

    return data;
  } catch (error) {
    console.log(error);
  }
};
