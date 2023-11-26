import { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './About.css';

interface Props {}

const About: FC<Props> = () => {
  const useStyles = makeStyles({
    aboutContainer: {
      marginTop: '84px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      margin: '2rem 0',
      width: '40vw',
      display: 'flex',
      justifyContent: 'center',
    },
    paragraph: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.aboutContainer}>
      <Card
        variant='outlined'
        className={classes.card}
      >
        <CardContent>
          <Typography variant='h4'>About Mug Map</Typography>
          <p className={classes.paragraph}>
            <Typography variant='h6'>Subtitle</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam pariatur impedit, magni sapiente
              sit.
            </Typography>
          </p>
          <p className={classes.paragraph}>
            <Typography variant='h6'>Subtitle</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam pariatur impedit, magni sapiente
              sit.
            </Typography>
          </p>
          <p className={classes.paragraph}>
            <Typography variant='h6'>Subtitle</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam pariatur impedit, magni sapiente
              sit.
            </Typography>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
