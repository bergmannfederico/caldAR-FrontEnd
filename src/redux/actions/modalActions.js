import { SHOW_MODAL, HIDE_MODAL } from "../types/actionTypes";

export const showMODAL = (modalType, meta = {}) => {
  return {
    type: SHOW_MODAL,
    modalType,
    meta,
  };
};

export const hideMODAL = () => {
  return {
    type: HIDE_MODAL,
  };
};
