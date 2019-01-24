import {EventEmitter} from "events"
import dispatcher from "../Dispatcher"

class UserIDStore extends EventEmitter {
    constructor() {
        super()
        this.userID = 0
    }

    getUserID(userIDFromAppoint) {
        this.userID = userIDFromAppoint
        this.emit("change")
    }

    getAll() {
        return this.userID
    }

    handleActions(action) {
        switch(action.type) {
            case "GET_ID": {
                this.getUserID(action.number)
                break
            }
            default:
        }
    }

}

const userIDStore = new UserIDStore()
dispatcher.register(userIDStore.handleActions.bind(userIDStore))
window.dispatcher = dispatcher
export default userIDStore