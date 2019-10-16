import { User } from '../../types';

const USERS: User[] = [
  {
    id: 1,
    login: 'admin',
    password: '123test',
    firstName: 'Aleksey'
  },
  {
    id: 2,
    login: 'developer',
    password: '456test',
    firstName: 'Alexandr'
  }
];

const getUser = ({ login, password }: User) => {
  return new Promise<User>((resolve, reject) => {
    let result: User | undefined;

    USERS.forEach((user: User) => {
      if (user.login === login && user.password === password) result = user;
    });

    if (result) {
      setTimeout(() => resolve(result), 3000);
    } else {
      const error = new Error('Incorrect login or password');
      setTimeout(() => reject(error), 3000);
    }
  });
};

export default getUser;
