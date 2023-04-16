### Interpolation

Interpolation is the way by which you can pass a data from  component.ts -> component.html file  . One-way of data binding .

|   With   | component.ts                                                                                                                                             | component.html |
| :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------: |
| variable | export class AppComponent {<br />      appName = 'xyz' ;<br />      `name = "Riya B."`<br />}                                                    |   {{ name }}   |
| function | export class AppComponent {<br />       appName = 'xyz';<br />       `test () {...}`<br />}                                                    |  {{ test() }}  |
|  object  | export class AppComponent {<br />       appName = 'xyz'<br />       `obj = {`<br />           ` age : 20`<br />     `  }`<br />} | {{ obj.age }} |
|  array  | export class AppComponent {<br />    appName = 'xyz' ;<br />    `arr = [ 1, 2, 3]`<br />}                                                          |  {{ arr[0] }}  |

---

### Component

A component is the basic building block of Angular . eg Navbar is a component , footer is the component etc .

app component is the ***root*** ***component*** of our angular project .

There are usually ***4*** component file

1. component.ts -> has a selector : 'app-root'
2. component.html -> template
3. component.css -> style
4. component.spec.ts -> for testing

##### Making Own Component from CL :

make sure you're in src>app this component will be inside app folder

> `ng g c #componentName#`

g - generate , c - component

You can also *check in app.module.ts* file your new added component like { componentName } from "path" ;

##### How to Use it :

Go to index.html file and add the element with ***selector*** in body element

selector name is in your .ts file eg,  `<app-componentname></app-componentname> eg : <app-user-list> </app-user-list> `

---

### Module

A Module is a mechanism to group components , directives , pipes and services that are related .

In this file you'll see import of components and module and declarations of component and importing of module then we've providers etc

##### Make module using CL :

> `ng g m #ModuleName# `

g - generate , c - component

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
  title = "CodeSandbox" ;
  username = "Riyo"
  getName(name) {
    alert(name);
  }
}
```

Step 2 : Add btn in comp.html file and add click event as shown below

```html
// Case 1 : 
<div>
  <button (click)=" getName('riya') " >Get My Name</button>
</div>

case 2 : 
<button (click)=" getName(username) " > Get My Name </button>
```

---

### Events in Angular

* Click
* KeyUp
* KeyUp with enter and space
* KeyDown
* Blur
* MouseOver and MouseLeave
* Get Values from textbox

.ts :

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
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
<!--The content below is only a placeholder and can be replaced.-->
<div>
  <button (click)="myEvent('this is click event')">
    Click Me
  </button>
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

* Get value with value change : using keyup event

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

* Get Value in Button Click : using click event

.ts

```typescript
export class AppComponent {
  title = "CodeSandbox";
  currVal = "";
  sendVal(val) {
    alert(val);
    currVal = val ;
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
   <h2> {{currVal}} </h2>
</div>
```


---

### Property Binding 

> IQ : Difference between Property binding and Interpolation

Nahi Samaja

---

### Statements 

1. If Statement : You can have ng-template for if also

   ```html
   <div *ngIf="condition">Content to render when condition is true.</div>

   <ng-template [ngIf]="condition"><div>Content to render when condition is
   true.</div></ng-template>

   // Eg
   <div>
     <h1 *ngIf="show=='yes'" >If Show is true then i'm visible</h1>
   </div>

   ```
2. If Else

   ```html
   <div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
   <ng-template #elseBlock>Content to render when condition is false.</ng-template>

   // eg : 

   <!--The content below is only a placeholder and can be replaced.-->
   <div>
     <h1 *ngIf="show else elseBlockKuchBhiNameDeno">If Show is true then i'm visible</h1>
     <ng-template #elseBlockKuchBhiNameDeno ><h1>ng template block are only visible if condition is true , if we make use of normal html ofc it will be visible no matter what so that's why we make use of ng-template in condition statements</h1></ng-template>
   </div>

   ```
3. If then else :

   ```html
   <div *ngIf="condition; then thenBlock else elseBlock"></div>
   <ng-template #thenBlock>Content to render when condition is true.</ng-template>
   <ng-template #elseBlock>Content to render when condition is false.</ng-template>
   ```
4. 
5. elseIf
6.
