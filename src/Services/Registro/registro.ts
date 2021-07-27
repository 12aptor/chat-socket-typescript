import { url } from '../../Enviroments'

class RegistroClass {

    static async registro(objUser: object) {
        let misHeaders = new Headers();
        misHeaders.append("Content-Type", "application/json")
        let config = {
            method: 'POST',
            headers: misHeaders,
            body: JSON.stringify(objUser)
        }
        let rpta = await fetch(`${url}/api/registro`, config)
        let json = await rpta.json()
        return json;
    }
}

export { RegistroClass }