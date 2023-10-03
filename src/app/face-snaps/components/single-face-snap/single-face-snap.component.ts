import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snap.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})

export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;
  constructor(private faceSnapService: FaceSnapService,
    private route: ActivatedRoute){}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
  
  onAddSnap(faceSnapId: number){
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapService.snapFaceById(faceSnapId, 'snap').pipe(
          tap(() => this.buttonText = 'Oops, unSnap!')
      );
  } else {
      this.faceSnap$ = this.faceSnapService.snapFaceById(faceSnapId, 'unsnap').pipe(
          tap(() => this.buttonText = 'Oh Snap!')
      );
  }
  }

}
