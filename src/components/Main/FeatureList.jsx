import React from 'react';
import { featureSections } from '../../Data/Data';

function FeatureList() {
  return (
    <div className="container mt-5 px-4">
      <h2 className="text-center mb-4 feature-list-heading">What You Can Do on the Interest Sharing Platform</h2>
      <div className="row g-4">
        {featureSections.map((section) => (
          <div key={section.id} className="col-md-6 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body">
                <h5 className="card-title">{section.title}</h5>
                <ul>
                  {section.features.map((feature) => (
                    <li key={feature.id}>
                      <div className="icon-container">{feature.icon}</div>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureList;
