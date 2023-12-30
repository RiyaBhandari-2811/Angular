### Installation

```js
npm install -g @angular/cli
ng version
ng new <appname>
ng serve
```

---

### Interpolation

Interpolation is the way by which you can pass a data from component.ts -> component.html file . One-way of data binding .

|   With   | component.ts                                                                                                                                             | component.html |
| :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------: |
| variable | export class AppComponent {<br />      appName = 'xyz' ;<br />      `name = "Riya B."`<br />}                                                    |   {{ name }}   |
| function | export class AppComponent {<br />       appName = 'xyz';<br />       `test () {...}`<br />}                                                    |  {{ test() }}  |
|  object  | export class AppComponent {<br />       appName = 'xyz'<br />       `obj = {`<br />           ` age : 20`<br />     `  }`<br />} | {{ obj.age }} |
|  array  | export class AppComponent {<br />    appName = 'xyz' ;<br />    `arr = [ 1, 2, 3]`<br />}                                                          |  {{ arr[0] }}  |

---

### Component

A component is the basic building block of Angular . eg Navbar is a component , footer is the component etc .

app component is the **_root_** **_component_** of our angular project .

There are usually **_4_** component file

1. component.ts -> has a selector : 'app-root'
2. component.html -> template
3. component.css -> style
4. component.spec.ts -> for testing

##### Making Own Component from CL :

make sure you're in src>app this component will be inside app folder

> `ng g c #componentName# or ng g c Dir/CompName`

g - generate , c - component

You can also _check in app.module.ts_ file your new added component like { componentName } from "path" ;

##### How to Use it :

Go to index.html file and add the element with **_selector_** in body element

selector name is in your .ts file eg, `<app-componentname></app-componentname> eg : <app-user-list> </app-user-list> `

---

### Module

A Module is a mechanism to group components , directives , pipes and services that are related .

In this file you'll see import of components and module and declarations of component and importing of module then we've providers etc

##### Make module using CL :

> `ng g m #ModuleName# `

g - generate , m - module

##### How to Use it : check video

---

### How to call a function on btn click

Step 1 : Add following code in component.ts

```typescript
// Case 1
export class AppComponent {
  title = "CodeSandbox";
  getName(name) {
    alert(name);
  }
}

// Case 2 : using variable which are declare in .ts
export class AppComponent {
  title = "CodeSandbox";
  username = "Riyo";
  getName(name) {
    alert(name);
  }
}
```

Step 2 : Add btn in comp.html file and add click event as shown below

```html
// Case 1 :
<div>
  <button (click)=" getName('riya') ">Get My Name</button>
</div>

case 2 :
<button (click)=" getName(username) ">Get My Name</button>
```

---

### Events in Angular

- Click
- KeyUp
- KeyUp with enter and space
- KeyDown
- Blur
- MouseOver and MouseLeave
- Get Values from textbox on some event

.ts :

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "CodeSandbox";
  myEvent(evt) {
    console.log(evt);
  }
}
```

.html :

```html
<div>
  <button (click)="myEvent('this is click event')">Click Me</button>
  <br />
  <br />
  <input type="text" #box (keyup)="myEvent(box.value)" placeholder="keyup" />
  <br />
  <br />
  <input
    type="text"
    #box1
    (keyup.enter)="myEvent(box1.value)"
    placeholder="key enter"
  />
  <br />
  <br />
  <input
    type="text"
    #box2
    (keyup.space)="myEvent(box2.value)"
    placeholder="key space"
  />
  <br />
  <br />
  <input
    type="text"
    #box3
    (keydown)="myEvent(box3.value)"
    placeholder="key down"
  />
  <br />
  <br />
  <input
    type="text"
    #box4
    (blur)="myEvent(box4.value)"
    placeholder="blur 2 event on one element"
    (mouseover)="myEvent('mouse in')"
  />
  <br />
  <br />
  <div style="background-color: skyblue;" (mouseover)="myEvent('mouse in')">
    Mouse Events
  </div>
  <br />
  <br />
  <div style="background-color: skyblue;" (mouseleave)="myEvent('mouse out')">
    Mouse Events
  </div>
</div>
```

---

### Get Value from Text Box

- Get value with value change : using keyup event

.ts

```typescript
export class AppComponent {
  title = "CodeSandbox";
  currVal = "";
  getVal(val) {
    console.log(val);
    this.currVal = val;
  }
}
```

.html

```html
<!--The content below is only a placeholder and can be replaced.-->
<div>
  <input
    type="text"
    placeholder="keyup"
    (keyup)="getVal($event.target.value)"
  />
  <h2>{{ currVal }}</h2>
</div>
```

- Get Value in Button Click : using click event

.ts

```typescript
export class AppComponent {
  title = "CodeSandbox";
  currVal = "";
  sendVal(val) {
    alert(val);
    currVal = val;
    window.location.reload();
  }
}
```

.html

```html
<!--The content below is only a placeholder and can be replaced.-->
<div>
  <input type="text" placeholder="keyup" #box />

  <button (click)="sendVal(box.value)">Get Value</button>
  <h2>{{currVal}}</h2>
</div>
```

---

### Property Binding

> IQ : Difference between Property binding and Interpolation

```js
 <input type="text" [value]='name' />
```

Property Binding is used when you have to set an element property to non-string data value.

when you need to concatenate strings, you must use interpolation instead of property binding.

---

### Conditional Statements

1. If Statement : You can have ng-template for if also.

   ---


   ```html
   <div *ngIf="condition">Content to render when condition is true.</div>

   <ng-template [ngIf]="condition"
     ><div>Content to render when condition is true.</div></ng-template
   >

   // Eg
   <div>
     <h1 *ngIf="show=='yes'">If Show is true then i'm visible</h1>
   </div>
   ```
2. If Else

   ```html
   <div *ngIf="condition; else elseBlock">
     Content to render when condition is true.
   </div>
   <ng-template #elseBlock
     >Content to render when condition is false.</ng-template
   >

   // eg :

   <!--The content below is only a placeholder and can be replaced.-->
   <div>
     <h1 *ngIf="show else elseBlockKuchBhiNameDeno">
       If Show is true then i'm visible
     </h1>
     <ng-template #elseBlockKuchBhiNameDeno
       ><h1>
         ng template block are only visible if condition is true , if we make
         use of normal html ofc it will be visible no matter what so that's why
         we make use of ng-template in condition statements
       </h1></ng-template
     >
   </div>
   ```
3. If then else :

   ```html
   <div *ngIf="condition; then thenBlock else elseBlock"></div>
   <ng-template #thenBlock
     >Content to render when condition is true.</ng-template
   >
   <ng-template #elseBlock
     >Content to render when condition is false.</ng-template
   >
   ```
4. Property Binding with If :

   ```html
   <ng-template [ngIf]="show=='red'"><h1>Red block</h1></ng-template>
   ```

   ---

   ### Switch Case

   .html :

```html
<div [ngSwitch]="color">
  <h2 style="background-color : red ;" *ngSwitchCase="'red'">red</h2>
  <h2 style="background-color : green ;" *ngSwitchCase="'green'">green</h2>
  <h2 style="background-color :  #dcd0ff ;" *ngSwitchCase="'lilac'">lilac</h2>
  <h2 style="background-color : orange ;" *ngSwitchCase="'orange'">orange</h2>
  <h2 style="background-color : yellow ;" *ngSwitchCase="'yellow'">yellow</h2>
</div>
```

---

### Loops in AngularJs

.ts

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "CodeSandbox";
  data = ["Riya", "Ria", "Riha", "Riyo"];
  dataOfObj = [
    {
      name: "Riya",
      age: 21,
    },
    {
      name: "Ria",
      age: 22,
    },
    {
      name: "Riyo",
      age: 24,
    },
  ];
}
```

.html

```html
<!-- Array -->
<h4 *ngFor="let item of data">{{item}}</h4>

<!-- Array Of objects -->
<table border="1" style="text-align : center">
  <tr style="background-color : grey">
    <td>Name</td>
    <td>Age</td>
  </tr>
  <tr *ngFor="let item of dataOfObj">
    <td>{{item.name}}</td>
    <td>{{item.age}}</td>
  </tr>
</table>
```

---

# Form in AngularJs

There are 2 types of form in AngularJs

1. Template Driven -> mostly work done in the component template.
2. Reactive -> mostly work done in component class.

> Data Flow : Template -> Class -> Service -> Database

### Template Driven Form

Form handling done on template side i.e html side those forms are know as Template Driven Form

app.module.ts

```js
import {FormsModule} from '@angular/forms';
@NgModule({
 ....
 imports: [FormsModule]
})
```

.ts

```typescript
export class AppComponent {
  title = "CodeSandbox";
  getUserValue(value) {
    console.warn(value);
  }
}
```

.html

```html
<!-- 
  1. Import Form module in module.ts file 
  import { FormsModule } from "@angular/forms";
  2. Make a simple form 
  3. Make a form
  4. Make function and get form value 
-->

<h1>Simple Form in AngularJs</h1>
<form #formId="ngForm" (ngSubmit)="getUserValue(formId.value)">
  <input type="text" ngModel name="username" placeholder="Enter your Name" />
  <input type="number" ngModel name="age" placeholder="Enter your age" />
  <input type="email" ngModel name="email" placeholder="Enter your emailid" />
  <button>Get User Value</button>
</form>
```

### Reactive Form

.module.ts

```js
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
 imports : [ReactiveFormsModule],
})
```

.html

```html
<form [formGroup]="loginFormm" (ngSubmit)="loginUser()">
  <input type="text" placeholder="Enter Name" formControlName="usernamee" />
  <span *ngIf="Username && Username.invalid && Username.touched">This Field is required to be filled</span>
  <input
    type="password"
    placeholder="Enter Password"
    formControlName="passwordd"
  />
  <button [disabled]="loginFormm.invalid">Login</button>
</form>
```

.component.ts

```js
import { FormControl, FormGroup, Validator } from "@angular/forms";
export class AppComponent {
  loginFormm = new FormGroup({
    usernamee: new FormControl("", [ Validator.required, Validator.email]), // u can put default value as well FormControl('defaultValue')
    passwordd: new FormControl(("", [ Validator.required, Validator.minLength(5)]),
  });
  loginUser() {
    console.log(this.loginForm);
  }
  get Username () {
    return this.loginFormm.get('usernamee');
  }
  get Password () {
    return this.loginFormm.get('passwordd);
  }
}
```

---

### Header and Footer

Steps :

1. Create Header and Footer component : `ng g c <header/footer>`
2. Add the respective selector in root html as element eg : ` <app-header></app-header>`
3. To add style make use of .css present in your component folder .
   Reusing we'll see in Routing section

---

### Style binding

- Difference between Normal binding and Style binding
  - If you've to change you're style according to conditions , btn click i.e dynamically then we make use of style binding .
  - Normal style is our normal css which is static .
- Style binding => `<h1 [style.color]=" 'green' "> Hi </h1> `
- Add Dynamic style => `<h1 [style.color]="tsDefinedProperty"> Hi </h1> `
- Update style with button click => call function
- Add conditional style => `<h1 [style.color]="err ? 'red' : 'green' "> Hi </h1> `

---

### Bootstrap with angular js v10 onwards

Steps :

1. Run Command for installing Bootstrap : `ng add @ng-bootstrap/ng-bootstrap`
2. ref ng-bootstrap.github.io official website

---

## Material UI with angular js

Install : `ng add @angular/material`

> Tip : In Question if its captial alphabet then its recommanded by them Y/n

---

# Pass Data Parent To Child Component

Parent :

| .ts                                                                                                                                   | .html                                                                           |
| :------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| export class AppComponent {<br />      title = 'parent' ;<br />     ` data = "Riya" ; `<br />     ` dataObj = {`<br />} | `<app-child [jonamesayaccesskarogayusakaname] = "data/dataObj" ></app-child>` |

Child : object print nahi hota uski keys print hoti hai .

| .ts                                                                                                                                                                                        | .html                                                                                            |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| import { Component , ... ,`Input` } from '@angular/core' ; <br />export class ChildComponent implements OnInit {<br />`@Input() jonamesayaccesskarogayusakaname`<br />.......<br />} | `<h4>{{` `jonamesayaccesskarogayusakaname /jonamesayaccesskarogayusakaname.name/age }}</h4>` |

# Reusable Component in angular

app component (parent) :

| .ts                                                             | .html                                     |
| --------------------------------------------------------------- | ----------------------------------------- |
| export class AppComponent {<br /> ` userDetails = [{`<br />} | `<ul *ngFor="let user of userDetails">` |

user-details component (child) :

| .ts                                                                                                                                       | .html                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| export class UserDetailsComponent implements OnInit {<br /> `@Input() item:{name: string, age:number}={name : '', number : 0};`<br />} | `<li>{{item.name , item.age}}</li>` |

---

# Passing Data from Child To Parent

```html
1. Make a child component 2. Use child comp in parent comp 3. send function from
parent comp 4. call function in child comp 5. get data in parent comp
```

parent :

| .ts                                                                                                 | .html                                                              |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| export class AppComponent {<br /> updateData(item:string){<br /> console.log(item)<br />\}<br />} | `<app-child (updateDataEvent)="updateData($event)"></app-child>` |

child :

| .ts                                                                                                                                                                              | .html                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| import {Output, EventEmitter} from '@angular/cli';<br />export class ChildComponent implements OnInit {<br />` @OutPut updateDataEvent = new EventEmitter<string>();`<br />} | `<input type="text" #userip />`<br />`<button (click)="updateDataEvent.emit(userip.value)">update data</button>` |

---

# Two way binding - Update and display data at same time

app.module.ts : import formModule

```ts
import {FormsModule} from '@angular/forms'

@NgModule({

 imports: [..., FormsModule]

})
```

app.component.ts

```js
export class AppComponent {
  ...
  name: string;
}
```

app.component.html

```html
<input type="text" [(ngModel)]="name" /> // From here data will go to .ts
<h3>{{name}}</h3>
// this data will come from ts so its 2 way html to ts and ts to html
```

NOTE : here name is the property and this [(ngModel)]="name" is called binding

---

# Pipes ' | '

Angular Pipes are **used to transform data on a template** , without writing a boilerplate code in a component. A pipe takes in data as input and transforms it to the desired output. It is like a filter in Angular .

1. Pipe with string
2. Pipe with date
3. Pipe with slice -> `<h1>{{title | slice : (start) 3 : (end) 6 | uppercase}}`
4. Pipe with currency -> `<h1>{{20 | currency: 'INR'}}</h1>`
5. Pipe with json -> `<h2>{{user | json}}</h2>`

#### **Custom pipes**

Command : `ng g p <pipename>`

eg : `ng n p pipes/usdInr`

we are making the pipe that give currency conversion

file : usd-inr.pipe.ts

```js
transform(value, ...args) {
 const [x] = args
 return value * x;
}
// eg : <h2>{{20 | usdInr : 80}}</h2> o/p : 20 * 80 -> 1600
```

---

# Directives

---

# Routing

#### Static, Dynamic, Wild card(404), Nested/Child Routing

app-routing.module.ts

```js

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {NotFoundComponent} from './notFound/notFound.component';

const routes: Routes = [
  {
    component: AboutComponent,
     path: 'about',
     children: [
       {
	  path: 'company',
          component: CompanyComponent,
       },
       {
	  path: 'career',
          component: CareerComponent,
       },
     ]
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  { 
    path : '', 
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
```

.html

```html
<h1> Hello </h1>
<a routerLink="home">Home</a>
<a routerLink="about">About</a>
<a routerLink="user">User</a>
<a routerLink="user/1">Riya</a>
<a routerLink="user/2">Ronak</a>
<router-outlet></router-outlet>
```

user.component.ts

```js
import {ActivatedRoute} from '@angular/router';

export class UserComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
   console.log("user id is : ", this.route.snapshot.paramMap.get('id));
 }
}
```

about.component.html

```html
<h2>Hello to about</h2>
<a routerLink="company"> Company </a>
<a routerLink="career"> Career </a>
<router-outlet></router-outlet>

```

---

# Service



---



Templete ref variable
