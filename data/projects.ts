import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Vehicle Detection & Monitoring System',
    slug: 'vehicle-monitoring',
    timeline: '2025-Q3',
    status: 'production',
    problemStatement: 'Enterprise clients required real-time vehicle tracking and anomaly detection across multiple sites with 99.5% uptime requirements. Legacy systems experienced frequent downtime and lacked predictive capabilities.',
    architecture: {
      frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Query'],
      backend: ['FastAPI', 'Python', 'WebSockets', 'Redis'],
      database: ['MongoDB', 'Redis Cache'],
      infrastructure: ['Docker', 'GitHub Actions', 'Nginx', 'AWS EC2']
    },
    ownership: 85,
    impact: [
      {
        metric: 'System Uptime',
        value: '99.7%',
        description: 'Achieved enterprise-grade reliability through containerized deployment'
      },
      {
        metric: 'Detection Latency',
        value: '<200ms',
        description: 'Real-time processing pipeline with WebSocket streaming'
      },
      {
        metric: 'Deployment Time',
        value: '-65%',
        description: 'Automated CI/CD pipeline reduced manual deployment overhead'
      }
    ],
    techStack: ['FastAPI', 'React', 'MongoDB', 'Docker', 'GitHub Actions', 'Redis', 'WebSockets'],
    repositoryUrl: 'https://github.com/sadumina/vehicle-monitoring',
    deployment: {
      status: 'live',
      url: 'https://internal.haycarb.com/vehicle-monitoring'
    }
  },
  {
    id: 'proj-2',
    title: 'Studio Management System',
    slug: 'studio-management',
    timeline: '2024-Q4',
    status: 'production',
    problemStatement: 'Studio operations lacked centralized resource management, leading to double-bookings and inefficient scheduling. Required role-based access control for 50+ concurrent staff members.',
    architecture: {
      frontend: ['React', 'Redux Toolkit', 'Material-UI', 'Axios'],
      backend: ['Node.js', 'Express.js', 'JWT', 'Bcrypt'],
      database: ['MongoDB', 'Mongoose ODM'],
      infrastructure: ['Docker', 'Nginx', 'PM2']
    },
    ownership: 90,
    impact: [
      {
        metric: 'Booking Conflicts',
        value: '-92%',
        description: 'Eliminated double-bookings through optimistic locking'
      },
      {
        metric: 'Admin Overhead',
        value: '-40%',
        description: 'Automated scheduling reduced manual coordination'
      },
      {
        metric: 'User Adoption',
        value: '98%',
        description: 'Intuitive UX drove rapid staff onboarding'
      }
    ],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Redux', 'Docker'],
    repositoryUrl: 'https://github.com/sadumina/studio-management',
    deployment: {
      status: 'live'
    }
  },
  {
    id: 'proj-3',
    title: 'Online Grocery Ordering Platform',
    slug: 'grocery-platform',
    timeline: '2024-Q2',
    status: 'production',
    problemStatement: 'Small-scale grocery vendors required cost-effective e-commerce solution with inventory synchronization and order management. Budget constraints eliminated SaaS options.',
    architecture: {
      frontend: ['React', 'Context API', 'CSS Modules', 'React Router'],
      backend: ['Node.js', 'Express.js', 'Stripe API', 'Nodemailer'],
      database: ['MongoDB', 'Aggregation Pipeline'],
      infrastructure: ['Heroku', 'MongoDB Atlas', 'Cloudinary']
    },
    ownership: 80,
    impact: [
      {
        metric: 'Order Processing',
        value: '-50%',
        description: 'Automated workflows reduced manual order handling'
      },
      {
        metric: 'Inventory Accuracy',
        value: '99.2%',
        description: 'Real-time sync eliminated overselling incidents'
      },
      {
        metric: 'Customer Conversion',
        value: '+28%',
        description: 'Streamlined checkout flow improved completion rate'
      }
    ],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe', 'Cloudinary'],
    repositoryUrl: 'https://github.com/sadumina/grocery-platform',
    deployment: {
      status: 'live'
    }
  }
];
