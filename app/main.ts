import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { TodoService } from "./todo-service";
import { TodoService } from "./todo-list";
import { TodoModel } from "./todo-model";
import { TodoItemRender} from "./todo-item-render";
class AppComponent{}
bootstrap(AppComponent, [TodoService]);