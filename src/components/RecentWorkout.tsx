import Box from "@mui/material/Box";
import data from "../data/stat-card.data";


const recentWorkouts = [...data]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);


const RecentWorkout = () => {
    return (
        <Box
        component="ul"
        sx={{
            p: 0,
            m: 0,
            mt: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Centers the <li> horizontally
            justifyContent: "center",
            gap: 1,
        }}
        >
           {recentWorkouts.map((workout) => (
                <li key={workout.id}>
                {workout.title} - {workout.date} - {workout.value} mins
                </li>
            ))}
            </Box>
    )
};

export default RecentWorkout;