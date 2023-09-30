import { useState, useRef, useEffect } from 'react';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';

// local imports
import cloudIcon from '../../assets/cloud-computing.png';
import closeIcon from '../../assets/close.png';

const MAX_FILE_SIZE = 1;

const FileUpload = (props) => {
    const {
        dashColor = '#0AB7C2',
        dashColorOnDrag = '#00ff00',
        maxFileSize = MAX_FILE_SIZE,
        selectedFiles,
        setSelectedFiles,
        singleFile = false,
    } = props;

    const [message, setMessage] = useState('');

    const [overLimitFileCount, setOverLimitFileCount] = useState(0);

    const [disableUpload, setDisableUpload] = useState(false);
    const inputRef = useRef(null);

    const [dragActive, setDragActive] = useState(false);

    useEffect(() => {
        if (overLimitFileCount > 0) {
            setDisableUpload(true);
        }
        else {
            setDisableUpload(false);
            setMessage('');
        }
    }, [overLimitFileCount, selectedFiles]);

    // event handlers for drag and drop
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileInput(e.dataTransfer.files);
        }
    };

    const getFileSizeInMB = (size) => {
        return Math.round((size / 1024 / 1024 + Number.EPSILON) * 100) / 100;
    };

    const getFileSizeWithUnit = (size) => {
        var returnSize = Math.round((size / 1024 + Number.EPSILON) * 100) / 100;

        if (returnSize < 1000) return `${returnSize} KB`;

        returnSize = Math.round((returnSize / 1024 + Number.EPSILON) * 100) / 100;

        return `${returnSize} MB`;
    };

    // event handler for file input
    const removeFile = (index) => {
        const file = selectedFiles[index];

        if (getFileSizeInMB(file.size) > maxFileSize)
            setOverLimitFileCount(overLimitFileCount - 1);

        const newSelectedFiles = [...selectedFiles];
        newSelectedFiles.splice(index, 1);

        setSelectedFiles(newSelectedFiles);
    }

    const handleFileInput = (files) => {
        if (files) {
            setMessage('');

            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();

                if (files[i].type.startsWith('image/') || files[i].type === 'application/pdf') {
                    var size = getFileSizeInMB(files[i].size);

                    if (size > maxFileSize) {
                        setMessage(`File size is exceeding size limit of ${maxFileSize} MB`);

                        if (singleFile) break;

                        setOverLimitFileCount(overLimitFileCount + 1);
                    }

                    reader.onload = (event) => {
                        setSelectedFiles((prevFiles) => [...prevFiles, {
                            file: event.target.result,
                            size: files[i].size,
                            type: files[i].type,
                        }]);
                    };
                    reader.readAsDataURL(files[i]);

                    setDisableUpload(true);
                }
                else {
                    setMessage('Some files did not upload due to invalid type..!');
                }
            }
        }
    };

    const loadFileInputWindow = () => {
        inputRef.current.click();
    };

    return (
        <div className='px-0 pb-2'>
            <div
                onDragEnter={!disableUpload ? handleDrag : undefined}
                onDragLeave={!disableUpload ? handleDrag : undefined}
                onDragOver={!disableUpload ? handleDrag : undefined}
                onDrop={!disableUpload ? handleDrop : undefined}
                className={`flex flex-col m-1 p-2 border-2 border-dashed rounded-lg border-[${dragActive ? dashColorOnDrag : dashColor}]`}
            >
                {message &&
                    <p className='pb-2 text-yellow-400'>
                        {message}
                    </p>
                }

                {selectedFiles.length > 0 && (
                    <div className='flex border-b-black'>
                        {selectedFiles.map((item, index) => (
                            <div key={index} className='relative inline-blok justify-center mr-2 w-[100px]'>
                                <div className="absolute z-10 w-6 h-6 rounded-full top-1 right-1 bg-slate-800/50">
                                    <img
                                        src={closeIcon}
                                        alt='close'
                                        className='p-2 bg-contain'
                                        onClick={() => removeFile(index)}
                                    />
                                </div>

                                <div className='mx-auto h-[100px] flex items-center justify-center'>
                                    {item.type === 'application/pdf' ? (
                                        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                                            <Viewer
                                                fileUrl={item.file}
                                                defaultScale={SpecialZoomLevel.PageWidth}
                                                className='overflow-y-hidden'
                                            />
                                        </Worker>
                                    ) : (<img
                                        src={item.file}
                                        alt={`file${index + 1}`}
                                        className='mx-auto bg-contain max-h-[100px] max-w-[100px]'
                                    />
                                    )}
                                </div>
                                <p className='text-center'>
                                    {getFileSizeWithUnit(item.size)}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {(!singleFile || (singleFile && selectedFiles.length) <= 0) && (
                    <div className='flex justify-center'>
                        <div className='flex flex-col items-center justify-center space-y-1'>
                            <img
                                src={cloudIcon}
                                alt='upload'
                                className='w-20 h-20'
                                onClick={loadFileInputWindow}
                            />
                            <p className='text-xl text-center font-serif text-[#0AB7C2]'>
                                Choose file or drag here
                            </p>
                            <p className='text-center font-serif text-[#0AB7C2]'>
                                Accept file format: JPG, PNG, PDF.
                                The file should not exceed {maxFileSize} MB in size
                            </p>
                        </div>

                        <input
                            type="file"
                            ref={inputRef}
                            style={{ display: 'none' }}
                            onChange={(e) => handleFileInput(e.target.files)}
                            multiple={!singleFile}
                            accept='.pdf, .png, .jpg, .jpeg'
                        />
                    </div>
                )}
            </div>
        </div>
    )
};

export default FileUpload;