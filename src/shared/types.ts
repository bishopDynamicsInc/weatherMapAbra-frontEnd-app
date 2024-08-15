
export interface paginationResult<T>{
    result: T[];
    page: number;
    count: number;
    total:number;
}