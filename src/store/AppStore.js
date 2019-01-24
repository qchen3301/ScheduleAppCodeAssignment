import dispatcher from "../Dispatcher"
import {EventEmitter} from "events"
import * as AppActions from "../actions/AppActions"

export default class AppStore extends EventEmitter {

    constructor() {
        super()
        this.showModal = false
    }

    handleActions(action) {
        switch (action.type) {
            case AppActions.APP_ACTIONS.SHOW_MODAL: {
                this.showModal = action.value
                this.emit("storeUpdated")
                break
            }
            default: {
            }
        }
    }

    getShowModal() {
        return this.showModal
    }
}

const appStore = new AppStore()
dispatcher.register(AppStore.handleActions.bind(appStore))