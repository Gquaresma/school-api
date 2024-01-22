import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'StudentsController.all')
  Route.get('/:id', 'StudentsController.find')
  Route.get('/:id/classes', 'StudentsController.showStudentClasses')
  Route.delete('/:id', 'StudentsController.destroy')
}).prefix('/api/student')
