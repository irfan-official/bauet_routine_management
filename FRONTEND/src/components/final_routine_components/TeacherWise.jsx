import React from 'react'
import { useState } from 'react'
function TeacherWise({ clickTeach }) {

    let [teachers] = useState(
        ["Adjunt Teachers", "Professor", "Assocoate Professor", "Assistant Professor", "Lecturer", "Adjunt Instructor"
        ])

    return (
        <div className="relative">
            <div className='bg-[#7480A8] w-36 py-2 rounded-lg mt-1'>
                Teacher Wise
            </div>
            {clickTeach ?
                <div className='bg-[#CCCCCC] w-40 rounded-lg absolute top-[20%] translate-x-[-5%] px-3 py-2 scale-[0.8] flex flex-col gap-2'>
                    {teachers.map((item, index) => <div className="bg-white px-1 py-2 text-wrap rounded-lg hover:bg-[#AEAEAE] border-2">{item}</div>
                    )}</div>
                : ""}
        </div>
    )
}

export default TeacherWise