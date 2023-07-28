(() => {

  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const evaluableFiles = [
      { id: 1, shouldRemove: false },
      { id: 2, shouldRemove: false },
      { id: 3, shouldRemove: true },
      { id: 4, shouldRemove: false },
      { id: 5, shouldRemove: false },
      { id: 7, shouldRemove: true },
  ]; 
  
  // Archivos marcados para borrar - files to delete
  const arhivos = evaluableFiles.map( file => file.shouldRemove);

  
  class AbstractUser { };
  class UserMixin { };
  class UserImplementation { };
  interface IUser { };

  // Mejor
  class User { };
  interface User { };


  // Todo: Tarea
      
  // día de hoy - today
  const today = new Date();
  
  // días transcurridos - elapsed time in days
  const elapsedDaysTime: number = 23;
  
  // número de archivos en un directorio - number of files in directory
  const filesQuantity = 33;
  
  // primer nombre - first name
  const firstName = 'Fernando';
  
  // primer apellido - last name
  const lastName = 'Herrera';

  // días desde la última modificación - days since modification
  const daysLastModification = 12;
  
  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesStudent = 6;


})();



