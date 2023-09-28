export const ListItem = (props) => {
    const {
        id = 0,
        label = "Step 1",
        currentStep = 0,
        last = false
    } = props;

    return (
        <li
            className={`flex items-center ${id < currentStep ? 'after:bg-blue-500' : 'after:bg-gray-700'}
                ${id === currentStep ? 'font-bold text-blue-300' : 'font-semibold'}
                ${id < currentStep ? 'text-blue-500' : id > currentStep ? 'text-gray-500' : ''}
                ${last ? "" : "sm:w-full after:content-[''] after:w-full after:h-0.5 after:rounded-2xl after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10"} 
            `}
        >
            <span
                className={`flex items-center justify-center w-6 h-6 p-1 mr-2 text-xs border rounded-full shrink-0
                ${id <= currentStep ? 'border-blue-500 border-2' : 'border-gray-700'}`}
            >
                {id + 1}
            </span>

            <span className="flex whitespace-nowrap">{label}</span>

            {last ? <></> : <svg
                className="inline-block w-3 h-3 ml-2 sm:hidden sm:ml-4"
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
            </svg>}
        </li>
    );
};