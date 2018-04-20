import {alertConstants} from '../constants';

export const alertActions = {
  success,
  error,
  clear
}

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