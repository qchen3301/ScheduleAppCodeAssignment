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
            case "GET_USERINFO": {
                this.getName(action.name) 
                this.getPhone(action.phone)
                break
            }
            default:
        }
    }

}

const userModalStore = new UserModalStore()
dispatcher.register(userModalStore.handleActions.bind(userModalStore))

export default userModalStore