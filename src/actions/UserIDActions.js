import dispatcher from "../Dispatcher"

export function getId(number) {
    dispatcher.dispatch({
        type: "GET_ID",
        number
    })
}