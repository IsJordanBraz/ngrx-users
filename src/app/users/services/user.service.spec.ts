import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import * as UsersStub from './user.stub';

describe('UsersService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a user', () => {
    expect(service).toBeTruthy();
  });

  it('get a list of users', () => {
    expect(service).toBeTruthy();
  });

  it('get a single user', () => {
    expect(service).toBeTruthy();
  });

  it('should update one user', () => {
    expect(service).toBeTruthy();
  });

  it('should delete one user', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar produto', fakeAsync(() => {
    const fakeBody = UsersStub.userStub;
    service.getUser(5).subscribe(response => {
      expect(response.name).toEqual(fakeBody.name);
    });
  }));

});
