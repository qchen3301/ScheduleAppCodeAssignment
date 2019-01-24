import dispatcher from "../Dispatcher"

export function reserveTime(text) {
    dispatcher.dispatch({
        type: "RESERVE_TIME",
        text
    })
}