import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { UsersListComponent } from './users-list.component';
import * as fromReducer from '../../../store/reducers/user.reducer';
import * as fromSelector from '../../../store/selectors/user.selectors';
import { User } from '../../../store/interfaces/users';

const selectThisUsers: User[] = [{
  id: 1,
  name: 'Jordan Braz',
  email: 'jordan@gmail',
  cpf: '607.475.551-50'
}];

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let mockStore: MockStore;
  let mockUsernameSelector: MemoizedSelector<fromReducer.UserState, any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [ UsersListComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockUsernameSelector = mockStore.overrideSelector(fromSelector.selectUsers, selectThisUsers);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test table', () => {
    fixture.whenStable().then(() => {
      const tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(2);

      const row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toBe('1');
      expect(row1.cells[1].innerHTML).toBe('Jordan Braz');
      expect(row1.cells[2].innerHTML).toBe('jordan@gmail');
      expect(row1.cells[3].innerHTML).toBe('607.475.551-50');
    });
    expect(component).toBeTruthy();
  });
});
