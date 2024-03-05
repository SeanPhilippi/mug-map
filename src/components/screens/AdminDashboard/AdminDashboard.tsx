import { useState, FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  itemText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  },
});

type AdminDashboardProps = {};

type UpdateProposal = {
  id: number;
  business: string;
  details: string;
};

const AdminDashboard: FC<AdminDashboardProps> = () => {
  const classes = useStyles();
  const [selectedUpdate, setSelectedUpdate] = useState<any>(null);
  const [editDetails, setEditDetails] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleEdit = () => {
    setEditDetails(selectedUpdate.details);
    setDialogOpen(true);
  };

  const handleSave = () => {
    // Handle save logic here
    setDialogOpen(false);
  };

  const handleApprove = (id: number) => {
    // Handle approve logic here
    console.log(`Approved update with id ${id}`);
  };

  const handleReject = (id: number) => {
    // Handle reject logic here
    console.log(`Rejected update with id ${id}`);
  };

  // mock proposed updates
  const proposedUpdates: UpdateProposal[] = [
    {
      id: 1,
      business: 'Lorem, ipsum.',
      details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eligendi molestias suscipit aut tempora tempore repellendus optio commodi nobis magnam.',
    },
  ];

  return (
    <div className={classes.container}>
      <h2>Proposed Updates</h2>
      <List>
        {proposedUpdates.map(update => (
          <ListItem>
            <ListItemText
              className={classes.itemText}
              primary={update.business}
              secondary={
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.secondaryText}
                  color='textPrimary'
                >
                  {update.details}
                </Typography>
              }
            />
            <Button
              color='primary'
              onClick={() => handleApprove(update.id)}
            >
              Approve
            </Button>
            <Button
              color='secondary'
              onClick={() => handleReject(update.id)}
            >
              Reject
            </Button>
            <Button
              onClick={() => {
                setSelectedUpdate(update);
                handleEdit();
              }}
            >
              Edit
            </Button>
          </ListItem>
        ))}
      </List>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <DialogTitle>Edit Details</DialogTitle>
        <DialogContent>
          <TextField
            label='Edit Details'
            value={editDetails}
            onChange={e => setEditDetails(e.target.value)}
            multiline
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDialogOpen(false)}
            color='primary'
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            color='primary'
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
