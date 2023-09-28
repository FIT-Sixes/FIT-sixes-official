import { useState } from 'react';

// local imports
import { ListItem } from './Units';

const Stepper = (props) => {
    const { steps } = props;

    const [currentStep, setCurrentStep] = useState(0);

    const firstStep = 0;
    const lastStep = steps.length - 1;

    const handleNext = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, lastStep));
    };

    const handlePrev = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, firstStep));
    };

    return (
        <div>
            <ol className="flex items-center w-full p-3 space-x-2 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
                {steps.length > 0 && steps.map((step, index) => (
                    <ListItem
                        key={index}
                        id={index}
                        label={step.label}
                        currentStep={currentStep}
                        last={index === lastStep}
                    />
                ))}
            </ol>

            <div className="p-4 my-2 rounded bg-slate-500">
                {steps[currentStep].element}
            </div>

            <div className="flex justify-between mb-4">
                <button
                    onClick={handlePrev}
                    className="flex items-center justify-center w-32 px-4 py-2 font-bold text-gray-700 bg-gray-200 rounded hover:bg-gray-300 disabled:text-gray-400"
                    disabled={currentStep === firstStep}
                >
                    <svg
                        className="inline-block w-3 h-3 mr-2 rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 12 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m7 9 4-4-4-4M1 9l4-4-4-4"
                        />
                    </svg>
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="flex items-center justify-center w-32 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                    {currentStep === lastStep ? "Submit" : (
                        <>
                            Next
                            <svg
                                className="inline-block w-3 h-3 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 12 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m7 9 4-4-4-4M1 9l4-4-4-4"
                                />
                            </svg>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Stepper;
