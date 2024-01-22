import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'ProfessorsController.all')
  Route.get('/:id', 'ProfessorsController.find')
  Route.delete('/:id', 'ProfessorsController.destroy')
  Route.get('/:id/classes', 'ProfessorsController.professorClasses')
}).prefix('/api/professor')
