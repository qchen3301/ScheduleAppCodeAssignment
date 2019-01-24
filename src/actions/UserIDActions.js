import dispatcher from "../Dispatcher"

export function getID(number) {
    dispatcher.dispatch({
        type: "GET_ID",
        number
    })
}