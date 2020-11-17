import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import * as UsersStub from './users.stub';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UsersService);
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
