import { Component, OnInit, OnDestroy, Input } from "@angular/core";
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
  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[] = [];
  alertSubscription: Subscription;
  routerSubscription: Subscription;

  constructor(
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    // subscribe to new alerts

    // if not alerts then clear alerts array

    // filter out 'keepAfterRouteChange'

    // remove 'KeepAfterRouteChange'

    // add alert to array

    // if required then auto close alert

    // clear alerts on location change
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
  }

  removeAlert(alert: Alert){
    // if alert array is empty then return

    // fade out alert

    // remove alert after fadeout

    // remove alert
  }

  scssClass(alert: Alert) {
    // if there is no alert then return
    // else

    // create a style classes array

    // create alertTypeClass object

    // push alertTypeClass[alert.type] into styles class array

    // if alert fade then push 'fade' to style classes array

    // return style classes with .join(' ')
  }
}
