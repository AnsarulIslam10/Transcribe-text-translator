import React from 'react'

export default function HomePage(props) {

    const { setAudioStream, setFile } = props

    return (
        <main className='flex-1 p-4 flex flex-col text-center gap-3 sm:gap-4 md:gap-5 justify-center pb-20'>
            <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>Easy<span className='text-blue-400 bold'>Scribe</span></h1>
            <h3 className='font-medium md:text-lg'>Record <span className='text-blue-400'>&rarr;</span> Transcribe <span>&rarr;</span> Translate</h3>
            <button className='flex spacialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4'>
                <p className='text-blue-400'>Record</p>
                <i className="fa-solid fa-microphone"></i>
            </button>
            <p className='text-base'>Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'>upload
            <input onChange={(e)=>{
                const tempFile = e.target.files[0]
                setFile(tempFile)
            }} className='hidden' type="file" name="" id="" accept='.mp3,.wave' /></label> a mp3 file</p>
            <p className='italic text-slate-500'>Free now free forver</p>
        </main>
    )
}
