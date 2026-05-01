'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CourseSemester } from '@/types/sanity';

interface Props {
  semesters: CourseSemester[];
}

export default function CurriculumAccordion({ semesters }: Props) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="space-y-4">
      {semesters.map((sem, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => setOpen(open === idx ? -1 : idx)}
            className="w-full flex items-center justify-between px-8 py-5 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                Y{sem.year} S{sem.semester}
              </span>
              <span className="text-lg font-bold text-gray-900">{sem.label}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 font-medium hidden sm:block">
                {sem.totalCredits} Credit Units
              </span>
              {open === idx
                ? <ChevronUp className="text-primary-600 flex-shrink-0" size={20} />
                : <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
              }
            </div>
          </button>

          {open === idx && (
            <div className="px-8 pb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-primary-100">
                      <th className="text-left py-3 pr-4 text-gray-500 font-semibold w-28">Code</th>
                      <th className="text-left py-3 pr-4 text-gray-500 font-semibold">Course Title</th>
                      <th className="text-center py-3 text-gray-500 font-semibold w-16">CU</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sem.courses.map((course, ci) => (
                      <tr
                        key={ci}
                        className="border-b border-gray-100 hover:bg-primary-50 transition-colors group"
                      >
                        <td className="py-3 pr-4 font-mono text-primary-700 font-semibold text-xs">
                          {course.code}
                        </td>
                        <td className="py-3 pr-4">
                          <div className="font-medium text-gray-900">{course.title}</div>
                          {course.description && (
                            <div className="text-gray-500 text-xs mt-1 leading-relaxed hidden group-hover:block">
                              {course.description}
                            </div>
                          )}
                        </td>
                        <td className="py-3 text-center">
                          <span className="bg-primary-100 text-primary-700 font-bold px-2 py-1 rounded text-xs">
                            {course.credits}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-primary-50">
                      <td colSpan={2} className="py-3 pr-4 font-bold text-gray-900">Total</td>
                      <td className="py-3 text-center">
                        <span className="bg-primary-600 text-white font-bold px-2 py-1 rounded text-xs">
                          {sem.totalCredits}
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
