import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Container,
  TextField,
  Button,
  makeStyles,
  FormHelperText,
  Snackbar,
  Typography
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfoIcon from '@material-ui/icons/Info';
import Popover from '@material-ui/core/Popover';
import { useStores } from '../../hooks/useStores';
import SnackbarContent from '../../components/SnackbarContent';

interface StateForm {
  [key: string]: {
    value: string;
    error: boolean;
  };
}

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

const useStyles = makeStyles(() => ({
  loginFormContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '90vh'
  },
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
  },
  infoIcon: {
    color: 'orange',
    alignSelf: 'center',
    marginTop: '10px',
    cursor: 'pointer'
  },
  testData: {
    padding: '5px'
  }
}));

const Login = observer(
  (): React.ReactElement<HTMLElement> => {
    const [stateForm, setStateForm]: [
      StateForm,
      (state: StateForm) => void
    ] = useState<StateForm>(initialStateForm);
    const [snackBarIsOpen, setDisplaySnackBar]: [
      boolean,
      (open: boolean) => void
    ] = useState<boolean>(false);
    const [anchorEl, setAnchorEl]: [
      SVGSVGElement | null,
      (e: SVGSVGElement | null) => void
    ] = useState<SVGSVGElement | null>(null);
    const classes = useStyles();
    const { userStore } = useStores();

    const submitForm: (e: React.FormEvent<HTMLFormElement>) => void = (
      e: React.FormEvent<HTMLFormElement>
    ): void => {
      e.preventDefault();

      if (!stateForm.login.value.length && !stateForm.password.value.length) {
        setStateForm({
          login: {
            ...stateForm.login,
            error: true
          },
          password: {
            ...stateForm.password,
            error: true
          }
        });
      } else if (!stateForm.login.value.length) {
        setStateForm({
          login: {
            ...stateForm.login,
            error: true
          },
          password: {
            ...stateForm.password
          }
        });
      } else if (!stateForm.password.value.length) {
        setStateForm({
          login: {
            ...stateForm.login
          },
          password: {
            ...stateForm.password,
            error: true
          }
        });
      } else {
        setStateForm({
          login: {
            ...stateForm.login,
            error: false
          },
          password: {
            ...stateForm.password,
            error: false
          }
        });
      }

      if (stateForm.login.value && stateForm.password.value) {
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
      <Container maxWidth="sm" className={classes.loginFormContainer}>
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
              if (!e.currentTarget.value.length) {
                setStateForm({
                  ...stateForm,
                  login: { value: e.currentTarget.value, error: true }
                });
              } else {
                setStateForm({
                  ...stateForm,
                  login: { value: e.currentTarget.value, error: false }
                });
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
              if (!e.currentTarget.value.length) {
                setStateForm({
                  ...stateForm,
                  password: { value: e.currentTarget.value, error: true }
                });
              } else {
                setStateForm({
                  ...stateForm,
                  password: { value: e.currentTarget.value, error: false }
                });
              }
            }}
            variant="outlined"
            label="password"
            error={stateForm.password.error}
            disabled={userStore.dataIsLoading}
          />
          {stateForm.password.error ? (
            <FormHelperText
              id="my-helper-text"
              error={stateForm.password.error}
            >
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
          <InfoIcon
            className={classes.infoIcon}
            onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
              setAnchorEl(e.currentTarget);
            }}
          />
          <Popover
            open={Boolean(anchorEl)}
            onClose={(e: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
              if (reason === ('backdropClick' || 'escapeKeyDown'))
                setAnchorEl(null);
            }}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Typography className={classes.testData}>
              <b>User data for testing app:</b>
              <br />
              <br />
              Login: admin
              <br />
              Password: 123test
              <br />
              <br />
              Login: developer
              <br />
              Password: 456test
            </Typography>
          </Popover>
        </form>
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
      </Container>
    );
  }
);

export default Login;
