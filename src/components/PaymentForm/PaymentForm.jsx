import ReCAPTCHA from "react-google-recaptcha";
import { Toaster } from 'react-hot-toast';

// local imports
import FileUpload from "../FileUpload/FileUpload";
import './Styles.css';

const PaymentForm = (props) => {
    const {
        slip = [],
        setSlip,
        accept = false,
        setAccept,
        singleFile = false,
        reCaptcha
    } = props;

    return (
        <div className="text-white">
            <form>
                <p>Upload the Slip <span className="text-red-600">*</span></p>

                <FileUpload
                    selectedFiles={slip}
                    setSelectedFiles={setSlip}
                    singleFile={singleFile}
                />

                <p>Terms and Conditions</p>

                <div className="p-3 m-1 border border-[#0AB7C2] rounded-lg border-1">
                    <div className="h-24 pr-3 overflow-y-scroll custom-scroll">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores architecto reprehenderit necessitatibus commodi vitae illum velit ipsa magni quibusdam voluptatibus eligendi quisquam odio ut, inventore earum nihil distinctio libero modi eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores architecto reprehenderit necessitatibus commodi vitae illum velit ipsa magni quibusdam voluptatibus eligendi quisquam odio ut, inventore earum nihil distinctio libero modi eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores architecto reprehenderit necessitatibus commodi vitae illum velit ipsa magni quibusdam voluptatibus eligendi quisquam odio ut, inventore earum nihil distinctio libero modi eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores architecto reprehenderit necessitatibus commodi vitae illum velit ipsa magni quibusdam voluptatibus eligendi quisquam odio ut, inventore earum nihil distinctio libero modi eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores architecto reprehenderit necessitatibus commodi vitae illum velit ipsa magni quibusdam voluptatibus eligendi quisquam odio ut, inventore earum nihil distinctio libero modi eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores architecto reprehenderit necessitatibus commodi vitae illum velit ipsa magni quibusdam voluptatibus eligendi quisquam odio ut, inventore earum nihil distinctio libero modi eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores architecto reprehenderit necessitatibus commodi vitae illum velit ipsa magni quibusdam voluptatibus eligendi quisquam odio ut, inventore earum nihil distinctio libero modi eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores architecto reprehenderit necessitatibus commodi vitae illum velit ipsa magni quibusdam voluptatibus eligendi quisquam odio ut, inventore earum nihil distinctio libero modi eos!
                        </p>
                    </div>
                </div>

                <div className="flex items-center py-3 mb-2 space-x-2">
                    <input
                        id="accept"
                        type="checkbox"
                        checked={accept}
                        onChange={(e) => setAccept(e.target.checked)}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="accept">
                        I agree with the terms and conditions <span className="text-red-600">*</span>
                    </label>
                </div>

                <div className="flex justify-center">
                    <ReCAPTCHA ref={reCaptcha} sitekey={'6Leyw2AoAAAAADPg-oZExG3-sXIpaHcODd0ogsN2'} />
                </div>
            </form>
            <Toaster />
        </div>
    )
}

export default PaymentForm;
