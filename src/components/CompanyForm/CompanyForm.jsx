import { Toaster } from 'react-hot-toast';

const CompanyForm = (props) => {
    const {
        companyDetails,
        setCompanyDetails,
    } = props;

    const handleChange = (event) => {
        const { name, value } = event.target;

        let newValue = value;

        if (event.target.type === 'radio') {
            newValue = value === 'true' ? true : false;
        }

        let newDetails = {
            [name]: newValue,
        }

        if (name === 'registeredSponsor' && value === 'false') {
            newDetails['sponsorshipLevel'] = '';
        }        

        setCompanyDetails((prevState) => ({
            ...prevState,
            ...newDetails
        }));
    };

    return (
        <div className="p-6">
            <form>
                <label className="block mb-4">
                    <span>
                        Company Name <span className="text-red-600"> *</span>
                    </span>
                    <input
                        name="companyName"
                        className="block w-full px-3 py-2 mt-1 bg-transparent border rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                        value={companyDetails.companyName}
                        onChange={handleChange}
                    />
                </label>

                <label className="block mb-4">
                    <span>
                        Contact Person <span className="text-red-600 ">  *</span>
                    </span>
                    <input
                        name="contactPerson"
                        className="block w-full px-3 py-2 mt-1 bg-transparent border rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                        value={companyDetails.contactPerson}
                        onChange={handleChange}
                    />
                </label>

                <div className="block sm:flex">
                    <label className="block mb-4 sm:mr-4 sm:w-full">
                        <span>
                            Contact No.
                            <span className="text-red-600 "> *</span>
                        </span>
                        <input
                            type="tel"
                            name="mobileNumber"
                            className="block w-full px-3 py-2 mt-1 bg-transparent border rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                            value={companyDetails.mobileNumber}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="block mb-4 sm:w-full">
                        <span>
                            Email <span className="text-red-600 ">  *</span>
                        </span>
                        <input
                            type="email"
                            name="contactPersonEmail"
                            className="block w-full px-3 py-2 mt-1 bg-transparent border rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                            value={companyDetails.contactPersonEmail}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <label className="block mb-4">
                    <span>
                        Address <span className="text-red-600 ">  *</span>
                    </span>
                    <input
                        name="companyAddress"
                        className="block w-full px-3 py-2 mt-1 bg-transparent border rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                        value={companyDetails.companyAddress}
                        onChange={handleChange}
                    />
                </label>

                <div className="grid sm:space-x-4 sm:grid-cols-2">
                    <div className="grid mb-4 space-y-2 sm:grid-cols-2 sm:w-full sm:mb-0">
                        <span className='col-span-2'>
                            Have you registered as a sponsor?
                            <span className="text-red-600 ">  *</span>
                        </span>
                        <label className='col-span-1 min-h-[40px] flex items-center'>
                            <input
                                type="radio"
                                name="registeredSponsor"
                                value={true}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                checked={companyDetails.registeredSponsor}
                                onChange={handleChange}
                            />
                            <span className="ml-2 ">Yes</span>
                        </label>
                        <label className='flex items-center col-span-1'>
                            <input
                                type="radio"
                                name="registeredSponsor"
                                value={false}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                checked={!companyDetails.registeredSponsor}
                                onChange={handleChange}
                            />
                            <span className="ml-2">No</span>
                        </label>
                    </div>

                    <label className={`sm:w-full 
                        ${companyDetails.registeredSponsor ? 'block' : 'hidden'}
                    `}>
                        <span>
                            Sponsorship Level
                            <span className="text-red-600 "> *</span>
                        </span>
                        <select
                            name="sponsorshipLevel"
                            className="block w-full px-3 py-2 mt-1 bg-transparent border rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                            value={companyDetails.sponsorshipLevel}
                            onChange={handleChange}
                        >
                            <option className='bg-[#1c3a6d]' disabled value="">Select a level</option>
                            <option className='bg-[#1c3a6d]' value="platinum">Platinum</option>
                            <option className='bg-[#1c3a6d]' value="silver">Silver</option>
                            <option className='bg-[#1c3a6d]' value="gold">Gold</option>
                        </select>
                    </label>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default CompanyForm;
