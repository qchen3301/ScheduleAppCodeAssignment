import dispatcher from "../Dispatcher"

export const APP_ACTIONS = {
    SHOW_MODAL: 'AppActions.ShowHide'
    // INPUT_NAME: 'AppActions.InputName',
    // INPUT_PHONE: 'AppActions.InputPhone',
    // SET_ID: 'AppActions.SetID',
    // BTN_RED: 'AppActions.ButtonRed'
}

export function showHide (modalForm) {
    dispatcher.dispatch({
        type: APP_ACTIONS.SHOW_MODAL,
        value: modalForm
    })
}

// export function inputName (nameField) {
//     dispatcher.dispatch({
//         type: APP_ACTIONS.INPUT_NAME,
//         value: nameField
//     })
// }

// export function inputPhone (phoneField) {
//     dispatcher.dispatch({
//         type: APP_ACTIONS.INPUT_PHONE,
//         value: phoneField
//     })
// }

// export function setID (setID) {
//     dispatcher.dispatch({
//         type: APP_ACTIONS.SET_ID,
//         value: setID
//     })
// }

// export function reserveTime (btnRed) {
//     dispatcher.dispatch({
//         type: APP_ACTIONS.SET_ID,
//         value: btnRed
//     })
// }

