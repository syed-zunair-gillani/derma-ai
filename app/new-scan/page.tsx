import SkinAnalysisUpload from '@/src/components/scan/SkinAnalysisUpload'
import React from 'react'

const NewScan = () => {
    return (
        <section className='bg-slate-50 text-slate-900 min-h-screen'>
            <div className='max-w-7xl mx-auto px-6 pt-28 pb-12 w-full'>
                <SkinAnalysisUpload />
            </div>
        </section>
    )
}

export default NewScan