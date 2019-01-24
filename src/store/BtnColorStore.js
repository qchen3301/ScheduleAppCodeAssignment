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
}

const btnColorStore = new BtnColorStore()

export default btnColorStore