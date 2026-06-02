// Demo data setup for testing - run this in browser console
const setupDemoData = () => {
  // Clear existing data
  localStorage.removeItem('trailbliss_users');
  localStorage.removeItem('trailbliss_user');
  sessionStorage.removeItem('trailbliss_user');
  
  // Add demo user
  const demoUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'demo@trailbliss.com',
    phone: '+91 9876543210',
    password: 'demo123456',
    registeredAt: new Date().toISOString()
  };
  
  localStorage.setItem('trailbliss_users', JSON.stringify([demoUser]));
  console.log('Demo data setup complete!');
  console.log('Login with: demo@trailbliss.com / demo123456');
};

// Call this function in browser console to set up demo data
// setupDemoData();