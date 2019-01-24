import {EventEmitter} from "events"

class UserIDStore extends EventEmitter {
    constructor() {
        super()
        this.userID = []
    }

    getAll() {
        return this.userID
    }
}

const userIDStore = new UserIDStore()

export default userIDStore