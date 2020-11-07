export interface Adapter<T> {
    adapt(item: any): T;
    adaptList(itemList: Array<any>): Array<T>;
}
