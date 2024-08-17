import * as api from '../api/index';

export const sendContactUsEmail = (contactFormData) => async () => {
  try {
    const { data } = await api.contactUs(contactFormData);

    return data;
  } catch (error) {
    return error;
  }
};
