import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles ({
  footer:{
    background: '#f50057',
    marginTop: '150px'
  }
});

const Footer = () => {
  const styles = useStyles();
  return (
    <>
      <footer className={styles.footer}>
          <Typography align="center" variant="h6">Contact Us</Typography>
          <Typography align="center" variant="subtitle1">Seattle, WA | 206-555-2374 | audrey@buymystuff.com</Typography>
          <Typography align="center" variant="body2" >&copy; 2021 Audrey-Code Fellows</Typography>
      </footer>
    </>
  )
}

export default Footer;
