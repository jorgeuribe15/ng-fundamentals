import { InjectionToken } from "@angular/core";

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr')

export interface Toastr {
    succees(msg: string, title?: string): void
    info(msg: string, title?: string): void
    warning(msg: string, title?: string): void
    error(msg: string, title?: string): void
}






/// Previos Version
// import { Injectable } from "@angular/core";

// declare let toastr: any

// @Injectable()
// export class ToastrService {
//     success(message: string, title?: string) {
//         toastr.success(message, title)
//     }

//     info(message: string, title?: string) {
//         toastr.success(message, title)
//     }

//     warning(message: string, title?: string) {
//         toastr.success(message, title)
//     }

//     error(message: string, title?: string) {
//         toastr.success(message, title)
//     }
// }