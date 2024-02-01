import { Component, OnDestroy, OnInit } from "@angular/core";







@Component({
    selector: `app-product`,
    templateUrl: `product.component.html`,
    styleUrls: [`./product.component.scss`]
})
export class Productcomponent implements OnInit, OnDestroy {

    productname: string = 'samsung'
    productid: number = 45
    productstatus: string = "rohan panchal"
    isdisable: boolean = true
    deal: string ='hii iam rohan'

        ngOnInit(): void {
            setTimeout(() => {
    this.isdisable = false
}, 3000);

    }
ngOnDestroy(): void {

}
}


