import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import 'dayjs/locale/da'; // import the Danish locale
import { Link } from 'react-router-dom';

export function SaveButton({ onSubmit, asset }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleYesClick = (event) => {
        onSubmit(event);
        setOpen(false);
    };

    const RegisterButtonSize = {
        width: '170px',
        height: '40px',
        fontSize: '15px',
    }
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <div className="container">
                    <Button
                        style={RegisterButtonSize}
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={handleClickOpen}
                    >
                        Add
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Are you sure you want to save the changes?"}
                        </DialogTitle>
                        <DialogContent>
                        </DialogContent>
                        <DialogActions>
                            <Button name="buttonNo" onClick={handleClose}>No</Button>
                            <Button name="buttonYes" onClick={handleYesClick} autoFocus>Yes</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Stack>
        </div>
    );
}

export function CancelButton() {
    return (
        <Stack direction="row" spacing={2}>
            <Link to="/">
                <Button variant="outlined" color="error">
                    Cancel
                </Button>
            </Link>
        </Stack>
    );
}