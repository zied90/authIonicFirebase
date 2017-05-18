import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{FirebaseService}  from '../../providers/firebase-service'
import{FirebaseListObservable} from 'angularfire2/database'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingItems:FirebaseListObservable<any[]>
 newItem='';
  constructor(public navCtrl: NavController ,public firebaseService:FirebaseService) {
this.shoppingItems=this.firebaseService.getshopping();
  }
  addItem(){
this.firebaseService.addItem(this.newItem);
  }
  removeItem(id){
this.firebaseService.removeItem(id);
  }

}
