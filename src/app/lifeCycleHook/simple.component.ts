import { Component, Input, OnChanges,SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from "@angular/core";


@Component({
    selector:'simple',
    template: `you entered: {{simpleInput}}`
})

export class SimpleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{ 
    @ Input()   //input propty: 从这个component传给父（app）component
    simpleInput: string;
    ngOnChanges(changes: SimpleChanges){ //SimpleComponent继承 "ngOnChanges" lifecycle hook,function: record everytime SimpleInput changes, SimpleChanges record propty name changes
        console.log('this is onchange');
        for(let propertyName in changes){
            let change =changes[propertyName];
            let current= JSON.stringify(change.currentValue);
            let previous=JSON.stringify(change.previousValue);
            console.log(propertyName+' : currentValue='+current+', previousValue='+previous); 
        }
        
    }
    ngOnInit() {
        console.log('this is oninit')
    }
    ngDoCheck(){
        console.log('this is docheck')
    }
    ngAfterContentInit(){
        console.log('this is after content in it')
    }
    ngAfterContentChecked(){
        console.log('this is after content checked')
    }
    ngAfterViewInit(){
        console.log('this is after view in it')
    }
    ngAfterViewChecked(){
        console.log('this is after view checked')
    }
    ngOnDestroy(){
        console.log('this is on destroy')
    }
}