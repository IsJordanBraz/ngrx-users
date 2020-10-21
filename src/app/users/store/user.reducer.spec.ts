import { User } from '../models/users';
import * as fromUserActions from './user.actions';
import { reducer, initialState } from './user.reducer';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { Update } from '@ngrx/entity';

const teste = 'ola';

describe('Users Reducer', () => {
  let store: MockStore;

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
      const usersList: User[] = [
        { 
          id: 1, 
          nome: 'jordan', 
          cpf: '21.699.461-5', 
          email: 'jordan@gmail'
        },
        { 
          id: 2,
          nome: 'Jordan Braz', 
          cpf: '21.699.461-5', 
          email: 'jordan@gmail'
        }
      ];
      const action = fromUserActions.loadUsersSucess({ users: usersList});
      const result = reducer(initialState, action);   

      expect(result.entities[1]).toBe(usersList[0])
      expect(result.entities[2]).toBe(usersList[1])
    });
  }); 

  describe('AddUserSuccess Action', () => {
    it('should add a new user', () => {
      const newUser: User = { 
        id: 1, 
        nome: 'jordan', 
        cpf: '21.699.461-5', 
        email: 'jordan@gmail'
      };
      const action = fromUserActions.addUserSuccess({ user: newUser});
      const result = reducer(initialState, action);    
      expect(result.entities[1]).toBe(newUser)
    });
  }); 

  describe('UpdateUser Action', () => {
    it('should add a new user', () => {
      const newUser: User = { 
        id: 1, 
        nome: 'jordan', 
        cpf: '21.699.461-5', 
        email: 'jordan@gmail'
      };
      const action = fromUserActions.addUserSuccess({ user: newUser});
      const newState = reducer(initialState, action); 
      const updateUser: User = { 
        id: 1, 
        nome: 'Jordan Paiva', 
        cpf: '21.699.461-5', 
        email: 'jordan@gmail.com'
      };
      const update: Update<User> = {
        id: updateUser.id,
        changes: updateUser
      }
      const action1 = fromUserActions.updateUser({ user: update });      
      const result = reducer(newState, action1);    
      expect(result.entities[1]).toEqual(updateUser)
      expect(result.entities[1]).not.toEqual(newUser)
    });
  }); 

  describe('deleteUser Action', () => {
    it('should delete a user', () => {
      const usersList: User[] = [
        { 
          id: 1, 
          nome: 'jordan', 
          cpf: '21.699.461-5', 
          email: 'jordan@gmail'
        },
        { 
          id: 2,
          nome: 'Jordan Braz', 
          cpf: '21.699.461-5', 
          email: 'jordan@gmail'
        }
      ];
      const action = fromUserActions.loadUsersSucess({ users: usersList});
      const loadUsers = reducer(initialState, action);   

      const action1 = fromUserActions.deleteUserSuccess({ id: '1' });      
      const result = reducer(loadUsers, action1);    
      
      expect(result.ids.length).toBe(1);
    });
  });

});
