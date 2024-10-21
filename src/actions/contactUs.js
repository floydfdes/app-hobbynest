import * as api from '../api/index';
import { clearLoading, setLoading } from './loading';

export const sendContactUsEmail = (contactFormData) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await api.contactUs(contactFormData);
    return data;
  } catch (error) {
    return error;
  } finally {
    dispatch(clearLoading());
  }
};
