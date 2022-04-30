const Heroes = require('../models/heroes');

const getBuscarHeroes = async (req, res = response) => {
    const buscar = req.params.buscar;
    const regex = new RegExp(buscar, 'i');

    const [heroesnom] = await Promise.all(await Heroes.find({ nombre: regex }))
    const [heroesciu] = await Promise.all(await Heroes.find({ ciudad: regex }))
    
    res.status(200).json({
        ok: true,
        heroesnom,
        heroesciu
    });
}


module.exports = { getBuscarHeroes }