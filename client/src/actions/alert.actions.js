import {alertConstants} from '../constants';

const success = (message) => ({
  type: alertConstants.SUCCESS,
  message
})

const error = (message) => ({
  type: alertConstants.ERROR,
  message
})

const clear = message => ({
  type: alertConstants.CLEAR,
  message
});


export const alertActions = {
  success,
  error,
  clear
};
