import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
	panelOpenState = false;
  
  logout() {
		localStorage.clear();
		window.location.href = environment.interop.authCore.linkRedirectAuth;
	}
}
