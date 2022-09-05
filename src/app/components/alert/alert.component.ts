import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { Subscription } from "rxjs";
import { Alert, AlertType } from "src/app/models";
import { AlertService } from "src/app/services";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
