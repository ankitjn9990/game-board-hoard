import { Component } from '@angular/core';
import { getAllGames } from '../fake-api';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule,MatCardModule],
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();
}