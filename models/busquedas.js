const axios = require('axios');

class Busquedas {

    historial = ['Colombia', 'Ecuador', 'Madrid'];

    constructor() {
        //leer DB si existe
    }

    get paramsMapbox() {
        return {
            'limit': 5,
            'language': 'es',
            'access_token': process.env.MAPBOX_KEY,
        }
    }

    async ciudad(lugar = '') {
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            console.log(resp.data);
            return [];

        } catch (err) {

            return [];
        }
    }
}
module.exports = Busquedas; 