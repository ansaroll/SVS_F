export interface INavbarData {
    routerLink : string,
    icon?: string,
    label : string,
    expended?:boolean
    items?:INavbarData[]
}
