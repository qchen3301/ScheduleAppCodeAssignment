import {EventEmitter} from "events"

class BtnColorStore extends EventEmitter {
    constructor() {
        super()
        this.btnColor = "blue"
    }

    getBtnColor(btnColorFromAppoint) {
        this.btnColor = btnColorFromAppoint
        this.emit("change")
    }

    getAll() {
        return this.btnColor
    }

    handleActions(action) {
        switch(action.type) {
            case "RESERVE_TIME": {
                this.getBtnColor(action.text)
                break
            }
            default:
        }
    }
}

const btnColorStore = new BtnColorStore()

export default btnColorStore