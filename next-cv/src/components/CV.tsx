import React from 'react';

const CV = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg">
        {/* Header Section */}
        <div className="bg-blue-600 text-white p-8">
          <h1 className="text-3xl font-bold mb-2">JILL MORGAN</h1>
          <p className="text-blue-100 text-lg">Marketing Manager</p>
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
          <h2 className="text-xl font-bold text-gray-800 mb-4">SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed">
            Results-driven Marketing Manager with 8+ years of experience in developing and executing 
            comprehensive marketing strategies. Proven track record of increasing brand awareness by 40% 
            and driving revenue growth through innovative digital campaigns and cross-functional collaboration.
          </p>
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
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-blue-600 text-2xl mr-3">♦</span>
            EDUCATION
          </h2>
          <div className="relative">
            {/* Continuous timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            <div className="flex">
              <div className="flex flex-col items-center mr-6 relative z-10">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🎓</span>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-gray-500 text-sm font-medium">2016</span>
                <h3 className="font-semibold text-gray-800">BSc in Marketing, Major in Professional Sales</h3>
                <p className="text-gray-600 italic">Penn State University, Philadelphia, PA</p>
                <p className="text-gray-700 text-sm mt-1"><strong>Relevant Coursework:</strong> Professional Selling, Sales Management, Advanced Sales & Selling Techniques, Cloud-Based CRM Systems.</p>
                <p className="text-gray-700 text-sm"><strong>Minor:</strong> Leadership & Communication.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-blue-600 text-2xl mr-3">♦</span>
            SKILLS
          </h2>
          <div className="relative">
            {/* Continuous timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-6 relative z-10">
                    <span className="text-white text-sm font-bold">🎯</span>
                  </div>
                  <span className="text-gray-700">Lead Qualification & Prospecting</span>
                </div>
                <div className="flex space-x-1">
                  <span className="text-blue-600">♦</span>
                  <span className="text-blue-600">♦</span>
                  <span className="text-blue-600">♦</span>
                  <span className="text-blue-600">♦</span>
                  <span className="text-blue-600">♦</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-6 relative z-10">
                    <span className="text-white text-sm font-bold">💻</span>
                  </div>
                  <span className="text-gray-700">Salesforce & Hubspot CRM</span>
                </div>
                <div className="flex space-x-1">
                  <span className="text-blue-600">♦</span>
                  <span className="text-blue-600">♦</span>
                  <span className="text-blue-600">♦</span>
                  <span className="text-blue-600">♦</span>
                  <span className="text-gray-300">♦</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-6 relative z-10">
                    <span className="text-white text-sm font-bold">📈</span>
                  </div>
                  <span className="text-gray-700">Optimizing MRR</span>
                </div>
                <div className="flex space-x-1">
                  <span className="text-blue-600">♦</span>
                  <span className="text-blue-600">♦</span>
                  <span className="text-blue-600">♦</span>
                  <span className="text-gray-300">♦</span>
                  <span className="text-gray-300">♦</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-6 relative z-10">
                    <span className="text-white text-sm font-bold">🤝</span>
                  </div>
                  <span className="text-gray-700">Contract Negotiation</span>
                </div>
                <div className="flex space-x-1">
                  <span className="text-blue-600">♦</span>
                  <span className="text-blue-600">♦</span>
                  <span className="text-blue-600">♦</span>
                  <span className="text-gray-300">♦</span>
                  <span className="text-gray-300">♦</span>
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