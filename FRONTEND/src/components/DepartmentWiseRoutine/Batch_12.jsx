import React from 'react'
import { useState, useEffect } from 'react'

import routine_12 from '../../apis/routine_12.js'
import routine_13 from '../../apis/routine_13.js'
import routine_14 from '../../apis/routine_14.js'

function StudentList({ current_batch }) {
  let [routine, setRoutine] = useState(routine_12);

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <h1 className='text-center'>13 Batch</h1>
      <div className="px-4 ">
                <table class=" border-lime-600 text-black">
                  <thead class="border border-lime-600">
                    <th class="border px-2 border-lime-600">Day</th>
                    <th class="border-r px-2 border-lime-600">
                      8.15AM -9.10AM
                    </th>
                    <th class="py-2 border-r  px-2 border-lime-600">
                      9.15AM - 10.10AM
                    </th>
                    <th class="border-r  px-2 py-5 border-lime-600">
                      10.15AM - 11.10AM
                    </th>
                    <th class="border-r  px-2 border-lime-600">
                      11.40AM - 12.35PM
                    </th>
                    <th class="border-r  px-2 border-lime-600">
                      12.40PM - 1.35PM
                    </th>
                    <th class="border-r  px-2 border-lime-600">
                      1.40PM - 2.35PM
                    </th>
                  </thead>
                  <tbody class="">
                    {routine.map((item, index) => (
                      <>
                        <td className="text-center h-14 py-6 border border-lime-600 px-5 font-semibold">
                          {item.day}
                        </td>
                        <td className="text-center h-14 py-6 border border-lime-600">
                          {item.first}
                        </td>
                        <td className="text-center h-14 py-6 border border-lime-600">
                          {item.second}
                        </td>
                        <td className="text-center h-14 py-6 border border-lime-600">
                          {item.third}
                        </td>
                        <td className="text-center h-14 py-6 border border-lime-600">
                          {item.fourth}
                        </td>
                        <td className="text-center h-14 py-6 border border-lime-600">
                          {item.fifth}
                        </td>
                        <td className="text-center h-14 py-6 border border-lime-600">
                          {item.sixth}
                        </td>
                        <tr></tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
      </div>
  )
}

export default StudentList