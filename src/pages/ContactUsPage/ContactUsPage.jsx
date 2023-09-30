// local imports
import ContactCard from '../../components/ContactCard/ContactCard';
import thushanImg from '../../assets/thushan.png';
import sampathImg from '../../assets/sampath.png';
import amalImg from '../../assets/amal.png';
import kelumImg from '../../assets/kelum.png';

const ContactUsPage = () => {
    const contactData = [
        {
            image: thushanImg,
            name: 'Thushan Fernando',
            position: 'Main Coordinator',
            email: 'john@example.com',
            contactNumber: '123-456-7890',
        },
        {
            image: sampathImg,
            name: 'Sampath Kumara',
            position: 'Main Coordinator',
            email: 'jane@example.com',
            contactNumber: '987-654-3210',
        },
        {
            image: amalImg,
            name: 'Amal Fernando',
            position: 'Main Coordinator',
            email: 'peter@example.com',
            contactNumber: '456-789-0123',
        },
        {
            image: kelumImg,
            name: 'Kelum Srinath',
            position: 'Main Coordinator',
            email: 'susan@example.com',
            contactNumber: '789-012-3456',
        },
    ];

    return (
        <div className="flex justify-center p-4">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {contactData.map((contact, index) => (
                    <ContactCard
                        key={index}
                        {...contact}
                    />
                ))}
            </div>
        </div>
    );
};

export default ContactUsPage;
