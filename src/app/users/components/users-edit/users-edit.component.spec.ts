import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoizedSelector, StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';

import { UsersEditComponent } from './users-edit.component';
import * as fromReducer from '../../store/user.reducer';
import * as fromSelector from '../../store/user.selecters';
import { User } from '../../models/users';

const selectThisUsers: User = {
  id: 1,
  nome: 'jordan',
  email: '0000',
  cpf: '1111'
}

describe('UsersEditComponent', () => {
  let component: UsersEditComponent;
  let fixture: ComponentFixture<UsersEditComponent>;
  let mockStore: MockStore;
  let mockUsernameSelector: MemoizedSelector<fromReducer.UserState, any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersEditComponent ],
      providers: [provideMockStore()],
      imports: [
        RouterModule.forRoot([]),
        FormsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersEditComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockUsernameSelector = mockStore.overrideSelector(fromSelector.selectedUser, selectThisUsers);
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
