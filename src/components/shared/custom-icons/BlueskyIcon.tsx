import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/styles';
import blueskyIcon from '../../../assets/Bluesky_butterfly-logo.svg';

const useStyles = makeStyles({
  iconRoot: {
    textAlign: 'center',
  },
  blueskyIcon: {
    'height': '100%',
    '& svg path.st0 path': {
      fill: 'green',
    },
  },
});

const BlueskyIcon = () => {
  const classes = useStyles();
  return (
    <Icon className={classes.iconRoot}>
      <img
        className={classes.blueskyIcon}
        // ! maybe edit the svg in assets directly and give it a specific fill color
        src={blueskyIcon}
        // src={'https://upload.wikimedia.org/wikipedia/commons/f/fc/Bluesky_butterfly-logo.svg'}
        alt='Bluesky'
        style={{ fill: 'red' }}
      />
    </Icon>
  );
};

export default BlueskyIcon;
