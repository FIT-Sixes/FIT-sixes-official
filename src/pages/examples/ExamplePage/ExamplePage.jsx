// local imports
import {Countdown, Example} from '../../../components';
import CountdownTimer from "../../../components/Countdown/Countdown.jsx";

const ExamplePage = () => {
    return (
        <div className="px-4 py-2 m-2 font-bold rounded-lg bg-slate-900">
            <h1 className="text-lg text-white">Example Page</h1>
            <Example />
            <CountdownTimer />
        </div>
    );
};

export default ExamplePage;
