module.exports = {
  apps: [{
    name: 'se2-queue-server',
    script: 'npm run build && npm run start',
    instances: 1,
    autorestart: true,
    watch: false,
    // max_memory_restart: '500M',
    kill_timeout: 2000,
    env: {
      
    }
  }]
};
