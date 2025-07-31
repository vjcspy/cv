import React from 'react';

const CV = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 font-[family-name:var(--font-jetbrains-mono)]">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
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
        <div className="p-8 border-b border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-600">Email: jill.morgan@email.com</p>
            </div>
            <div>
              <p className="text-gray-600">Address: 123 Main St, City, State 12345</p>
              <p className="text-gray-600">LinkedIn: linkedin.com/in/jillmorgan</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="p-8 border-b border-gray-200">
          <p className="text-gray-700 leading-relaxed">
            I am a deeply passionate technologist, dedicating most of my time to immersing myself in learning and developing software. With 5+ years as an expert full-stack developer in high-traffic e-commerce and banking sectors, my philosophy centers on focused clarity—selecting optimal tools and strategies to solve complex problems efficiently. I deliver solutions that are not just technically sound, but elegant and valuable, driving real impact for teams and millions of users.
          </p>
        </div>

        {/* Skills Section */}
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Frontend/Client-side</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Extensive experience building diverse client-side apps (web, SPAs, micro frontends, server-side rendering) for high-traffic e-commerce and banking, delivering scalable UIs for millions of users.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-gray-800">JavaScript/TypeScript:</strong>
                      <span className="text-gray-700"> Angular, React, Next.js, Electron, React Native, RxJS, Redux – Optimized for interactive platforms, real-time dashboards, and cross-platform compatibility.</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">C#:</strong>
                      <span className="text-gray-700"> Avalonia – For desktop apps with seamless backend integration and high-performance rendering.</span>
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Server/Application</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Versatile expertise in multiple languages for scalable backends handling high concurrency, real-time processing, and secure transactions in finance, gaming, and trading.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-gray-800">Node.js:</strong>
                      <span className="text-gray-700"> HTTP servers for banking, real-time (Meteor), game servers for Unity – Optimized for low-latency in high-stakes environments.</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">C#:</strong>
                      <span className="text-gray-700"> Unity apps – Focused on game logic, multiplayer, and cross-platform deployment.</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Java:</strong>
                      <span className="text-gray-700"> Quarkus, Spring Boot for banking microservices – Enhanced security and scalability for enterprise transactions.</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">PHP:</strong>
                      <span className="text-gray-700"> Magento 2 (Adobe) for e-commerce – Improved performance and payment integrations.</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Python:</strong>
                      <span className="text-gray-700"> Automated trading systems for crypto markets – With data analysis and API for high-frequency efficiency.</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Databases:</strong>
                      <span className="text-gray-700"> PostgreSQL, MySQL – Schema design, query optimization, and data management for large-scale apps.</span>
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Infrastructure (Infra)</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Proven expertise in enterprise infra management for tens of millions of users, focusing on reliability, scalability, and automation with key certifications.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-gray-800">Cloud:</strong>
                      <span className="text-gray-700"> AWS (Certified Developer/Solutions Architect) – Deployed scalable setups with cost optimization and security.</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">DevOps & Orchestration:</strong>
                      <span className="text-gray-700"> Jenkins, Harness (Certified), Kubernetes (Certified), Terraform (Certified) – Automated CI/CD, container deployments, and IaC for zero-downtime scaling.</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Networking & Servers:</strong>
                      <span className="text-gray-700"> Configured clusters, load balancing, and monitoring – Ensured high availability and reduced downtime in distributed systems.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
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
                  <span className="text-gray-500 text-sm font-medium">2018-09 - present</span>
                  <h3 className="font-semibold text-gray-800">Senior Sales Representative</h3>
                  <p className="text-gray-600 italic">McKinsey Industrial Supplies, Brooklyn, NY</p>
                </div>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Managed organizational sales and group of sales representatives in selling industrial equipment and maintaining large construction and contractor business relationships.</li>
                  <li>• Worked with the data analysis team to develop sales targets based on extensive market research and analysis.</li>
                  <li>• Tracked individual sales rep sales goals and individually mentored any representatives deemed to be falling behind.</li>
                  <li>• Managed largest 5 corporate construction and industrial client accounts.</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2"><strong>Key Achievement:</strong></p>
                <p className="text-gray-700 text-sm">Achieved over $500,000 in sales in each fiscal quarter from 2019.</p>
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
                  <span className="text-gray-500 text-sm font-medium">2016-09 - 2018-08</span>
                  <h3 className="font-semibold text-gray-800">Customer Relationship Officer</h3>
                  <p className="text-gray-600 italic">XYZ Inc., Philadelphia, PA</p>
                </div>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Acted as liaison between XYZ Inc. and corporate clients to facilitate and maintain healthy business relationships.</li>
                  <li>• Checked in on clients on a weekly basis to ensure needs are being met and supplies are being filled.</li>
                  <li>• Managed database of current and potential leads in a customer relationship manager (CRM) program.</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2"><strong>Key Achievement:</strong></p>
                <p className="text-gray-700 text-sm">Maintained positive and happy client relationships with 15 corporate customers.</p>
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
                  <span className="text-gray-500 text-sm font-medium">2014-07 - 2016-06</span>
                  <h3 className="font-semibold text-gray-800">Part-time Retail Associate</h3>
                  <p className="text-gray-600 italic">ABC Shopping, Philadelphia, PA</p>
                </div>
                <ul className="text-gray-700 text-sm space-y-1">
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
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
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
                <h3 className="font-semibold text-gray-800">Academy of Finance</h3>
                <p className="text-gray-600 italic">Securities Specialization</p>
                <p className="text-gray-700 text-sm mt-1"><strong>Focus:</strong> Financial markets, investment analysis, securities trading, and portfolio management.</p>
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
                <h3 className="font-semibold text-gray-800">Professional Certifications</h3>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700 text-sm"><strong>AWS Certified:</strong> Cloud Solutions Architecture and Development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700 text-sm"><strong>Harness Certified:</strong> Continuous Delivery and DevOps Platform</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700 text-sm"><strong>Kubernetes (K8S) Certified:</strong> Container Orchestration and Management</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700 text-sm"><strong>Terraform Certified:</strong> Infrastructure as Code and Cloud Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;