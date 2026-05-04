'use client';

import { useState } from 'react';
import {
  GraduationCap, BookOpen, Clock, Award, Users,
  Target, CheckCircle, Briefcase,
} from 'lucide-react';
import CurriculumAccordion from '@/components/CurriculumAccordion';
import { CourseSemester } from '@/types/sanity';

export interface CourseData {
  title: string;
  acronym: string;
  duration: string;
  totalCredits: number;
  semesters: number;
  aim: string;
  objectives: string[];
  targetBeneficiaries: string[];
  admissionText: string;
  feeText?: string;
  deliveryModes?: string[];
  assessmentStructure: { continuousAssessment: number; examination: number; minimumPass: number };
  graduationRequirements: string[];
  gradingSystem?: Array<{ score: string; grade: string; point: string; remarks: string }>;
  diplomaClassification: Array<{ cgpaRange: string; classification: string }>;
  careerProspects: string[];
  directEntryEligibility?: string[];
  curriculum: CourseSemester[];
}

export default function CourseDetail({ data }: { data: CourseData }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'requirements'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'requirements', label: 'Requirements & Awards' },
  ] as const;

  return (
    <div>
      {/* Programme header */}
      <div className="text-center mb-10">
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          {data.aim}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="flex items-center bg-white shadow rounded-lg px-5 py-3 gap-2">
            <Clock className="text-primary-600" size={18} />
            <span className="font-semibold text-gray-700 text-sm">{data.duration}</span>
          </div>
          <div className="flex items-center bg-white shadow rounded-lg px-5 py-3 gap-2">
            <BookOpen className="text-accent-600" size={18} />
            <span className="font-semibold text-gray-700 text-sm">{data.totalCredits} Credit Units</span>
          </div>
          <div className="flex items-center bg-white shadow rounded-lg px-5 py-3 gap-2">
            <GraduationCap className="text-purple-600" size={18} />
            <span className="font-semibold text-gray-700 text-sm">{data.semesters} Semesters</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-10 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-semibold text-sm whitespace-nowrap transition-colors border-b-2 -mb-px ${
              activeTab === tab.id
                ? 'border-primary-600 text-primary-700'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW ── */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Objectives + Beneficiaries */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-primary-600 p-3 rounded-lg mr-4"><Target className="text-white" size={22} /></div>
                <h3 className="text-xl font-bold text-gray-900">Objectives</h3>
              </div>
              <ul className="space-y-2">
                {data.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-primary-600 mt-1 flex-shrink-0">•</span>{obj}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 p-3 rounded-lg mr-4"><Users className="text-white" size={22} /></div>
                <h3 className="text-xl font-bold text-gray-900">Target Beneficiaries</h3>
              </div>
              <div className="space-y-3">
                {data.targetBeneficiaries.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <CheckCircle className="text-primary-600 flex-shrink-0" size={16} />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Admission */}
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Admission Requirements</h3>
            <p className="text-gray-700 leading-relaxed">{data.admissionText}</p>
            {data.feeText && (
              <div className="mt-4 inline-block bg-accent-600 text-white px-5 py-2 rounded-lg font-semibold">
                {data.feeText}
              </div>
            )}
          </div>

          {/* Delivery modes */}
          {data.deliveryModes && (
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Mode</h3>
              <ul className="space-y-2">
                {data.deliveryModes.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={16} />{m}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Career + Direct Entry */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white shadow-lg">
              <div className="flex items-center mb-5">
                <Briefcase className="mr-3" size={24} />
                <h3 className="text-xl font-bold">Career Opportunities</h3>
              </div>
              <ul className="space-y-2">
                {data.careerProspects.map((c, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                    <span className="text-primary-50 text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {data.directEntryEligibility && (
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-8 text-white shadow-lg">
                <div className="flex items-center mb-5">
                  <GraduationCap className="mr-3" size={24} />
                  <h3 className="text-xl font-bold">Direct Entry Eligibility</h3>
                </div>
                <p className="text-accent-50 mb-4 text-sm">Graduates with CGPA ≥ 3.00 may be eligible for 200 Level entry into:</p>
                <ul className="space-y-2">
                  {data.directEntryEligibility.map((e, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                      <span className="text-accent-50 text-sm">{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── CURRICULUM ── */}
      {activeTab === 'curriculum' && (
        <CurriculumAccordion semesters={data.curriculum} />
      )}

      {/* ── REQUIREMENTS & AWARDS ── */}
      {activeTab === 'requirements' && (
        <div className="space-y-8">
          {/* Assessment */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Assessment Structure</h3>
            <div className="space-y-4">
              {[
                { label: 'Continuous Assessment', value: data.assessmentStructure.continuousAssessment, color: 'bg-primary-500' },
                { label: 'End-of-Semester Examination', value: data.assessmentStructure.examination, color: 'bg-accent-500' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium text-sm">{item.label}</span>
                    <span className="font-bold text-gray-900">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className={`${item.color} h-3 rounded-full`} style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
              <p className="text-sm text-gray-600 mt-2">Minimum pass mark: <strong>{data.assessmentStructure.minimumPass}%</strong></p>
            </div>
          </div>

          {/* Grading system */}
          {data.gradingSystem && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Grading System</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="bg-primary-600 text-white">
                      <th className="px-4 py-3 rounded-tl-lg">Score (%)</th>
                      <th className="px-4 py-3">Grade</th>
                      <th className="px-4 py-3">Grade Point</th>
                      <th className="px-4 py-3 rounded-tr-lg">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.gradingSystem.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 font-medium">{row.score}</td>
                        <td className="px-4 py-3 font-bold text-primary-700">{row.grade}</td>
                        <td className="px-4 py-3">{row.point}</td>
                        <td className="px-4 py-3">{row.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Graduation requirements */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Graduation Requirements</h3>
            <ul className="space-y-3">
              {data.graduationRequirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Classification */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary-600 p-3 rounded-lg mr-4"><Award className="text-white" size={22} /></div>
              <h3 className="text-xl font-bold text-gray-900">Classification of Award</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="px-6 py-3 rounded-tl-lg font-semibold">CGPA Range</th>
                    <th className="px-6 py-3 rounded-tr-lg font-semibold">Class of Diploma</th>
                  </tr>
                </thead>
                <tbody>
                  {data.diplomaClassification.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.cgpaRange}</td>
                      <td className="px-6 py-4 text-gray-700">{row.classification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
