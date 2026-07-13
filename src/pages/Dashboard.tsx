import { useState } from "react";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";

import data from "../data/stat-card.data";
import StatCard from "../components/StatCard";
import RecentWorkouts from "../components/RecentWorkout";
import type Workout from "../interface/StatCard.interface";

const getWorkoutStreak = (workouts: Workout[]): number => {
  if (!workouts.length) return 0;

  const sorted = [...workouts].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  let streak = 1;

  for (let i = 1; i < sorted.length; i++) {
    const currentDate = new Date(sorted[i].date);
    const previousDate = new Date(sorted[i - 1].date);

    const diffDays =
      (currentDate.getTime() - previousDate.getTime()) /
      (1000 * 60 * 60 * 24);

    if (diffDays === 1) {
      streak++;
    } else if (diffDays > 1) {
      streak = 1;
    }
  }

  return streak;
};

const getFavoriteWorkout = (workouts: Workout[]): string => {
  const counts = {
    Boxing: 0,
    Running: 0,
    Circuit: 0,
    Lifting: 0,
  };

  for (const workout of workouts) {
    switch (workout.title.toUpperCase()) {
      case "BOXING":
        counts.Boxing++;
        break;
      case "RUNNING":
        counts.Running++;
        break;
      case "CIRCUIT":
        counts.Circuit++;
        break;
      case "LIFTING":
        counts.Lifting++;
        break;
    }
  }

  let favorite = "";
  let highest = -1;

  for (const [name, count] of Object.entries(counts)) {
    if (count > highest) {
      highest = count;
      favorite = name;
    }
  }

  return favorite;
};

const Dashboard = () => {
  const [workouts, setWorkouts] = useState<Workout[]>(data);

  const totalWorkout = workouts.length;

  const totalMinutes = workouts.reduce(
    (acc, workout) => acc + workout.value,
    0
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <StatCard
          title="Total Workouts"
          value={totalWorkout}
        />

        <StatCard
          title="Total Minutes"
          value={totalMinutes}
        />

        <StatCard
          title="Current Streak"
          value={getWorkoutStreak(workouts)}
        />

        <StatCard
          title="Favorite Workout"
          value={getFavoriteWorkout(workouts)}
        />
      </Box>

      <Divider sx={{ mt: 3 }}>
        Recent Workouts
      </Divider>

      <RecentWorkouts workouts={workouts} />
    </>
  );
};

export default Dashboard;