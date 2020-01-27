import Api from '../services/api'

class ApiServices {
    getAll(){
        return Api().get("keys")
    }
    createKey(key, value){
        return Api().post("addKeys", {
            key: key,
            value: value
        })
    }
}

export default new ApiServices();