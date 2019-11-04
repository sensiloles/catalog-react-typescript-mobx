import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, makeStyles, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Popover from '@material-ui/core/Popover';
import LoginForm from './LoginForm';

const useStyles = makeStyles(() => ({
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '90vh'
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

const Login: React.FC<{}> = observer(
  (): React.ReactElement => {
    const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
    const classes = useStyles();

    return (
      <Container maxWidth="sm" className={classes.loginContainer}>
        <LoginForm />
        <InfoIcon
          className={classes.infoIcon}
          onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
            setAnchorEl(e.currentTarget);
          }}
        />
        <Popover
          open={Boolean(anchorEl)}
          onClose={(e: {}, reason: 'backdropClick' | 'escapeKeyDown'): void => {
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
      </Container>
    );
  }
);

export default Login;
