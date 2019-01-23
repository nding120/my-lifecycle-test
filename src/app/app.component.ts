import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `Your Text: <input type='text'[(ngModel)]='userText'/> 
  //           <br/>
  //           <simple [simpleInput]="userText"></simple> 
  //           `, 
            //2 way data binding:[(ngModel)]='userText';
            //component[its propty]: simple [simpleInput];[]从component到template。
            //<simple>是子component，数据传递从这里（父）到子里。
  
            
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  userText: string='ning';//property and its nintsil value 
}
