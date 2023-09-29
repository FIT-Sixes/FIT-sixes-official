import { useState } from 'react';
import toast from 'react-hot-toast';

// local imports
import { Stepper, CompanyForm } from "../../../components"

const StepperExample = () => {
    const [companyDetails, setCompanyDetails] = useState({
        companyName: '',
        contactPerson: '',
        mobileNumber: '',
        contactPersonEmail: '',
        companyAddress: '',
        sponsorshipLevel: '',
        registeredSponsor: false,
    });

    const clearCompanyForm = () => {
        setCompanyDetails({
            companyName: '',
            contactPerson: '',
            mobileNumber: '',
            contactPersonEmail: '',
            companyAddress: '',
            sponsorshipLevel: '',
            registeredSponsor: false,
        });
    };

    const handleCompanySubmit = async () => {
        console.log(companyDetails);

        if (
            companyDetails.companyName === '' ||
            companyDetails.contactPerson === '' ||
            companyDetails.contactPersonEmail === '' ||
            companyDetails.companyAddress === '' ||
            companyDetails.sponsorshipLevel === ''
        ) {
            toast.error('Please fill all the fields');
        } else if (companyDetails.mobileNumber.length !== 10) {
            toast.error('Mobile number should be 10 digits');
        } else if (
            !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
                companyDetails.contactPersonEmail
            )
        ) {
            toast.error('Please enter a valid email address');
        } else {
            toast.success('Successfully  register!');
            clearCompanyForm();

            return true;
        }

        return false;
    };

    const steps = [
        {
            label: "Step 1",
            element: <CompanyForm companyDetails={companyDetails} setCompanyDetails={setCompanyDetails} />,
            onSubmit: handleCompanySubmit
        },
        {
            label: "Players' Details",
            element: <div>Step 2 Content</div>,
            onSubmit: () => console.log("Step 2 submitted")
        },
        {
            label: "Payment Details",
            element: <div>Step 3 Content</div>,
            onSubmit: () => console.log("Step 3 submitted")
        }
    ];

    return (
        <div className="container p-5 m-auto mx-auto">
            <Stepper
                steps={steps}
            />
        </div>
    )
}

export default StepperExample