import { User } from '../interfaces/users';
import * as fromUserActions from '../actions/user.actions';
import { reducer, initialState } from './user.reducer';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { Update } from '@ngrx/entity';

const usersList: User[] = [
  { 
    id: 1, 
    name: 'jordan', 
    cpf: '21.699.461-5', 
    email: 'jordan@gmail'
  },
  { 
    id: 2,
    name: 'Jordan Braz', 
    cpf: '21.699.461-5', 
    email: 'jordan@gmail'
  }
];

describe('Users Reducer', () => {
  let store: MockStore;
  const loadedUsersState = fromUserActions.loadUsersSucess({ users: usersList});

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ],
    });
 
    store = TestBed.inject(MockStore);
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  }); 

  describe('loadUsersSuccess Action', () => {
    it('should load a list of users', () => {
      const action = fromUserActions.loadUsersSucess({ users: usersList});
      const result = reducer(initialState, action);

      expect(result.entities[1]).toBe(usersList[0])
      expect(result.entities[2]).toBe(usersList[1])
    });
  }); 

  describe('AddUserSuccess Action', () => {
    it('should add a new user', () => {
      const addUser: User = {
        id: 1,
        name: 'jordan',
        cpf: '21.699.461-5',
        email: 'jordan@gmail' 
      };
      const action = fromUserActions.addUserSuccess({ user: addUser});
      const result = reducer(initialState, action);    
      expect(result.entities[1]).toBe(addUser)
    });
  }); 

  describe('UpdateUser Action', () => {
    it('should add a new user', () => {
      const action = fromUserActions.loadUsersSucess({ users: usersList});
      const loadUsers = reducer(initialState, action);

      const updateUser: User = { 
        id: 1, 
        name: 'Jordan Paiva', 
        cpf: '21.699.461-5', 
        email: 'jordan@gmail.com'
      };
      const update: Update<User> = {
        id: updateUser.id,
        changes: updateUser
      }
      const action1 = fromUserActions.updateUser({ user: update });      
      const result = reducer(loadUsers, action1);    

      expect(result.entities[1]).toEqual(updateUser)
      expect(result.entities[1]).not.toEqual(loadUsers[0])
    });
  }); 

  describe('deleteUser Action', () => {
    it('should delete a user', () => {
      const action = fromUserActions.loadUsersSucess({ users: usersList});
      const loadUsers = reducer(initialState, action);   

      const action1 = fromUserActions.deleteUserSuccess({ id: '1' });      
      const result = reducer(loadUsers, action1);    
      
      expect(result.ids.length).toBe(1);
    });
  });

});
