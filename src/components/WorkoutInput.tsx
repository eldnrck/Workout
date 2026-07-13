import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";

interface WorkoutInputProps {
  openModal: boolean;
  handleCloseModal: () => void;
  addWorkout: string;
  handleAddWorkout: () => void;
  date: any;
  setDate: any;
  duration: any;
  setDuration: any;
  handleSubmit: any;
}


const WorkoutInput = ({openModal, handleCloseModal, addWorkout, handleAddWorkout, date, setDate, duration, setDuration, handleSubmit}: WorkoutInputProps) =>{
    return (
    <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogActions>
            <IconButton onClick={handleCloseModal}><CloseIcon fontSize="large"/></IconButton>
        </DialogActions>
        <DialogContent>
          <form onSubmit={handleSubmit} id="add-workout-form">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Add Workout</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={addWorkout}
                label="addWorkout"
                onChange={handleAddWorkout}
                >
                <MenuItem value={'Boxing'}>Boxing</MenuItem>
                <MenuItem value={'Running'}>Running</MenuItem>
                <MenuItem value={'Circuit'}>Circuit</MenuItem>
                <MenuItem value={'Lifting'}>Lifting</MenuItem>
                </Select>
            <br />
              <DatePicker
                label="Workout Date"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                sx={{ width: "100%" }}
                />
            <br />
              <TextField
                label="Duration (minutes)"
                type="number"
                fullWidth
                value={duration}
                onChange={(e) =>
                    setDuration(e.target.value === "" ? "" : Number(e.target.value))
                }
                  slotProps={{
                htmlInput: {
                min: 1,
                step: 1,
                },
            }}
                />

            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button type="submit" form="add-workout-form">
            Add Workout
          </Button>
        </DialogActions>
      </Dialog>
    );
}

export default WorkoutInput;