import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { UserService } from "../service/user.service";
import { User } from "../model/user.model";
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public showWebcam = false;
  public isShow = false;
  public isTrue = false;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
 
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();


  users: User[];
  public empl = [];
  

  constructor(private router: Router, private authService: UserService) { }

  
  ngOnInit() {
  
  }
  // Onclick of see my repos buttons logged in user Repose will recieveb
  seeMyRepos() {
    this.authService.getRepos().subscribe(data=>{
    this.empl = data;
    console.log("this.repos",this.empl)
    this.isShow = true;
    this.showWebcam = true;
    this.isTrue = true;
  },err=>{
    console.log(err);
  });
}

// To Capture the Image
  public triggerSnapshot(): void {
    this.trigger.next();
  }
// To open and close the Web cam
  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }
  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

 
  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  // To get the captured Image
  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }
  public saveImage() {
    this.authService.saveImage(this.webcamImage)
  }
}
