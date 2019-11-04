import React, { useState, useReducer, Reducer } from 'react';
import { observer } from 'mobx-react-lite';
import {
  TextField,
  Button,
  makeStyles,
  FormHelperText,
  Snackbar
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStores from '../../hooks/useStores';
import SnackbarContent from '../../components/SnackbarContent';

const useStyles = makeStyles(() => ({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    border: '1px solid #4f4848',
    borderRadius: '4px'
  },
  textField: {
    marginTop: '10px'
  },
  loginButton: {
    marginTop: '7px',
    minHeight: '36px'
  },
  spiner: {
    color: '#3f51b5'
  }
}));

interface StateForm {
  login: {
    value: string;
    error: boolean;
  };
  password: {
    value: string;
    error: boolean;
  };
}

interface Action {
  type: ActionType;
  value?: string;
}

type ActionType =
  | 'setLoginError'
  | 'setPasswordError'
  | 'setLoginValue'
  | 'setPasswordValue';

const initialStateForm: StateForm = {
  login: {
    value: '',
    error: false
  },
  password: {
    value: '',
    error: false
  }
};

function formReducer(state: StateForm, action: Action): StateForm {
  switch (action.type) {
    case 'setLoginError':
      return {
        ...state,
        login: {
          ...state.login,
          error: true
        }
      };
    case 'setPasswordError':
      return {
        ...state,
        password: {
          ...state.password,
          error: true
        }
      };
    case 'setLoginValue':
      return {
        ...state,
        login: {
          value: action.value || '',
          error: false
        }
      };
    case 'setPasswordValue':
      return {
        ...state,
        password: {
          value: action.value || '',
          error: false
        }
      };
    default:
      return { ...state };
  }
}

const LoginForm: React.FC = observer(
  (): React.ReactElement => {
    const { userStore } = useStores();
    const classes = useStyles();

    const [stateForm, setStateForm] = useReducer<Reducer<StateForm, Action>>(
      formReducer,
      initialStateForm
    );
    const [snackBarIsOpen, setDisplaySnackBar] = useState<boolean>(false);

    const submitForm: (e: React.FormEvent<HTMLFormElement>) => void = (
      e: React.FormEvent<HTMLFormElement>
    ): void => {
      e.preventDefault();

      if (!stateForm.login.value && !stateForm.password.value) {
        setStateForm({ type: 'setLoginError' });
        setStateForm({ type: 'setPasswordError' });
      } else if (!stateForm.login.value) {
        setStateForm({ type: 'setLoginError' });
      } else if (!stateForm.password.value) {
        setStateForm({ type: 'setPasswordError' });
      } else {
        userStore.authUser(
          stateForm.login.value.toLowerCase(),
          stateForm.password.value,
          () => {
            if (!userStore.error.length) return;
            setDisplaySnackBar(true);
          }
        );
      }
    };

    const handleCloseSnackBar = (
      e: React.SyntheticEvent<any, Event>,
      reason?: string | undefined
    ): void | undefined => {
      if (reason === 'clickaway') {
        return;
      }

      setDisplaySnackBar(false);
    };

    return (
      <form className={classes.loginForm} onSubmit={submitForm}>
        <TextField
          id="login"
          className={classes.textField}
          type="text"
          autoComplete="username"
          value={stateForm.login.value}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ): void => {
            setStateForm({
              type: 'setLoginValue',
              value: e.currentTarget.value
            });
            if (!e.currentTarget.value.length) {
              setStateForm({ type: 'setLoginError' });
            }
          }}
          variant="outlined"
          label="login"
          error={stateForm.login.error}
          disabled={userStore.dataIsLoading}
        />
        {stateForm.login.error ? (
          <FormHelperText id="my-helper-text" error={stateForm.login.error}>
            Login field cannot be empty
          </FormHelperText>
        ) : null}
        <TextField
          id="password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          value={stateForm.password.value}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ): void => {
            setStateForm({
              type: 'setPasswordValue',
              value: e.currentTarget.value
            });
            if (!e.currentTarget.value.length) {
              setStateForm({ type: 'setPasswordError' });
            }
          }}
          variant="outlined"
          label="password"
          error={stateForm.password.error}
          disabled={userStore.dataIsLoading}
        />
        {stateForm.password.error ? (
          <FormHelperText id="my-helper-text" error={stateForm.password.error}>
            Password field cannot be empty
          </FormHelperText>
        ) : null}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.loginButton}
          disabled={
            userStore.dataIsLoading ||
            stateForm.login.error ||
            stateForm.password.error
          }
        >
          {userStore.dataIsLoading ? (
            <CircularProgress
              color="secondary"
              size={20}
              className={classes.spiner}
            />
          ) : (
            'LOGIN'
          )}
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={snackBarIsOpen && !userStore.dataIsLoading}
          autoHideDuration={8000}
          onClose={handleCloseSnackBar}
        >
          <SnackbarContent
            onClose={handleCloseSnackBar}
            variant="error"
            message={`${userStore.error}. Please re-enter the form`}
          />
        </Snackbar>
      </form>
    );
  }
);

export default LoginForm;
