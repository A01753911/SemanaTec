const Sequielize=require("sequelize");

const ProyectoPersona = (sequielize) =>{
    sequielize.define("proyectopersona",{

        estado: Sequielize.STRING(20)
    })
};

module.exports = ProyectoPersona;