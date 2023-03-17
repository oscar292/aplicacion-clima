require('dotenv').config()

const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {

    const busquedas = new Busquedas();

    let opt;

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar)

                console.log('\n Informcación de la ciudad\n'.green);
                console.log("Ciudad: ")
                console.log("Latitud: ")
                console.log("Longitud ")
                console.log("Temperatura: ")
                console.log("Minima: ")

                break;

            case 2: break;

            case 3: break;

        }


        console.log({ opt })
        if (opt !== 0) await pausa();
    } while (opt !== 0)

}

main();