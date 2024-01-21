import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IController {
  index: (data: HttpContextContract) => Promise<any>
  create: (data: HttpContextContract) => Promise<any>
  show: (data: HttpContextContract) => Promise<any>
  update: (data: HttpContextContract) => Promise<any>
  destroy: (data: HttpContextContract) => Promise<any>
}
