import {EventEmitter} from "events"
import dispatcher from "../Dispatcher"

class UserModalStore extends EventEmitter {
    constructor() {
        super()
        this.userInfo = {
            id: '',
            name: '',
            phone: '',
            complete: false
        }
    }

    createUserInfo(name, phone) {
        const id =  1

        this.userInfo = {
            id,
            name,
            phone,
            complete: true
        }
        this.emit("change")
    }

    getAll() {
        return this.userInfo
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

export default userIDStore