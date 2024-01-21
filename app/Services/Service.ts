import IService from 'types/interface/service'
import IRepository from 'types/interface/repository'

export abstract class Service implements IService {
  protected repository: IRepository

  constructor(repository: IRepository) {
    this.repository = repository
  }

  public async create(data: any): Promise<any> {
    return await this.repository.create(data)
  }

  public async update(id: number, data: any): Promise<any> {
    return await this.repository.update(id, data)
  }

  public async delete(id: number): Promise<any> {
    return await this.repository.delete(id)
  }

  public async find(id: number): Promise<any> {
    return await this.repository.find(id)
  }

  public async all(): Promise<any> {
    return await this.repository.all()
  }
}
