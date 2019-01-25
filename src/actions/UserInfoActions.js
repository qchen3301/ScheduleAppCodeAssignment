import dispatcher from "../dispatcher"

export function createUserInfo(text, number) {
    dispatcher.dispatch({
        type: "CREATE_USERINFO",
        text, 
        number
    })
}