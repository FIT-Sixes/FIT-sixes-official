import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactCard = (props) => {
    const {
        image,
        name,
        position,
        email,
        contactNumber
    } = props;

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, scale: 1 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="max-w-xs p-6 overflow-hidden text-center shadow-lg rounded-3xl bg-slate-600 bg-opacity-40"
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden border border-gray-400 rounded-3xl"
            >
                <img
                    className="w-full rounded-3xl"
                    src={image}
                    alt={name}
                />
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2"
            >
                <motion.div
                    className="mb-0 text-lg font-bold text-white opacity-80"
                >
                    {name}
                </motion.div>
                <motion.p
                    className="mb-6 text-sm text-white opacity-60"
                >
                    {position}
                </motion.p>
                <motion.p
                    className="mb-4 text-sm text-white opacity-60"
                >
                    {contactNumber}
                </motion.p>
                <div className="flex items-center justify-center mb-2">
                    <a href={`mailto:${email}`}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-4 py-2 mr-2 font-bold text-white rounded-full bg-sky-300 hover:bg-sky-500"
                        >
                            Email
                        </motion.button>
                    </a>
                    <p className="text-sm text-white opacity-60">{email}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ContactCard;
