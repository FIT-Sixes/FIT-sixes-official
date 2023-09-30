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
        <motion.div>
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
                    // whileHover={{ scale: 1.05 }}
                    className="px-4 pt-4 pb-2"
                >
                    <motion.div
                        className="mb-1 text-lg font-bold text-white opacity-80"
                    >
                        {name}
                    </motion.div>
                    <motion.p
                        className="mb-2 text-sm text-white opacity-60"
                    >
                        {position}
                    </motion.p>
                    <motion.p
                        className="mb-2 text-sm text-white opacity-60"
                    >
                        {contactNumber}
                    </motion.p>
                    <div className="flex flex-col items-center justify-center xl:flex-row">
                        <p className="text-sm text-white max-xl:mb-2 xl:mb-0 opacity-60">{email}</p>
                        <a href={`mailto:${email}`}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="px-4 py-2 ml-4 font-bold text-white rounded-full bg-[#0AB7C2] hover:bg-sky-500"
                            >
                                Email
                            </motion.button>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ContactCard;
