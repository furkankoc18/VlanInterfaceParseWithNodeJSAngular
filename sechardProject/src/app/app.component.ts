
import { Component } from '@angular/core';
import { InterfaceModel } from './InterfaceModel';
import { Observable, Subscribable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
inputWorld: string;
type: string = 'interface';
searchWorld: any = [];
interfaceList: any = [];
http: HttpClient;
outputWorld: any;

constructor(http: HttpClient)
{
  this.http = http;
}

postInput(event: Event): any
{
  if(this.type === 'vlan'){
      this.outputWorld = this.postVlan(this.inputWorld).data;
    } else {
    this.outputWorld = this.postInterface(this.inputWorld).data;
  }
}

postInterface(input: string): any
{
  return this.http.post('http://localhost:3000/interface', this.inputWorld).subscribe(
    data  =>
    {
      this.outputWorld = JSON.stringify(data);
    },
    error  =>
    {
      console.log('Error postInterface => ', error);
    },
  );
}

postVlan(input: string): any
{
  return this.http.post('http://localhost:3000/vlan', this.inputWorld).subscribe(
    data  =>
    {
      this.outputWorld = JSON.stringify(data);
    },
    error  =>
     {
      console.log('Error postVlan=> ', error);
    },
  );
}

}
