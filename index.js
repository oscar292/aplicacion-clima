require('dotenv').config()

const { inquirerMenu, pausa, leerInput, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {

    const busquedas = new Busquedas();

    let opt;

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case 1:

                const termino = await leerInput('Ciudad: ');
                const lugares = await busquedas.ciudad(termino);
                const id = await listarLugares(lugares);

                if (id === '0') continue;

                const lugarSeleccionado = lugares.find(l => l.id == id);

                busquedas.agregarHistorial(lugarSeleccionado.nombre);

                const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng)

                console.log('\n Informcación de la ciudad\n'.green);
                console.log("Ciudad: ", lugarSeleccionado.nombre.green);
                console.log("Latitud: ", lugarSeleccionado.lat);
                console.log("Longitud ", lugarSeleccionado.lng);
                console.log("Temperatura: ", clima.temp);
                console.log("Maxima: ", clima.max);
                console.log("Minima: ", clima.min);
                console.log("Como esta el clima ", clima.desc.green)

                break;

            case 2:

                busquedas.historialCapitalizado.forEach((lugar, i) => {

                    const idx = `${i + 1}. `.green;
                    console.log(`${idx} ${lugar}`)

                })

                break;

            case 3: break;

        }

        console.log({ opt })

        if (opt !== 0) await pausa();

    } while (opt !== 0)

}

main();