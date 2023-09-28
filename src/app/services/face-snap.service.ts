import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {

  faceSnaps:FaceSnap[] = [
    {
      id:1,
      title:'Archibald',
      description:'Mon meilleur ami',
       createdDate :new Date(),
       snaps:150,
      imageUrl:'https://4.bp.blogspot.com/-lxK8zo657wQ/Uz_BvsI5wUI/AAAAAAAAEW0/XgZEeVt8p04/s1600/image_2.jpg',
      location: 'kébili'
     },
     {
      id:2,
      title:'Ahmed',
      description:'Mon meilleur ami',
       createdDate :new Date(),
       snaps:7,
      imageUrl:'https://pixy.org/src/477/4774988.jpg',
      location: 'Paris'
     },
     {
      id:3,
      title:'Ahmed',
      description:'Mon meilleur ami',
       createdDate :new Date(),
       snaps:7,
      imageUrl:'https://www.eternallifeblog.com/wp-content/uploads/2011/09/iStock_000014144842Large.jpg',
      
     },
     {
      id:4,
      title:'Ali',
      description:'Mon meilleur ami',
       createdDate :new Date(),
       snaps:9,
      imageUrl:'https://th.bing.com/th/id/OIP.6L7shpwxVAIr279rA0B1JQHaE7?pid=ImgDet&rs=1',
      
     }
  ];
  getAllFaceSnaps():FaceSnap[] {
    return this.faceSnaps;
  }

  getsnapFaceById(faceSnapId:number): FaceSnap {
    const faceSnap = this .faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    } else{
      return faceSnap;
    }
  }

  snapFaceById(faceSnapId:number, snapType:'snap'| 'unsnap'): void {
    const faceSnap = this.getsnapFaceById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
