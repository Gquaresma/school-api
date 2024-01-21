// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IRepository {
  create(data: any): Promise<any>
  update(id: number, data: any): Promise<any>
  delete(id: number): Promise<any>
  find(id: number): Promise<any>
  all(): Promise<any>
}
