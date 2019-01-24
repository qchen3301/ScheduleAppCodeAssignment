import {EventEmitter} from "events"

class BtnColorStore extends EventEmitter {
    constructor() {
        super()
        this.btnColor = "blue"
    }

    getAll() {
        return this.btnColor
    }
}

const btnColorStore = new BtnColorStore()

export default btnColorStore