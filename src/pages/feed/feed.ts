import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario:string = "Marcel Fernandes Codigo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDois(valor1:number,valor2:number):number {
    var soma:number = valor1+valor2;

    return soma;
  }

  ionViewDidLoad() {
    var soma:number = this.somaDois(2,2);
    //alert(soma);

    console.log('ionViewDidLoad FeedPage');
  }

}
