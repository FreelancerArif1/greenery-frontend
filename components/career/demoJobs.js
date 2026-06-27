// Demo dataset for JobListing component
// Each entry follows the structure expected by JobListing.jsx: jobs.posts.list[].data

export const demoJobs = {
  posts: {
    list: [
      {
        data: {
          title: 'Senior Solar Engineer',
          description: '<p>Lead design and implementation of large-scale solar PV systems. 5+ years experience preferred.</p>',
          overview: 'https://example.com/apply?job=senior-solar-engineer'
        }
      },
      {
        data: {
          title: 'Project Manager - Renewable Energy',
          description: '<p>Manage cross-functional teams to deliver utility-scale renewable projects on time and on budget.</p>',
          overview: 'https://example.com/apply?job=project-manager'
        }
      },
      {
        data: {
          title: 'Electrical Design Engineer',
          description: '<p>Support electrical design, protection schemes and interconnection studies for renewable projects.</p>',
          overview: 'https://example.com/apply?job=electrical-design-engineer'
        }
      }
    ]
  }
};

