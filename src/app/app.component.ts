import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts = [
      {
      title: 'Mon premier Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et dapibus turpis, quis aliquam tellus. Duis vitae placerat eros. Fusce laoreet tempus quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse fermentum nunc tellus, varius euismod tellus posuere eu. Ut a facilisis arcu, ut malesuada ipsum. Ut viverra nunc nisi, in dapibus felis ullamcorper pellentesque. Maecenas lacinia urna ac libero euismod, ac varius purus faucibus. Aenean elementum fermentum justo, tincidunt luctus nisi ultrices ut.',
      loveIts: 0,
      created_at: new Date()
    } ,
    {
      title: 'Mon deuxième Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et dapibus turpis, quis aliquam tellus. Duis vitae placerat eros. Fusce laoreet tempus quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse fermentum nunc tellus, varius euismod tellus posuere eu. Ut a facilisis arcu, ut malesuada ipsum. Ut viverra nunc nisi, in dapibus felis ullamcorper pellentesque. Maecenas lacinia urna ac libero euismod, ac varius purus faucibus. Aenean elementum fermentum justo, tincidunt luctus nisi ultrices ut.',
      loveIts: 0,
      created_at: new Date()
    } ,
    {
      title: 'Mon troisième Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et dapibus turpis, quis aliquam tellus. Duis vitae placerat eros. Fusce laoreet tempus quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse fermentum nunc tellus, varius euismod tellus posuere eu. Ut a facilisis arcu, ut malesuada ipsum. Ut viverra nunc nisi, in dapibus felis ullamcorper pellentesque. Maecenas lacinia urna ac libero euismod, ac varius purus faucibus. Aenean elementum fermentum justo, tincidunt luctus nisi ultrices ut.',
      loveIts: 0,
      created_at: new Date()
    } 
  ];
}
