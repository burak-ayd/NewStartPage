import store from "..";
import { _setModal, _removeModal } from ".";
import { setSettingPage } from "../general/actions";

export const setModal = (name, data = false) => {
    store.dispatch(_setModal({ name, data }));
};
export const removeModal = () => {
    store.dispatch(_removeModal());
    store.dispatch(setSettingPage("general"));
};
