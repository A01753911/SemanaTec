//Como utilizar la herramanienta ORM Sequielize

const Sequielize= require("sequelize");
//Configurar la conexion

//mysql -u admin -h -P 3306 -p


const sequelize = new Sequielize("semanatec","admin","Oswa2203#1",{
    dialect:"mysql",
    host: "database-1.cubm0go9x970.us-east-1.rds.amazonaws.com",
    define:{
        // Evitar que nos ponga CreatedAt y updateAt
        timestamps: false,
        //pluralizar
        freezeTableName:true
    }
});

const Ejemplo = sequelize.define("ejemplo",{
    idTrabajo:{
        type: Sequielize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion:{
        type: Sequielize.STRING,
        allowNull: true
    }
});


const Ejemplo2 = sequelize.define("ejemplo2",{
    idTrabajo:{
        type: Sequielize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion:{
        type: Sequielize.STRING,
        allowNull: true
    }
});




// Prueba de conexion

sequelize.sync()
    .then(result => {
        console.log("Conexion exitosa");
    })
    .catch(error => console.log(error));