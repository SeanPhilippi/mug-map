import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import SocialMediaPanel from './SocialMediaPanel';

const useStyles = makeStyles({
  homeContainer: {
    height: '100vh',
    position: 'relative',
    width: '100%',
    backgroundImage: 'url("/cafe.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    width: '60%',
  },
  text: {
    // fontFamily:
    fontSize: '2rem',
    fontWeight: 'bold',
    lineHeight: '2.1rem',
  },
  text2: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <div className={classes.overlay}>
        <div className={classes.mainContent}>
          <p className={classes.text}>
            Ditch the disposable
            <br />
            Cozy up with ceramic
          </p>
          <p className={classes.text2}>
            Discover cafés that care for their craft <i>and</i> the environment.
          </p>
          <Search />
          <SocialMediaPanel />
        </div>
      </div>
    </div>
  );
};

export default Home;
