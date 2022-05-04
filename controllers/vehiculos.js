const Vehiculos = require("../models/vehiculos");

const getVehiculos = async (req, res) => {
    const vehiculos = await Vehiculos.find()
                                    .populate('heroes','nombre');
    res.json([{
        ok: true,
        vehiculos
    }])
}
const crearVehiculos = async (req, res = response) => {
    const { nombreVehiculo} = (req.body);
    function toTitleCase(str) {
        let title = str.toLowerCase().split(' ');
        for (var i = 0; i < title.length; i++) {
            title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
        }
        return title.join(' ');
    }
    let vehiculoMin = toTitleCase(nombreVehiculo);

    try {
        const existeVehiculo = await Vehiculos.findOne({ nombreVehiculo:vehiculoMin });
        if (existeVehiculo) {
            return res.status(400).json({
                ok: false,
                msg: 'El Vehiculo ya esta registrado'
            })
        }
        req.body.nombreVehiculo = vehiculoMin;

        const vehiculo= new Vehiculos(req.body);
        await vehiculo.save();
        res.json({
            ok: true,
            msg: 'El Vehiculo ha sido creado',
            vehiculo
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el Administrador"
        })
    }

}

module.exports={getVehiculos,crearVehiculos};