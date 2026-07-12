import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";

const WelcomeDialog = () => {
    const [open, setOpen] = useState(true);

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Welcome back, Eldon!</DialogTitle>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Get started!</Button>
            </DialogActions>
        </Dialog>
      )
};

export default WelcomeDialog;