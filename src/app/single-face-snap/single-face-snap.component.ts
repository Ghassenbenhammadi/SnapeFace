import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})

export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;
  constructor(private faceSnapService: FaceSnapService,
    private route: ActivatedRoute){}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getsnapFaceById(faceSnapId);
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
