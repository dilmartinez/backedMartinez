class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
  
    //metodos
    getFullName = () => {return(`Usuario: ${this.nombre} ${this.apellido}`) }
  
    addMascota = (nombre) => {return (this.mascotas.push(nombre))}
  
          countMascotas = () =>{return (`Tengo ${this.mascotas.length} mascotas.`)}
  
          addBook = (nombre, autor) => {return (this.libros.push({nombre, autor}))}
  
          getBookNames = () =>{return   this.libros.map((libro) => {return (libro.nombre)})}
  
  }
  
  let usuarioNew = new Usuario('Maria', 'Martínez.')
  
  usuarioNew.addMascota('oreo')   
  usuarioNew.addMascota('blacking')  
  usuarioNew.addMascota('whiting')
  
  usuarioNew.addBook('Viaje al fin de la noche','Louis-Ferdinand Céline')
  //usuario.New.addBook('Don Quijote de la Mancha','Miguel de Cervantes')
  usuarioNew.addBook('Relatos cortos','Antón Chéjov')
  
  console.log(usuarioNew.getFullName())  
  
  console.log(usuarioNew.countMascotas()) 
  
  console.log(usuarioNew.getBookNames())
