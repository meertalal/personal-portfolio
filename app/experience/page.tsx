'use client';
import Header from "@/components/header";
import FooterSection from "@/components/footer";

interface EducationItem {
  period: string;
  level: string;
  institution: string;
  field: string;
  details: string[];
}

const Education = () => {
  const education: EducationItem[] = [
    {
      period: '2017 - Passout',
      level: 'Higher Secondary',
      institution: 'School',
      field: 'Science Stream',
      details: ['Nostalgic School Memories'],
    },
    {
      period: '2018 - 2021',
      level: 'Bachelor',
      institution: 'Govt. MVM College, Bhopal',
      field: 'BSc - Computer Science',
      details: ['Defence Aspirant', 'Join NCC', 'Sports', 'Theatre'],
    },
    {
      period: '2021 - 2023',
      level: 'Master',
      institution: 'Barkatullah University',
      field: 'MSc - Computer Science',
      details: ['Met many friends', 'Decided to continue career in IT Field'],
    },
    {
      period: '2022 - 2023',
      level: 'Certification',
      institution: 'Sheryians Coding School, Bhopal',
      field: 'MERN Stack Development',
      details: ['Learned Coding', 'Web Mentor', 'Hackathon'],
    },
  ];

  return (
    <section id="education" className="w-full py-20 bg-slate-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            Education <span className="text-purple-600">Journey</span>
          </h2>

          {/* Timeline */}
          <div className="mt-12 space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Line (for desktop) */}
                {index < education.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-20 w-1 h-12 bg-gradient-to-b from-purple-600 to-purple-200" />
                )}

                <div className="md:grid md:grid-cols-2 md:gap-8">
                  {/* Left - Period & Details */}
                  <div className={`mb-6 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="flex md:justify-between md:flex-row-reverse items-start gap-4">
                      {/* Timeline Dot */}
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-md" />
                      </div>
                      <div>
                        <p className="font-bold text-purple-600 text-sm">{edu.period}</p>
                        <p className="text-lg font-bold text-slate-900 mt-2">{edu.level}</p>
                        <p className="text-slate-600 text-sm mt-1">{edu.field}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Institution & Highlights */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="font-bold text-slate-900 mb-2">{edu.institution}</h3>
                    <ul className="space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="flex gap-2 text-slate-600 text-sm">
                          <span className="text-purple-600 font-bold">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Quote */}
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-slate-900 mb-4">
              The learning process continues until <br />
              <span className="text-purple-600">the day you die.</span>
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-full font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
