import './style.sass';
import index from './index.html';

export class PageNotFoundTemplate {
    create(): void {
        document.body.innerHTML += index;
    }
}