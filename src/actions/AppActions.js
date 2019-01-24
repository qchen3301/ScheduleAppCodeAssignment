import dispatcher from "../Dispatcher"

export const APP_ACTIONS = {
    SHOW_MODAL: 'AppActions.ShowHide'
}

export function showHide (modalForm) {
    dispatcher.dispatch({
        type: APP_ACTIONS.SHOW_MODAL,
        value: modalForm
    })
}