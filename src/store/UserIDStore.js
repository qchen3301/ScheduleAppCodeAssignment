import {EventEmitter} from "events"

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


}

const userIDStore = new UserIDStore()

export default userIDStore