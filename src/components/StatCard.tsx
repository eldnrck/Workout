import type { StatCardProps } from "../interface/StatCard.interface";

const StatCard = ({title, value}: StatCardProps) => {
    return (
        <div className="statCard">
            <h2>{title}</h2>
            <p>{value}</p>
        </div>
    )
}

export default StatCard;