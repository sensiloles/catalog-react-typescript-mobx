import { IUser, IUserData } from '../../types';

const FAKE_USERS: IUser[] = [
  {
    login: 'admin',
    password: '123test'
  },
  {
    login: 'developer',
    password: '456test'
  }
];

const getUser: ({ login, password }: IUser) => Promise<IUserData> = ({
  login,
  password
}: IUser): Promise<IUserData> => {
  return new Promise<IUserData>(
    (
      resolve: (result: IUserData) => void,
      reject: (error: Error) => void
    ): void => {
      let result: IUserData | undefined;

      FAKE_USERS.forEach((user: IUser): void => {
        if (user.login === login && user.password === password) {
          const deletedKey = 'password';
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [deletedKey]: deleted, ...userData } = user;
          result = userData;
        }
      });

      if (result) {
        setTimeout((): void => resolve(result as IUserData), 3000);
      } else {
        setTimeout(
          (): void => reject(new Error('Incorrect login or password')),
          3000
        );
      }
    }
  );
};

export default getUser;
