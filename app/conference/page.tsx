import { Calendar, Users, Target, Lightbulb, Award } from 'lucide-react';

const objectives = [
  'Assess the implementation status of Food for Education policies and programs in Nigeria',
  'Explore interdisciplinary innovations and context-based solutions for strengthening school-based nutrition interventions',
  'Identify financing, governance, and accountability strategies for improving impact and scale-up',
  'Promote collaboration among research institutions, policymakers, and practitioners',
  'Disseminate emerging insights from research and community programs',
];

const subThemes = [
  'Strengthening Institutional and Policy Frameworks for Effective FFE Implementation',
  'Enhancing Educational Outcomes through School-Based Nutrition',
  'Promoting Community Empowerment through Locally Sourced, Culturally Appropriate School Meals',
  'Combating Micronutrient Deficiencies through Targeted School Nutrition Interventions',
  'Innovative Tools, Metrics, and Data Systems for Monitoring FFE Impact and Efficiency',
  'Leveraging Climate-Resilient Agriculture and Indigenous Crops to Support School Feeding Programs',
];

const participants = [
  'Federal and State MDAs (Education, Health, Agriculture, Humanitarian Affairs)',
  'Academics, researchers, school teachers and students',
  'International development agencies and donor organizations',
  'NGOs, CBOs, and school nutrition program implementers',
  'Food processors, agribusiness entrepreneurs, and cooperatives',
  'Legislators, policy analysts, and governance experts',
  'Media professionals, media influencers and nutrition advocates',
];

const activities = [
  { icon: Award, title: 'Keynote Lectures' },
  { icon: Lightbulb, title: 'Scientific Paper Presentations' },
  { icon: Users, title: 'Panel Discussions and Policy Dialogues' },
  { icon: Target, title: 'Poster Sessions and Innovation Showcase' },
];

export default function ConferencePage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full font-semibold mb-4">
            Upcoming Conference
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Food for Education Policy Conference
          </h1>
          <p className="text-xl md:text-2xl text-primary-700 font-semibold mb-4 max-w-4xl mx-auto">
            Accelerating the Implementation of Food for Education Policy for Human Capital Development in Nigeria
          </p>
          <div className="flex items-center justify-center text-gray-600 mb-8">
            <Calendar className="mr-2" size={20} />
            <span>Dates to be announced</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">About the Conference</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Food for Education (FFE) programs, such as Nigeria's National Home-Grown School Feeding Programme (NHGSFP), 
            are pivotal to improving child nutrition, boosting school attendance, and supporting national human capital 
            development goals under the HCD 2.0 Strategy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Center for Nutrition Research and Innovation (CNRI), Kaduna State University (KASU), is organizing 
            a Conference to convene experts and actors from academia, government, civil society, international development, 
            and the private sector to explore innovative, sustainable, and integrated approaches to accelerate the 
            implementation of the Food for Education (FFE) Policy.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Conference Objectives</h2>
          <ul className="space-y-3">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-sm">
                  {index + 1}
                </span>
                <span className="text-gray-700">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Conference Sub-Themes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {subThemes.map((theme, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <span className="text-accent-600 mr-2 font-bold">•</span>
                <span className="text-gray-700">{theme}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Target Participants</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {participants.map((participant, index) => (
              <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                <Users size={20} className="text-accent-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{participant}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Conference Activities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <activity.icon className="text-white" size={28} />
                </div>
                <p className="text-gray-700 font-semibold text-sm">{activity.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-accent-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-accent-700 transition-all transform hover:scale-105 shadow-lg">
            Register Now
          </button>
          <p className="text-gray-600 mt-4 text-sm">Registration details coming soon</p>
        </div>
      </div>
    </div>
  );
}
