import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add'; import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';

export function SaveButton({ onSubmit }) {

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
        width: '150px',
        height: '40px',
        fontSize: '18px',
    }
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <div className="container">
                    <Button
                        style={RegisterButtonSize}
                        variant="contained"
                        endIcon={<AddIcon />}
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

export function CancelButton({ onSubmit }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleYesClick = (event) => {
        setOpen(false);
    };

    const RegisterButtonSize = {
        width: '150px',
        height: '40px',
        fontSize: '18px',
    }
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <div className="container">
                    <Button
                        style={RegisterButtonSize}
                        variant="outlined"
                        color="error"
                        endIcon={<HighlightOffIcon />}
                        onClick={handleClickOpen}
                    >
                        Cancel
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Are you sure you want to cancel the changes?"}
                        </DialogTitle>
                        <DialogContent>
                        </DialogContent>
                        <DialogActions>
                            <Button name="buttonNo" onClick={handleClose}>No</Button>
                            <Link to="/">
                                <Button name="buttonYes" onClick={handleYesClick} autoFocus>
                                    Yes
                                </Button>
                            </Link>
                        </DialogActions>
                    </Dialog>
                </div>
            </Stack>
        </div>
    );
}