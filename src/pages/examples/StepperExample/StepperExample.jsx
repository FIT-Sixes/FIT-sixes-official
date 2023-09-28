// local imports
import { Stepper } from "../../../components"

const StepperExample = () => {
    const steps = [
        {
            label: "Step 1",
            element: <div>Step 1 Content</div>
        },
        {
            label: "Step 2",
            element: <div>Step 2 Content</div>
        },
        {
            label: "Step 3",
            element: <div>Step 3 Content</div>
        }
    ];

    return (
        <div className="w-[90%] m-auto">
            <Stepper
                steps={steps}
            />
        </div>
    )
}

export default StepperExample