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
  
  let usuario1 = new Usuario('Maria', 'Martínez.')
  
  usuario1.addMascota('oreo')   
  usuario1.addMascota('blacking')  
  usuario1.addMascota('whiting')
  
  usuario1.addBook('Viaje al fin de la noche','Louis-Ferdinand Céline')
  //usuario1.addBook('Don Quijote de la Mancha','Miguel de Cervantes')
  usuario1.addBook('Relatos cortos','Antón Chéjov')
  
  console.log(usuario1.getFullName())  
  
  console.log(usuario1.countMascotas()) 
  
  console.log(usuario1.getBookNames())