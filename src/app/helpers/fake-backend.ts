import { Injectable } from "@angular/core";
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { delay, dematerialize, materialize, Observable, of, throwError } from "rxjs";

const usersKey = 'SuperTopDoubleBackSecret';
let users = JSON.parse(localStorage.getItem(usersKey)); // current value of usersKey 

