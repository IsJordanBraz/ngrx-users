// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MemoizedSelector, StoreModule } from '@ngrx/store';
// import { RouterModule } from '@angular/router';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import { FormsModule } from '@angular/forms';

// import { UsersEditComponent } from './users-edit.component';
// import * as fromUserReducer from '../../store/user.reducer';
// import { User } from '../../models/users';

// describe('UsersEditComponent', () => {
//   let component: UsersEditComponent;
//   let fixture: ComponentFixture<UsersEditComponent>;
//   let mockStore: MockStore;
//   let mockUserSelector: MemoizedSelector<fromUserReducer.UserState, User>;
//   let initialState = fromUserReducer.initialState;

//   console.log('inicial',initialState);
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ UsersEditComponent ],
//       providers: [provideMockStore({ initialState }),],
//       imports: [
//         StoreModule.forRoot(fromUserReducer.reducer), 
//         RouterModule.forRoot([]),
//         FormsModule
//       ],
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UsersEditComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     mockStore = TestBed.inject(MockStore);
    
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
