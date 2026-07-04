import data from "../data/stat-card.data";
import StatCard from "../components/StatCard";




const Dashboard = () => {
  
  return (
    <div>
      {data.map((stat) => (
        <StatCard key={stat.id} title={stat.title} value={stat.value} />
      ))}
    </div>
  )
}

export default Dashboard;