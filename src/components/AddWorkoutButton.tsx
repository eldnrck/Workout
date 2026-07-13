import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useState } from 'react';
import WorkoutInput from '../components/WorkoutInput'
import type { SelectChangeEvent } from '@mui/material';
import dayjs, { Dayjs } from "dayjs";


const AddWorkoutButton = () =>{

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [addWorkout, setAddWorkout] = useState<string>('');
    const [date, setDate] = useState<Dayjs | null>(dayjs());
    const [duration, setDuration] = useState<number | "">('');

    const handleAddWorkout = (event?: SelectChangeEvent) =>{
        if (!event) return;
        setAddWorkout(event.target.value as string)
    }

    const handleOpenModal = () =>{
        setOpenModal(true);
    }
    const handleCloseModal = () =>{
        setOpenModal(false);
    }

    const handleSubmit =(event: React.FormEvent<HTMLFormElement>)=>{
    
      event.preventDefault();
    
        const newWorkout = {
        id: crypto.randomUUID(),
        title: addWorkout,
        date: date?.format("YYYY-MM-DD"),
        value: duration,
      };
    
    
    }
    
    

    return (
    <>
    <Button variant="contained" endIcon={<AddCircleRoundedIcon />} size='large' onClick={handleOpenModal}>Add Workout</Button>
    <WorkoutInput 
    openModal={openModal}
    handleCloseModal={handleCloseModal}
    handleAddWorkout={handleAddWorkout}
    addWorkout={addWorkout}
    date={date}
    setDate={setDate}
    duration={duration}
    setDuration={setDuration}
    handleSubmit={handleSubmit}
    />
    </>
    )

}

export default AddWorkoutButton;
