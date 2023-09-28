// local imports
import { Stepper } from "../../../components"

const StepperExample = () => {
    const steps = [
        {
            label: "Company Details",
            element: <div>Step 1 Content</div>
        },
        {
            label: "Players' Details",
            element: <div>Step 2 Content</div>
        },
        {
            label: "Payment Details",
            element: <div>Step 3 Content</div>
        }
    ];

    return (
        <div className="p-5 m-auto container mx-auto">
            <Stepper
                steps={steps}
            />
        </div>
    )
}

export default StepperExample