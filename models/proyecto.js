const Sequielize=require("sequelize");

const Proyecto = (sequielize) =>{
    sequielize.define("proyecto",{
        idPersona:{
            type: Sequielize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre: Sequielize.STRING(30),
        descripcion: Sequielize.STRING
    })
};

module.exports = Proyecto;