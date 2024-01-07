### Installation

```js
npm install -g @angular/cli
ng version
ng new <appname>
ng serve
```

---

### Interpolation/ Data Binding

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

### Events in Angular / Event Binding

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

### Get Value from Text Box/ Send data from event binding ($event)

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
  <span *ngIf="Username && Username.invalid && Username.touched"
    >This Field is required to be filled</span
  >
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

# Pass Data Parent To Child Component - @Input() decorator

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

# Passing Data from Child To Parent - @Output decorator

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

# Two way binding [(ngModel)] - Update and display data at same time

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
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { NotFoundComponent } from "./notFound/notFound.component";

const routes: Routes = [
  {
    component: AboutComponent,
    path: "about",
    children: [
      {
        path: "company",
        component: CompanyComponent,
      },
      {
        path: "career",
        component: CareerComponent,
      },
    ],
  },
  {
    path: "user/:id",
    component: UserComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
```

.html

```html
<h1>Hello</h1>
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

Service in Angular is a way to organize and share code or functionality that can be used across different parts of an Angular application. It helps in keeping the code modular, reusable, and makes it easier to manage dependencies and communication between different components.

Characteristics :

1. **Singleton Pattern:** By default, Angular services are singleton objects, meaning there is only one instance of a service created and shared throughout the application. This ensures that data and functionality are consistent across different parts of the application.
2. **Dependency Injection (DI):** Angular's dependency injection system is used to provide services to components and other services. This makes it easy to manage and inject dependencies, promoting loose coupling between different parts of the application.
3. **Encapsulation of Business Logic:** Services are commonly used to encapsulate business logic, data manipulation, and other functionalities that are not directly related to the user interface. This separation of concerns helps in keeping components clean and focused on the presentation layer.
4. **Reusability:** Since services are standalone entities, they can be reused across multiple components or even in different parts of the application. This promotes a modular and scalable code structure.
5. **Communication Between Components:** Services can act as intermediaries for communication between different components. They can store and manage shared data, and components can interact with the service to exchange information.
6. **HTTP Services:** Services are often used to encapsulate HTTP communication with a server. This helps in centralizing API calls, error handling, and other related functionality.

#### Make Service :

1. Command : `ng g service services/<service name> userdata`
2. userdata.service.ts :

   ```ts
   import { Injectable } from "@angular/core";

   @Injectable({
     providedIn: "root",
   })
   export class UserdataService {
     constructor() {}
     users() {
       return [
         {
           name: "Babu rao",
           age: 40,
         },
         {
           name: "Raju bhai",
           age: 29,
         },
       ];
     }
   }
   ```
3. app.component.ts

   ```ts
   // Import the service
   import {UserdataService} from './services/userdata.service'
   ....
   @Component({
    ...
    providers: [UserdataService],
   })
   export class AppComponent {
      users: any;
      constructor(private userdata:UserdataService) {
          console.log("userdata" , userdata.users());
          this.users = userdata.users();
      }
   }
   ```
4. app.component.html

   ```html
   <ul>
     <li *ngFor="let user of users">{{user.name + ", " + user.age}}</li>
   </ul>
   <app-footer></app-footer>
   ```
5. footer.component.html

   ```html
   <h5>Footer</h5>
   <ul>
     <li *ngFor="let user of users">{{user.name + ", " + user.age}}</li>
   </ul>
   ```
6. footer.component.ts

   ```ts
   // Import the service
   import {UserdataService} from './services/userdata.service'
   ....
   @Component({
    ...
    providers: [UserdataService],
   })

   export class FooterComponent {
      users: any;
      constructor(private userdata:UserdataService) {
          console.log("userdata" , userdata.users());
          this.users = userdata.users();
      }
   }
   ```

#### Hierarchical Injection of the Services & Sharing of Instances

app module -> Highest level -> same instance will be shared to all components and also services.

app component.ts -> Sec Highest level -> same instance will be shared to all child components but services will have different instance.

child component -> each one will be having different instances.

```ts
// Just remove the provide from @component from child component. Just keep it in app component.
```

#### Injecting Services into another Services. Usage of @Injectable decorator.

In Angular, dependency injection is a core concept that allows you to inject services into other services, components, or directives. This helps in creating modular and maintainable code by promoting the reusability of services and managing their dependencies.

Here's a brief explanation of injecting services into other services in Angular:

1. **Service Definition:**
   First, you need to define the services you want to inject. For example, let's create a simple `LoggerService`:

   ```typescript
   // logger.service.ts
   import { Injectable } from '@angular/core';

   // When we don't have @Component decorator we have to make use of @Injectable decorator to inject the dependency.
   @Injectable({
     providedIn: 'root',
   })
   export class LoggerService {
     log(message: string): void {
       console.log(message);
     }
   }
   ```
2. **Injecting Service into Another Service:**
   Now, let's create another service, say `DataService`, and inject the `LoggerService` into it:

   ```typescript
   // data.service.ts
   import { Injectable } from '@angular/core';
   import { LoggerService } from './logger.service';

   @Injectable({
     providedIn: 'root',
   })
   export class DataService {
     constructor(private logger: LoggerService) {}

     fetchData(): void {
       this.logger.log('Fetching data...');
       // Perform data fetching logic here
     }
   }
   ```

   In this example, the `DataService` depends on the `LoggerService`, and Angular's dependency injection system automatically provides an instance of `LoggerService` when creating an instance of `DataService`.
3. **Usage in a Component:**
   You can then use these services in your components:

   ```typescript
   // app.component.ts
   import { Component } from '@angular/core';
   import { DataService } from './data.service';

   @Component({
     selector: 'app-root',
     template: `
       <button (click)="fetchData()">Fetch Data</button>
     `,
   })
   export class AppComponent {
     constructor(private dataService: DataService) {}

     fetchData(): void {
       this.dataService.fetchData();
     }
   }
   ```

   Here, the `AppComponent` injects the `DataService` and calls the `fetchData` method, which, in turn, logs a message using the `LoggerService`.
4. **ProvidedIn Property:**
   The `providedIn` property within the `@Injectable` decorator specifies the injector for the service. It can take one of the following values:

* `'root'`: The service is provided globally in the root injector. It becomes a singleton available throughout the application.
* A specific module: The service is provided at the module level, and a new instance is created for each module that injects it.

By following this approach, you create services that are loosely coupled and easily maintainable, as each service can focus on its specific functionality, and dependencies are managed through Angular's dependency injection system.

#### Making the cross component communication using the services by event emitter.

Angular services can be used for cross-component communication by employing an `EventEmitter`. The idea is to create a service that acts as a mediator, allowing components to communicate through it. Here's a step-by-step guide:

1. **Create a Service:**
   Create a service that will be responsible for handling the communication. This service will expose an `EventEmitter` that components can subscribe to and emit events.

   ```typescript
   // communication.service.ts
   import { Injectable, EventEmitter } from '@angular/core';

   @Injectable({
     providedIn: 'root',
   })
   export class CommunicationService {
     // Create an EventEmitter
     public messageEmitter: EventEmitter<string> = new EventEmitter<string>();

     // Method to broadcast a message
     sendMessage(message: string): void {
       this.messageEmitter.emit(message);
     }
   }
   ```
2. **Inject the Service into Components:**
   Inject the `CommunicationService` into the components that need to communicate.

   ```typescript
   // component-a.component.ts
   import { Component } from '@angular/core';
   import { CommunicationService } from './communication.service';

   @Component({
     selector: 'app-component-a',
     template: `
       <div>
         <p>{{ receivedMessage }}</p>
       </div>
     `,
   })
   export class ComponentA {
     receivedMessage = '';

     constructor(private communicationService: CommunicationService) {
       // Subscribe to the messageEmitter in the service
       this.communicationService.messageEmitter.subscribe((message) => {
         this.receivedMessage = message;
       });
     }
   }
   ```

   ```typescript
   // component-b.component.ts
   import { Component } from '@angular/core';
   import { CommunicationService } from './communication.service';

   @Component({
     selector: 'app-component-b',
     template: `
       <div>
         <input [(ngModel)]="message" placeholder="Type a message" />
         <button (click)="sendMessage()">Send Message</button>
       </div>
     `,
   })
   export class ComponentB {
     message = '';

     constructor(private communicationService: CommunicationService) {}

     sendMessage(): void {
       // Call the sendMessage method of the service
       this.communicationService.sendMessage(this.message);
     }
   }
   ```
3. **Register the Service in AppModule:**
   Ensure that the service is registered in the `providers` array of the `AppModule`.

   ```typescript
   // app.module.ts
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { FormsModule } from '@angular/forms';

   import { AppComponent } from './app.component';
   import { ComponentA } from './component-a.component';
   import { ComponentB } from './component-b.component';
   import { CommunicationService } from './communication.service';

   @NgModule({
     declarations: [AppComponent, ComponentA, ComponentB],
     imports: [BrowserModule, FormsModule],
     providers: [CommunicationService], // Register the service here
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   ```

Now, when you enter a message in `ComponentB` and click "Send Message," `ComponentA` will receive and display that message through the `CommunicationService`. This is a simple example of cross-component communication using Angular services and `EventEmitter`.

---

# API Call

##### GET :

1. Flow :` Angular[component -> service -> HTTP Module] -> server`
2. Make service :
   a. Create : `ng g service services/usersData`
   b. users-data.service.ts :

   ```ts
   import {HttpClient} from '@angular/common/http';
   export class UsersDataService {
     constructor(private http:HttpClient) {
       users() {
         return this.http.get('http://localhost:3000/users');
       }
     }
   }
   ```
3. Add Http module in **app.module.ts** :

   ```ts
   import {HttpClientModule} from '@angular/common/http'
   @NgModule({
     imports: [...., HttpClientModule],
   })
   ```
4. app.component.ts :

   ```ts
   import {UsersDataService} from './services/users-data.service.ts';

   export class AppComponent {
     users:any  ;
     constructor(private userData:UsersDataService) {
       userData.users().subscribe((data) => this.users = data; )
    }
   }
   ```
5. app.component.html :

   ```html
   <ul>
     <li *ngFor="let user of users">{{user.name}}</li>
   </ul>
   ```

##### POST :

1. Make Form :

   app.module.ts :

   ```ts
   import {FormsModule} from '@angular/forms';
   @NgModule(
   {
     imports : [...,FormsModule],
   }
   )
   ```

   app.component.html :

   ```html
   <h1>Form</h1>
   <form #newUserForm="ngForm" (ngSubmit)="getUserFormData(newUserForm.value)">
     <input ngModel type="text" name="name" placeholder="Enter Name" />
     <input ngModel type='password' name="password' placeholder="Enter
     Password"/>
     <button>Add User</button>
   </form>
   ```
2. Get Form data, Call post api
   app.component.ts

   ```ts
   getUserFormData(data: any) {
      this.userData.saveUsers(data).subscribe((res) => console.log(res));
   }
   ```
3. Make Service

   users-data.service.ts :

```ts
import {HttpClient} from '@angular/common/http';
export class UsersDataService {
  constructor(private http:HttpClient) {
    saveUsers(data: any) {
      return this.http.post('http://localhost:3000/users', data);
    }
  }
}
```

---

# RxJs

## Observables & Observers

##### What is an Observable?

1. An observable is like a data stream that can emit multiple values over time.
2. They are commonly used to handle asynchronous operations, such as fetching data from a server, responding to user input, or dealing with events.

##### What is Observer?

1. An observer is an object that watches the observable. It defines what to do when the Observable emits a value, encounters an error, or completes.
2. Think of it as a set of callbacks that get executed when certain events happen in the observable.

##### Promises Vs. Observable?

### Operators

RxJS operators are powerful functions that enable you to manipulate and transform data emitted by observables before sending to the subscribe data.

Code : we'll simulate fetching user data from an API and transforming the data using the map operator.we'll add the filter operator to filter out users with an odd id.

1. DataService

```ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
```

2. app.component.ts

```ts
import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  template: '<div *ngFor="let user of users">{{ user.name }}</div>',
})
export class AppComponent implements OnInit {
  users: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Creating an Observer
    const userObserver = {
      next: (data) => {
        // Handling emitted data
        console.log("Received data:", data);
        this.users = data; // Update component property
      },
      error: (error) => {
        // Handling errors
        console.error("Error fetching data:", error);
      },
      complete: () => {
        // Handling completion (optional)
        console.log("Data retrieval complete.");
      },
    };

    // Using Observable with map operator
    this.dataService
      .getUsers()
      .pipe(
        map((users) =>
          users.map((user) => ({
            id: user.id,
            name: user.name.toUpperCase(), // Using map operator to transform data
          }))
        ),
        filter((user) => user.id % 2 === 0) // Using filter operator to keep users with even id
      )
      .subscribe(userObserver);
  }
}
```

## Subjects

observable are very useful to handle a variety of common asynchronous operations but its default behaviour(unicast) can't be used in all scenarios. A subject is like an observable, but can multicast to many observers. Subjects are like EventEmitters, they maintain a registry of many listeners.Subjects can be use as a data Provider and Consumer.

##### Unicast :

An observable by default is unicast. Unicasting means that each subscribed observer owns an independent execution of the observable. (one to one)

##### Multicast :

Multicast involves sharing the same execution of an Observable among multiple subscribers. Instead of each subscriber having its own execution of the Observable, they share a common source of emitted values. (one to many).

Code : app.component.ts

```ts
const subject = new Subject();
// Subscriber 1
subject.subscribe((d) => console.log(d));
// Subscriber 2
subject.subscribe((d) => console.log(d));
subject.next(Math.random());
```

## Create Multicast Observable/ use subject over observable

code : Using Ajax whose default behaviour is observable.

```ts
const data = ajax("https://jsonplaceholder.typicode.com/users");
// Normal observable
data.subscribe((d) => console.log(d));
data.subscribe((d) => console.log(d));
// use subject over observable
const subject = new Subject();
const result = data.subscribe(subject);
```

## BehaviorSubject

- A BehaviorSubject holds one value(default value). When it is subscribe it emits the value immediately.
- A Subject doesn't hold a value (has no default value).

```ts
const bSub = new BehaviorSubject<number>(12);
bSub.subscribe((d) => console.log(`BehaviourSubject subscriber 1 - ${d}`)); // o/p :  12
bSub.next(200);
bSub.subscribe((d) => console.log(`BehaviourSubject subscriber 1 - ${d}`)); // o/p :  200
```

---

## Subject and Behavior Subject - Component communication using Subject.

Share data between non-relational component. Meaning we can easily pass data from Parent to child component & vica versa but how to share data between non-relational component. We achieve it via Subjects & service. (watch Video)

---

## ReplaySubject

- Replay Subject is a variant of Subject that emits/buffer old values and emit those values to new subscribers. Not Initial value its buffer old values.

```ts
// we are putting $ just as Naming Convention that the variable is the observable.
const $msgs = new ReplaySubject();
$msgs.next("Hello 1");
$msgs.next("Hello 2");

$msgs.subscribe((msg) => console.log(`User1 : ${msg}`)); // It will hold all the value no matter how many there are.

// If you just want some N last no. of values - we make use of bufferValue
const $msgs = new ReplaySubject(2); // Here 2 means only hold the last 2 values
$msgs.next("Hello 1");
$msgs.next("Hello 2");
$msgs.next("Hello 3");
$msgs.next("Hello 4");

$msgs.subscribe((msg) => console.log(`User1 : ${msg}`));
$msgs.next("Hello 5");

/* O/P : 
Hello 3
Hello 4
Hello 5
*/
```

---

## AsyncSubject

- The AsyncSubject is a Subject variant where only the last value of the Observable execution is sent to its subscribers, and only when the execution completes.
- It could be useful for fetching and caching (one-shot) resources, since generally http.get will emit one response then complete.

```ts
const asyncSub = new AsyncSubject();
asyncSub.next("Val 1");
asyncSub.next("Val 2");
asyncSub.next("Val 3");
asyncSub.subscribe((d) => console.log(d)); // Val 3 : last emitted value before the complete method
asyncSub.complete(); // 3
asyncSub.next("Val 4");
asyncSub.next("Val 5");
asyncSub.complete(); // Still the Value is 3, coz async work only for single value

asyncSub.subscribe((d) => console.log(d)); // Val 3 : last emitted value before the complete method
```

Code : Working with api

```ts
const url = "https:''restcountries.eu/rest/v2/name/india?fullText=true";

const cache = {};

function getCountryInfo(url) {
  if (!cache[url]) {
    // api call using fetch
    cache[url] = new AsyncSubject();
    fetch(url)
      .then((res) => res.json())
      .then((res) => res.json())
      .then((d) => {
        cache[url].next(d);
        cache[url].complete();
      });
  }
  return cache[url].asObservable();
}

getCountryInfo(url).subscribe((res) => console.log(res));

setTimeout(() => {
  getCountryInfo(url).subscribe((res) => console.log(res));
}, 3000);
```

---

# @ViewChild/@ViewChildren

#### @ViewChild

In Angular 8, `@ViewChild` is a decorator that is used to query and obtain a reference to a child component, directive, or element from the template. It allows you to access and interact with the properties and methods of the queried element within the parent component.

Here's a breakdown of the metadata properties associated with `@ViewChild` in Angular 8:

1. **selector:**

   - This property specifies the type of the directive or the name used for querying. It determines which child element or component you want to select and access in the parent component. The selector can be the name of the directive, component, or the template reference variable used in the template.

   ```typescript
   @ViewChild(MyComponent) myComponentRef: MyComponent;
   ```

   - In this example, `MyComponent` is the type of the directive or component being queried.
2. **read:**

   - The `read` property is optional and allows you to specify a different token from the queried elements. Tokens are objects that are used to identify and retrieve dependencies in Angular. By default, `@ViewChild` uses the type specified in the `selector` property as the token.

   ```typescript
   @ViewChild('myTemplateRef', { read: ElementRef }) myElementRef: ElementRef;
   ```

   - In this example, `ElementRef` is specified as the token to read a reference to the native element of the queried template reference variable.
3. **static:**

   - The `static` property is a boolean that determines when the query should be resolved. If set to `true`, the query is resolved at compile time, which means before change detection runs. If set to `false` or not provided, the query is resolved at runtime, which means after the `ngAfterViewInit` lifecycle hook.

   ```typescript
   @ViewChild(MyComponent, { static: true }) myComponentRef: MyComponent;
   ```

   - Setting `static` to `true` can be beneficial in situations where you need to access the queried element before the view is initialized. However, in most cases, the default behavior (runtime resolution) is suitable.

In summary, `@ViewChild` is a powerful tool in Angular 8 for obtaining references to child components or elements within the template. The metadata properties provide flexibility in specifying what to query, how to read it, and when to resolve the query.

#### @ViewChildren

In Angular, `@ViewChildren` is a decorator used for view queries. Similar to `@ViewChild`, `@ViewChildren` allows you to query and obtain references to multiple child elements, directives, or components within the template of a parent component. The key difference between `@ViewChild` and `@ViewChildren` is that the former retrieves a single instance, while the latter retrieves a QueryList containing all matching instances.

# @ContentChild/@ContentChildren

---

# Lazy Loading

Lazy loading in Angular is a technique used to load modules on-demand, rather than loading the entire application at once. This can significantly improve the initial loading time of your Angular application, as only the essential modules are loaded initially, and additional modules are loaded as needed.

Code : `For Modules`

1. app-routing.module.ts :

```ts
const appRoutes: Routes = [
  {
    path: "users",
    loadChildren: () => import("./user.module").then((m) => m.UserModule),
  },
];
```

2. User.module.ts :

```ts
const routes: Routes = [
  {
    path: "", // Remove the path
  },
];
```

Code : ``

---

# Just In Time (JIT) Compiler & Ahead Of Time (AOT) Compiler

#### JIT :

In JIT Compilation, the Angular code is compiled in the user's browser at runtime. THis means the compilation happens just before the application runs on the user's machine.

#### AOT :

In AOT Compilation, the Angular code is compiled during the build process, before the application is deployed to the user's browser. The compiled code is then shipped, reducing the need for compilation in the user's browser.

Code : `ng build --prod`

---

---

Remaning topics : Templete ref variable, @ContentChild/@ContentChildren, Content Projection with ng-content
