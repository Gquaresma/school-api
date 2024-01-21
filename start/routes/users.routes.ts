import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'UsersController.index')
  Route.post('/', 'UsersController.create')
  Route.put('/:id', 'UsersController.update')
  Route.delete('/:id', 'UsersController.destroy')
}).prefix('/api/users')
