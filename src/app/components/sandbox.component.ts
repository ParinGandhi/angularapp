import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <button id="btn" (click)="fireEvent($event)">Click event</button>
        <br>
        <button id="btn" (mouseover)="fireEvent($event)">Mouseover event</button>
        <br>
        <button id="btn" (mousedown)="fireEvent($event)">Mousedown event</button>
        <br>
        <button id="btn" (mouseup)="fireEvent($event)">Mouseup event</button>
        <br>
        <button id="btn" (dblclick)="fireEvent($event)">Double click event</button>
        <br>
        <button id="btn" (drag)="fireEvent($event)">Drag event</button>
        <br>
        <button id="btn" (dragover)="fireEvent($event)">Drag over event</button>
    `
})

export class SandboxComponent {
    fireEvent(event) {
        console.log(event.type);
    }
}