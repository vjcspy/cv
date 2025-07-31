'use client';
import React, { useState } from 'react';

const CV = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`min-h-screen py-8 font-[family-name:var(--font-jetbrains-mono)] transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className={`max-w-4xl mx-auto shadow-lg transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Header Section */}
        <div className="bg-blue-600 text-white flex">
          {/* Profile Image Placeholder */}
           <div className="bg-white/20 flex items-center justify-center flex-shrink-0" style={{width: '150px'}}>
            <div className="w-full h-full bg-blue-800 flex items-center justify-center text-white text-xs font-bold">
                PHOTO<br/>150px
            </div>
          </div>
          {/* Name and Title */}
          <div className="flex-1 p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2">JILL MORGAN</h1>
            <p className="text-blue-100 text-lg">Marketing Manager</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`p-8 border-b transition-colors duration-300 ${
          isDarkMode ? 'border-gray-600' : 'border-gray-200'
        }`}>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Phone: +1 (555) 123-4567</p>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Email: jill.morgan@email.com</p>
            </div>
            <div>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Address: 123 Main St, City, State 12345</p>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>LinkedIn: linkedin.com/in/jillmorgan</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className={`p-8 border-b transition-colors duration-300 ${
          isDarkMode ? 'border-gray-600' : 'border-gray-200'
        }`}>
          <p className={`leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I am a deeply passionate technologist, dedicating most of my time to immersing myself in learning and developing software. With 5+ years as an expert full-stack developer in high-traffic e-commerce and banking sectors, my philosophy centers on focused clarity—selecting optimal tools and strategies to solve complex problems efficiently. I deliver solutions that are not just technically sound, but elegant and valuable, driving real impact for teams and millions of users.
          </p>
        </div>

        {/* Skills Section */}
        <div className={`p-8 border-b transition-colors duration-300 ${
          isDarkMode ? 'border-gray-600' : 'border-gray-200'
        }`}>
          <h2 className={`text-xl font-bold mb-6 flex items-center transition-colors duration-300 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>
            <span className="text-blue-600 text-2xl mr-3">♦</span>
            SKILLS
          </h2>
          
          <div className="relative">
            {/* Continuous timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            <div className="space-y-8 text-sm">
              {/* Frontend/Client-side */}
              <div className="flex">
                <div className="flex flex-col items-center mr-6 relative z-10">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">💻</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>Frontend/Client-side</h3>
                  <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Extensive experience building diverse client-side apps (web, SPAs, micro frontends, server-side rendering) for high-traffic e-commerce and banking, delivering scalable UIs for millions of users.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <strong className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>JavaScript/TypeScript:</strong>
                      <span className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}> Angular, React, Next.js, Electron, React Native, RxJS, Redux – Optimized for interactive platforms, real-time dashboards, and cross-platform compatibility.</span>
                    </div>
                    <div>
                      <strong className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>C#:</strong>
                      <span className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}> Avalonia – For desktop apps with seamless backend integration and high-performance rendering.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Server/Application */}
              <div className="flex">
                <div className="flex flex-col items-center mr-6 relative z-10">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">⚙️</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>Server/Application</h3>
                  <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Versatile expertise in multiple languages for scalable backends handling high concurrency, real-time processing, and secure transactions in finance, gaming, and trading.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <strong className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>Node.js:</strong>
                      <span className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}> HTTP servers for banking, real-time (Meteor), game servers for Unity – Optimized for low-latency in high-stakes environments.</span>
                    </div>
                    <div>
                      <strong className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>C#:</strong>
                      <span className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}> Unity apps – Focused on game logic, multiplayer, and cross-platform deployment.</span>
                    </div>
                    <div>
                      <strong className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>Java:</strong>
                      <span className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}> Quarkus, Spring Boot for banking microservices – Enhanced security and scalability for enterprise transactions.</span>
                    </div>
                    <div>
                      <strong className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>PHP:</strong>
                      <span className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}> Magento 2 (Adobe) for e-commerce – Improved performance and payment integrations.</span>
                    </div>
                    <div>
                      <strong className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>Python:</strong>
                      <span className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}> Automated trading systems for crypto markets – With data analysis and API for high-frequency efficiency.</span>
                    </div>
                    <div>
                      <strong className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>Databases:</strong>
                      <span className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}> PostgreSQL, MySQL – Schema design, query optimization, and data management for large-scale apps.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="flex">
                <div className="flex flex-col items-center mr-6 relative z-10">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🏗️</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>Infrastructure (Infra)</h3>
                  <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Proven expertise in enterprise infra management for tens of millions of users, focusing on reliability, scalability, and automation with key certifications.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <strong className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>Cloud:</strong>
                      <span className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}> AWS (Certified Developer/Solutions Architect) – Deployed scalable setups with cost optimization and security.</span>
                    </div>
                    <div>
                      <strong className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>DevOps & Orchestration:</strong>
                      <span className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}> Jenkins, Harness (Certified), Kubernetes (Certified), Terraform (Certified) – Automated CI/CD, container deployments, and IaC for zero-downtime scaling.</span>
                    </div>
                    <div>
                      <strong className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>Networking & Servers:</strong>
                      <span className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}> Configured clusters, load balancing, and monitoring – Ensured high availability and reduced downtime in distributed systems.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className={`p-8 border-b transition-colors duration-300 ${
          isDarkMode ? 'border-gray-600' : 'border-gray-200'
        }`}>
          <h2 className={`text-xl font-bold mb-6 flex items-center transition-colors duration-300 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>
            <span className="text-blue-600 text-2xl mr-3">♦</span>
            EXPERIENCE
          </h2>
          
          <div className="relative">
            {/* Continuous timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            <div className="flex mb-8">
              <div className="flex flex-col items-center mr-6 relative z-10">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">💼</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>2018-09 - present</span>
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>Senior Sales Representative</h3>
                  <p className={`italic transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>McKinsey Industrial Supplies, Brooklyn, NY</p>
                </div>
                <ul className={`text-sm space-y-1 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <li>• Managed organizational sales and group of sales representatives in selling industrial equipment and maintaining large construction and contractor business relationships.</li>
                  <li>• Worked with the data analysis team to develop sales targets based on extensive market research and analysis.</li>
                  <li>• Tracked individual sales rep sales goals and individually mentored any representatives deemed to be falling behind.</li>
                  <li>• Managed largest 5 corporate construction and industrial client accounts.</li>
                </ul>
                <p className={`text-sm mt-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}><strong>Key Achievement:</strong></p>
                <p className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Achieved over $500,000 in sales in each fiscal quarter from 2019.</p>
              </div>
            </div>

            <div className="flex mb-8">
              <div className="flex flex-col items-center mr-6 relative z-10">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">👥</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>2016-09 - 2018-08</span>
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>Customer Relationship Officer</h3>
                  <p className={`italic transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>XYZ Inc., Philadelphia, PA</p>
                </div>
                <ul className={`text-sm space-y-1 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <li>• Acted as liaison between XYZ Inc. and corporate clients to facilitate and maintain healthy business relationships.</li>
                  <li>• Checked in on clients on a weekly basis to ensure needs are being met and supplies are being filled.</li>
                  <li>• Managed database of current and potential leads in a customer relationship manager (CRM) program.</li>
                </ul>
                <p className={`text-sm mt-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}><strong>Key Achievement:</strong></p>
                <p className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Maintained positive and happy client relationships with 15 corporate customers.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-6 relative z-10">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🛒</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>2014-07 - 2016-06</span>
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>Part-time Retail Associate</h3>
                  <p className={`italic transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>ABC Shopping, Philadelphia, PA</p>
                </div>
                <ul className={`text-sm space-y-1 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <li>• Assisted customers on the sales floor with questions, advice, and physical issues when requested or upon initiative.</li>
                  <li>• Operated the POS and credit card machine when front lines call for additional assistance to the checkout lanes.</li>
                  <li>• Organized shelves, end caps, and bargain bins out on the sales floor.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="p-8">
          <h2 className={`text-xl font-bold mb-4 flex items-center transition-colors duration-300 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>
            <span className="text-blue-600 text-2xl mr-3">♦</span>
            EDUCATION
          </h2>
          <div className="relative">
            {/* Continuous timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            {/* Academy of Finance */}
            <div className="flex mb-8">
              <div className="flex flex-col items-center mr-6 relative z-10">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🎓</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>Academy of Finance</h3>
                <p className={`italic transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Securities Specialization</p>
                <p className={`text-sm mt-1 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}><strong>Focus:</strong> Financial markets, investment analysis, securities trading, and portfolio management.</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6 relative z-10">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">📜</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>Professional Certifications</h3>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}><strong>AWS Certified:</strong> Cloud Solutions Architecture and Development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}><strong>Harness Certified:</strong> Continuous Delivery and DevOps Platform</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}><strong>Kubernetes (K8S) Certified:</strong> Container Orchestration and Management</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}><strong>Terraform Certified:</strong> Infrastructure as Code and Cloud Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-50 flex gap-3 no-print">
        {/* Dark Mode Toggle Button */}
        <button 
          onClick={toggleDarkMode}
          className={`px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-200 hover:scale-105 ${
            isDarkMode 
              ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' 
              : 'bg-gray-700 hover:bg-gray-800 text-white'
          }`}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
        
        {/* PDF Download Button */}
        <a 
          href="/cv.pdf" 
          download="Jill_Morgan_CV.pdf"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-200 hover:scale-105"
          title="Download CV as PDF"
        >
          <svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" 
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          <span className="font-medium">PDF</span>
        </a>
      </div>
    </div>
  );
};

export default CV;