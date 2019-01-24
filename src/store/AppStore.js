import dispatcher from "../Dispatcher"
import {EventEmitter} from "events"
import * as AppActions from "../actions/AppActions"

class AppStore extends EventEmitter {

    constructor() {
        super()
        this.showModal = false
        // this.userID = 0
    }

    handleActions(action) {
        switch (action.type) {
            case AppActions.APP_ACTIONS.SHOW_MODAL: {
                this.showModal = action.value
                this.emit("modalToggled")
                break
            }
            // case AppActions.APP_ACTIONS.SET_ID: {
            //     this.userID = action.value
            //     this.emit("IDSet")
            //     break
            // }
            default: {
            }
        }
    }

    getShowModal() {
        return this.showModal
    }

    // getUserID() {
    //     return this.userID
    // }
}

const appStore = new AppStore()
dispatcher.register(appStore.handleActions.bind(appStore))

export default appStore