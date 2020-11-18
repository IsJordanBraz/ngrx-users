import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { UsersAddComponent } from './users-add.component';
import * as fromUserReducer from '../../../store/reducers/user.reducer';
import { FormsModule } from '@angular/forms';

describe('UsersAddComponent', () => {
  let component: UsersAddComponent;
  let fixture: ComponentFixture<UsersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAddComponent ],
      imports: [
        StoreModule.forRoot(fromUserReducer.reducer),
        FormsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
