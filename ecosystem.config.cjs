module.exports = {
  apps: [
    {
      name: "banking-backend",
      script: "npm",
      args: "run dev",
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: 5000
      }
    }
  ]
}
