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
                        <DialogTitle id="alert-dialog-title" sx={{ height: "1px" }}>
                            {"Confirm creating this asset?"}
                        </DialogTitle>
                        <DialogContent>
                        </DialogContent>
                        <DialogActions sx={{ gap: "15px" }}>
                            <Button color="error" variant="outlined" name="buttonNo" onClick={handleClose}>No</Button>
                            <Button variant="contained" color="success" name="buttonYes" onClick={handleYesClick} autoFocus>Yes</Button>
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
                        <DialogTitle id="alert-dialog-title" sx={{ height:"1px" }}>
                            {"Return to home page and disacrd any input?"}
                        </DialogTitle>
                        <DialogContent>
                        </DialogContent>
                        <DialogActions sx={{ gap:"15px" }}>
                            <Button color="error" variant="outlined" name="buttonNo" onClick={handleClose}>No</Button>
                            <Link to="/">
                                <Button variant="contained" color="success" name="buttonYes" onClick={handleYesClick} autoFocus>
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