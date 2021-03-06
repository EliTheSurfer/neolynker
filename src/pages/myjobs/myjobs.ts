import { ProfileDetailsPage} from '../profile-details/profile-details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Component({
  selector: 'page-myjobs',
  templateUrl: 'myjobs.html'
})
export class MyJobsPage {

  
  consultants : FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, private af: AngularFire) {
    this.consultants = af.database.list('/consultants');

    console.log(this.consultants); 
    
  }

  goToConsultantDetails(profil:any) {
    this.navCtrl.push(ProfileDetailsPage,{
      profil: profil
    } );
    
  }

}
