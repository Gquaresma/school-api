import { LucidModel } from '@ioc:Adonis/Lucid/Orm'
import IRepository from 'types/interface/repository'

export abstract class Repository implements IRepository {
  protected model: LucidModel

  constructor(model: LucidModel) {
    this.model = model
  }

  public async create(data: any): Promise<any> {
    return await this.model.create(data)
  }

  public async update(id: number, data: any): Promise<any> {
    const model = await this.find(id)
    model.merge(data)
    await model.save()
    return model
  }

  public async delete(id: number): Promise<any> {
    const model = await this.find(id)
    await model.delete()
    return model
  }

  public async find(id: number): Promise<any> {
    return await this.model.findOrFail(id)
  }

  public async all(): Promise<any> {
    return await this.model.all()
  }
}
