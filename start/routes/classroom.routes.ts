import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'ClassroomsController.index')
  Route.get('/:id', 'ClassroomsController.find')
  Route.post('/:professorId', 'ClassroomsController.create')
  Route.post('/allocate/:classId/:professorId', 'ClassroomsController.allocateStudent')
  Route.post('/deallocate/:classId/:professorId', 'ClassroomsController.deallocateStudent')
  Route.put('/:id/:professorId', 'ClassroomsController.update')
  Route.delete('/:id/:professorId', 'ClassroomsController.destroy')
}).prefix('/api/classroom')
