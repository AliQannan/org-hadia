import React from 'react';
import { BookOpen, GraduationCap, Calculator, Languages } from 'lucide-react';
import { TeacherProfile } from '../types';

const instructors: TeacherProfile[] = [
  {
    name: "م. علي قنن",
    title: "المهندس والأستاذ القدير",
    subjects: ["الرياضيات (علمي/أدبي)"],
    image: "https://picsum.photos/400/400?random=1", 
    description: "خبرة واسعة في تبسيط المفاهيم الرياضية المعقدة وتأهيل الطلاب للحصول على العلامات الكاملة."
  },
  {
    name: "أ. صابرين ماهر علوان",
    title: "المدرسة المتميزة",
    subjects: ["اللغة الإنجليزية (علمي/أدبي)"],
    image: "https://picsum.photos/400/400?random=2",
    description: "أسلوب تعليمي حديث يركز على الفهم العميق للقواعد والمفردات لضمان التفوق في امتحان الثانوية."
  }
];

const Instructors: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="instructors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">نخبة المعلمين</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            في مؤسسة هدية، نختار لك الأفضل. تعلم على يد خبراء يضمنون لك التفوق.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {instructors.map((instructor, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row">
              <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden group">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/30"></div>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{instructor.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{instructor.title}</p>
                
                <div className="flex items-center gap-2 mb-3 text-gray-700">
                   {idx === 0 ? <Calculator className="w-5 h-5 text-indigo-500" /> : <Languages className="w-5 h-5 text-indigo-500" />}
                   <span className="font-semibold">{instructor.subjects.join(", ")}</span>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {instructor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;