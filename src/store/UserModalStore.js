import {EventEmitter} from "events"
import dispatcher from "../Dispatcher"

class UserModalStore extends EventEmitter {
    constructor() {
        super()
        this.userInfo = [{
            id: '',
            name: '',
            phone: '',
            complete: false
        }]
    }

    createUserInfo(name, phone) {
        const id =  1 //placeholder: ideally, id should be drawn from Appointment.js or AppointmentsStore.js

        this.userInfo.push = ({
            id,
            name,
            phone,
            complete: true
        })
        this.emit("change")
    }

    getAll() {
        return this.userInfo
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_USERINFO": {
                this.createUserInfo(action.text, action.number)
                break
            }
            default:
        }
    }

}

const userModalStore = new UserModalStore()
dispatcher.register(userModalStore.handleActions.bind(userModalStore))
window.userModalStore = userModalStore
export default userModalStore