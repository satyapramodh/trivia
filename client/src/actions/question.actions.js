import { questionConstants } from "../constants";

const get = () => ({
  type: questionConstants.REQUEST
});

const submit = (options) => ({
  type: questionConstants.SUBMIT,
  options
});

const create = (options) => ({
  type: questionConstants.CREATE,
  options
});

export const questionActions = {
  get,
  submit,
  create
};
