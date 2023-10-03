import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snap.service';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  
  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;
  
  
  constructor(private faceSnapService: FaceSnapService){
  
  }
  ngOnInit() {
    // this.faceSnaps = this.faceSnapService.getAllFaceSnaps() ;
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
  }
 

}
