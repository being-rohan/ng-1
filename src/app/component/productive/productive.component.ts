import { Component, OnInit } from "@angular/core";






@Component({
    selector: "app-products2",
    templateUrl: "productive.component.html",
    styleUrls: ['./productive.component.scss']


})


export class Redchillis2 implements OnInit {

    isdisable: boolean = true;
    productstatus: string = 'no product is added';
    productnumber: number = 0;
    serachedvalue: string = '';
    serachedvalue2: string = '';

    ngOnInit(): void {
        setTimeout(() => {
            this.isdisable = false;
        }, 3000);
    }

    updatestatus() {


        this.productnumber++;
        this.productstatus = `${this.productnumber} product  is added`
    }
    removestatus() {
        // console.log("clicked")
        this.productnumber--;
        // console.log(this.productnumber)
        if (this.productnumber === 0) {
            this.productstatus = `no product is added`
        } else {
            this.productstatus = `${this.productnumber} product is added`

        }

    }

    searchhere(event: Event) {

        // console.log((event.target as HTMLInputElement).value);
        this.serachedvalue = (event.target as HTMLInputElement).value

    }


}