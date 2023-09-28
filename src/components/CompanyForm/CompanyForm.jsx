import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function CompanyForm() {
    const [companyDetails, setCompanyDetails] = React.useState({
        companyName: '',
        contactPerson: '',
        mobileNumber: '',
        contactPersonEmail: '',
        companyAddress: '',
        sponsorshipLevel: '',
        registeredSponsor: false,
    });

    const clearForm = () => {
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

    const addCompany = (event) => {
        const { name, value } = event.target;
        setCompanyDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
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
            console.log('success', companyDetails);
            toast.success('Successfully  register!');
            clearForm();
        }
    };
    return (
        <div className=" bg-white  p-6">
            <form>
                <label className="block mb-4">
                    <span className="block text-sm font-medium text-slate-700 ">
                        company Name <span className=" text-red-600"> *</span>
                    </span>
                    <input
                        type="name"
                        name="companyName"
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        value={companyDetails.companyName}
                        onChange={addCompany}
                    />
                </label>
                <label className="block mb-4">
                    <span className="block text-sm font-medium text-slate-700">
                        Contact Person <span className=" text-red-600"> *</span>
                    </span>
                    <input
                        type="text"
                        name="contactPerson"
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        value={companyDetails.contactPerson}
                        onChange={addCompany}
                    />
                </label>

                <div className="sm:flex block mb-4 ">
                    <label className="block mr-2 sm:w-full">
                        <span className="block text-sm font-medium text-slate-700">
                            Contact No.{' '}
                            <span className=" text-red-600"> *</span>
                        </span>
                        <input
                            type="tel"
                            name="mobileNumber"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={companyDetails.mobileNumber}
                            onChange={addCompany}
                        />
                    </label>

                    <label className="block mb-4  sm:w-full">
                        <span className="block text-sm font-medium text-slate-700">
                            Email <span className=" text-red-600"> *</span>
                        </span>
                        <input
                            type="email"
                            name="contactPersonEmail"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={companyDetails.contactPersonEmail}
                            onChange={addCompany}
                        />
                    </label>
                </div>

                <label className="block mb-4">
                    <span className="block text-sm font-medium text-slate-700">
                        Address <span className=" text-red-600"> *</span>
                    </span>
                    <input
                        type="text"
                        name="companyAddress"
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        value={companyDetails.companyAddress}
                        onChange={addCompany}
                    />
                </label>
                <div className="sm:flex block">
                <label className="block mb-4  sm:w-full">
                    <span className="block text-sm font-medium text-slate-700">
                        Have you registered as a sponsor?{' '}
                        <span className=" text-red-600"> *</span>
                    </span>
                    <input
                        type="radio"
                        className="form-radio"
                        name="registeredSponsor"
                        value="true"
                        checked={companyDetails.registeredSponsor === 'true'}
                        onChange={addCompany}
                    />
                    <span className="ml-2 ">Yes</span>{' '}
                    <input
                        type="radio"
                        className="form-radio ml-6"
                        name="registeredSponsor"
                        value="false"
                        checked={companyDetails.registeredSponsor === 'false'}
                        onChange={addCompany}
                    />
                    <span className="ml-2">No</span>
                </label>

                {companyDetails.registeredSponsor === 'true' ? (
                    <label className="block  sm:w-full mb-4">
                        <span className="block text-sm font-medium text-slate-700">
                            Sponsorship Level{' '}
                            <span className=" text-red-600"> *</span>
                        </span>
                        <select
                            name="sponsorshipLevel"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={companyDetails.sponsorshipLevel}
                            onChange={addCompany}
                        >
                            <option value="">Select a level</option>
                            <option value="Platinum">Platinum</option>
                            <option value="Silver">Silver</option>
                            <option value="Gold">Gold</option>
                        </select>
                    </label>
                ) : null}
                </div>
                <button type="button" onClick={handleSubmit}>
                    submit
                </button>
            </form>
            <Toaster />
        </div>
    );
}
