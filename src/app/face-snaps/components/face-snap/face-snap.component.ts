import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  constructor(
    private faceSnapService: FaceSnapService,
    private router: Router){}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }
  onView(){
   this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
  
  onAddSnap(){
    if(this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapFaceById(this.faceSnap.id, 'snap');
      this.buttonText ='Oopss! unSnap!'; 
    } else {
      this.faceSnapService.snapFaceById(this.faceSnap.id,'unsnap')
      this.buttonText='Oh Snap!'
    }
   
  }
}
