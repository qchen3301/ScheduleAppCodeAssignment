import dispatcher from "../Dispatcher"

export function createUserInfo(text, number) {
    dispatcher.dispatch({
        type: "CREATE_USERINFO",
        text, 
        number
    })
}