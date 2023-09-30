import { useState } from 'react';

// local imports
import { ListItem } from './ListItem';

const Stepper = (props) => {
    const { steps, clearForms } = props;

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
        <div className='flex flex-col lg:w-[80%] mx-auto'>
            <ol className="flex items-center w-full p-3 mx-auto space-x-2 text-center rounded-lg shadow-sm sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
                {steps.length > 0 && steps.map((step, index) =>
                    <ListItem
                        key={index}
                        id={index}
                        label={step.label}
                        currentStep={currentStep}
                        last={index === lastStep}
                    />
                )}
            </ol>

            <div className="bg-[#1c3a6d] rounded-xl text-white my-2 border-[#5882C1] border-2">
                <div className="inline-flex items-center justify-center w-full mt-2 font-serif text-2xl font-bold toggleStepper:hidden">
                    {steps[currentStep].label}
                </div>

                <div className="p-4">
                    {steps[currentStep].element}
                </div>
            </div>

            <div className="w-full xs:w-[70%] flex justify-between mx-auto">
                <button
                    onClick={handlePrev}
                    className="flex items-center justify-center w-32 px-4 py-2 mt-3 font-bold text-gray-700 bg-gray-200 rounded-3xl hover:bg-gray-300 disabled:text-gray-400"
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
                    onClick={async () => {
                        if (await steps[currentStep].onSubmit()) {
                            handleNext();

                            if (currentStep === lastStep) {
                                clearForms();
                            }
                        }
                    }}
                    className="flex items-center justify-center w-32 px-4 py-2 mt-3 font-bold text-white bg-blue-500 rounded-3xl hover:bg-blue-700"
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
