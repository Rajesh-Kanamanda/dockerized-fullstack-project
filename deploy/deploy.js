const { execSync } = require('child_process');

console.log('Starting deployment...');
execSync('npm install --prefix ../backend', { stdio: 'inherit' });
execSync('npm install --prefix ../frontend', { stdio: 'inherit' });
console.log('Deployment complete.');

