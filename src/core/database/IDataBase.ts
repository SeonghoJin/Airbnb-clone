export interface IDatabase<T> {
    find(query: any): Promise<T[]>
    insert(data: T): Promise<void>
}