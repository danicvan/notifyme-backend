pipeline {
  agent any

  tools {
    nodejs 'node18'
  }

  environment {
    NODE_ENV = 'test'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished.'
    }
    success {
      echo '✅ Build and tests successful!'
    }
    failure {
      echo '❌ Build or tests failed.'
    }
  }
}
