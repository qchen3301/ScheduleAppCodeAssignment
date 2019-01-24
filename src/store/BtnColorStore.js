import {EventEmitter} from "events"
import dispatcher from "../Dispatcher";

class BtnColorStore extends EventEmitter {
    constructor() {
        super()
        this.btnColor = "blue"
    }

    reserveTime(btnColorFromAppoint) {
        this.btnColor = btnColorFromAppoint
        this.emit("change")
    }

    getAll() {
        return this.btnColor
    }

    handleActions(action) {
        switch(action.type) {
            case "RESERVE_TIME": {
                this.reserveTime(action.text)
                break
            }
            default:
        }
    }
}

const btnColorStore = new BtnColorStore()
dispatcher.register(btnColorStore.handleActions.bind(btnColorStore))

export default btnColorStore