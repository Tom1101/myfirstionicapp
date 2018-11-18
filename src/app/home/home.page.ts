import {Component, OnInit} from '@angular/core';
import {ThemesService, Todo} from '../themes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
    todos: Todo[];

    constructor(private todoService: ThemesService) { }

    ngOnInit() {
        this.todoService.getTodos().subscribe(res => {
            this.todos = res;
        });
    }

    remove(item) {
        this.todoService.removeTodo(item.id);
    }
}
