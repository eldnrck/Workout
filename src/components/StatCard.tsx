import type { StatCardProps } from "../interface/StatCard.interface";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const StatCard = ({title, value}: StatCardProps) => {
  return (
      <Card
        sx={{
          width: "calc(50% - 8px)",
          boxSizing: "border-box",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom:"1rem",
          marginTop: "1rem",
        }}
      >
      <CardContent>
        <Typography variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="h3" style={{color:'darkblue'}}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatCard;