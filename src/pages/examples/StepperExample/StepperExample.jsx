import { useState, useRef } from 'react';
import toast from 'react-hot-toast';

// local imports
import { Stepper, CompanyForm, PaymentForm } from "../../../components"

const StepperExample = () => {
    const reCaptcha = useRef();

    const [companyDetails, setCompanyDetails] = useState({
        companyName: '',
        contactPerson: '',
        mobileNumber: '',
        contactPersonEmail: '',
        companyAddress: '',
        sponsorshipLevel: '',
        registeredSponsor: false,
    });

    const [slip, setSlip] = useState([]);
    const [accept, setAccept] = useState(false);

    const clearForms = () => {
        setCompanyDetails({
            companyName: '',
            contactPerson: '',
            mobileNumber: '',
            contactPersonEmail: '',
            companyAddress: '',
            sponsorshipLevel: '',
            registeredSponsor: false,
        });

        setSlip([]);
        setAccept(false);
        reCaptcha.current.reset();
    };

    const handleCompanySubmit = async () => {
        if (
            companyDetails.companyName === '' ||
            companyDetails.contactPerson === '' ||
            companyDetails.contactPersonEmail === '' ||
            companyDetails.companyAddress === '' ||
            (companyDetails.registeredSponsor && companyDetails.sponsorshipLevel === '')
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
            return true;
        }

        return false;
    };

    const handlePaymentSubmit = () => {
        const captchaValue = reCaptcha.current.getValue();

        if (slip.length === 0) {
            toast.error('Please upload the slip');
        } else if (!accept) {
            toast.error('Please accept the terms and conditions');
        }
        else if (!captchaValue) {
            toast.error("Please verify the reCaptcha!");
        } else {
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
            onSubmit: () => { console.log("Step 2 submitted"); return true; }
        },
        {
            label: "Payment Details",
            element: <PaymentForm
                singleFile={true}
                slip={slip}
                setSlip={setSlip}
                accept={accept}
                setAccept={setAccept}
                reCaptcha={reCaptcha}
            />,
            onSubmit: handlePaymentSubmit
        }
    ];

    return (
        <div className="container p-5 m-auto mx-auto">
            <Stepper
                steps={steps}
                clearForms={clearForms}
            />
        </div>
    )
}

export default StepperExample;
