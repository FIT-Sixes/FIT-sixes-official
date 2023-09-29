import { StatMV } from '../Stat';
export default function StatSection() {
    return (
        <div className="flex flex-wrap m-auto justify-center items-center">
            <StatMV value="3" text="Awards" />
            <StatMV value="50" text="Matches" />
            <StatMV value="30" text="Teams" />
            <StatMV value="200" text="Players" />
            <StatMV value="500" text="Undergrads" />
            <StatMV value="20" text="Companies" />
        </div>
    );
}
