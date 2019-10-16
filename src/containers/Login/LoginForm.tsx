import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Container,
  TextField,
  Button,
  makeStyles,
  FormHelperText,
  Snackbar
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AppStoreContext } from '../../stores/AppStore';
import SnackbarContent from '../../components/SnackbarContent';
import { Store } from '../../types';

interface AuthField {
  value: string;
  error: boolean;
}

const useStyles = makeStyles(() => ({
  loginForm: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginTop: '10px'
  },
  loginButton: {
    marginTop: '7px',
    minHeight: '36px'
  },
  spiner: {
    color: 'white'
  }
}));

export const LoginForm = observer(
  (): React.ReactElement<HTMLElement> => {
    const [login, setLogin] = useState<AuthField>({
      value: '',
      error: false
    });
    const [password, setPassword] = useState<AuthField>({
      value: '',
      error: false
    });
    const [snackBarIsOpen, setDisplaySnackBar] = useState<boolean>(false);
    const classes = useStyles();
    const store: Store = useContext<Store>(AppStoreContext);
    const {
      user: { dataIsLoading, error }
    } = store;

    const submitForm: (e: React.FormEvent<HTMLFormElement>) => void = (
      e: React.FormEvent<HTMLFormElement>
    ): void => {
      e.preventDefault();

      if (!login.value.length && !password.value.length) {
        setLogin({ ...login, error: true });
        setPassword({ ...password, error: true });
      } else if (!login.value.length) {
        setLogin({ ...login, error: true });
      } else if (!password.value.length) {
        setPassword({ ...password, error: true });
      } else {
        setLogin({ ...login, error: false });
        setPassword({ ...password, error: false });
      }

      if (login.value && password.value) {
        store.authUser(login.value.toLowerCase(), password.value, () => {
          if (!store.user.error.length) return;
          setDisplaySnackBar(true);
        });
      }
    };

    const handleCloseSnackBar = (
      event: React.SyntheticEvent<any>,
      reason?: string | undefined
    ): void | undefined => {
      if (reason === 'clickaway') {
        return;
      }

      setDisplaySnackBar(false);
    };

    return (
      <Container maxWidth="sm">
        <form className={classes.loginForm} onSubmit={submitForm}>
          <TextField
            id="login"
            className={classes.textField}
            type="text"
            autoComplete="username"
            value={login.value}
            onChange={e => {
              setLogin({ value: e.target.value, ...login });
              if (!e.target.value.length) {
                setLogin({ value: e.target.value, error: true });
              } else {
                setLogin({ value: e.target.value, error: false });
              }
            }}
            variant="outlined"
            label="login"
            error={login.error}
            disabled={dataIsLoading}
          />
          {login.error ? (
            <FormHelperText id="my-helper-text" error={login.error}>
              Login field cannot be empty
            </FormHelperText>
          ) : null}
          <TextField
            id="password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            value={password.value}
            onChange={e => {
              setPassword({ value: e.target.value, ...password });
              if (!e.target.value.length) {
                setPassword({ value: e.target.value, error: true });
              } else {
                setPassword({ value: e.target.value, error: false });
              }
            }}
            variant="outlined"
            label="password"
            error={password.error}
            disabled={dataIsLoading}
          />
          {password.error ? (
            <FormHelperText id="my-helper-text" error={password.error}>
              Password field cannot be empty
            </FormHelperText>
          ) : null}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.loginButton}
            disabled={dataIsLoading || login.error || password.error}
          >
            {dataIsLoading ? (
              <CircularProgress
                color="secondary"
                size={20}
                className={classes.spiner}
              />
            ) : (
              'LOGIN'
            )}
          </Button>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={snackBarIsOpen && !dataIsLoading}
          autoHideDuration={8000}
          onClose={handleCloseSnackBar}
        >
          <SnackbarContent
            onClose={handleCloseSnackBar}
            variant="error"
            message={`${error}. Please re-enter the form`}
          />
        </Snackbar>
      </Container>
    );
  }
);
