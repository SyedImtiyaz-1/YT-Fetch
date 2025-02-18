import React from 'react'
import Step1 from './assets/Step 1.png'
import Step2 from './assets/Step 2.png'
import Step3 from './assets/Step 3.png'

const How2Use = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                        How to Use <span>"Download<span className="text-sky-600">Hub.?</span></span>
                    </h1>
                    
                    <div className="space-y-8">
                        <div className="space-y-6">
                            {/* <h2 className="text-2xl font-semibold text-gray-700">Quick Guide</h2> */}
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Youtube Instructions */}
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="text-xl font-semibold text-sky-600 mb-4">Quick Download Guide :</h3>
                                    <ol className="space-y-3 text-gray-600">
                                        <li className="flex items-start">
                                            <span className="font-bold mr-2">1.</span>
                                            Copy the Youtube video URL
                                        </li>
                                        <li className="flex items-start">
                                            <span className="font-bold mr-2">2.</span>
                                            Choose MP3 or MP4 format
                                        </li>
                                        <li className="flex items-start">
                                            <span className="font-bold mr-2">3.</span>
                                            Paste URL and click Download
                                        </li>
                                    </ol>
                                </div>

                                
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-700">Important Notes</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                                <li>Make sure to copy the complete URL</li>
                                <li>Select the desired format before downloading</li>
                                <li>Downloads will start automatically after processing</li>
                                <li>Respect copyright and terms of service of platforms</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-700">Quick Practical Guide</h2>
                            <div className="flex flex-col space-y-6">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                    <span className="text-xl">➡️</span>
                                    <div className="w-full sm:w-auto">
                                        <img 
                                            src={Step1} 
                                            alt="Step 1: Copy the video URL" 
                                            className="rounded-lg shadow-md w-full max-w-full sm:max-w-md h-auto object-contain" 
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                    <span className="text-xl">➡️</span>
                                    <div className="w-full sm:w-auto">
                                        <img 
                                            src={Step2} 
                                            alt="Step 2: Choose format and paste URL" 
                                            className="rounded-lg shadow-md w-full max-w-full sm:max-w-md h-auto object-contain" 
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                    <span className="text-xl">➡️</span>
                                    <div className="w-full sm:w-auto">
                                        <img 
                                            src={Step3} 
                                            alt="Step 3: Click download" 
                                            className="rounded-lg shadow-md w-full max-w-full sm:max-w-md h-auto object-contain" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-center text-gray-700">
                            Creator : {" "}
                            <a 
                                href="https://linkedin.com/in/imtiyaz-sde" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-sky-600 hover:text-sky-700 transition-colors font-semibold"
                            >
                                Syed Imtiyaz Ali
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default How2Use;