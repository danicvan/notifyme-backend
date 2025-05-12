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

    // stage('Deploy') {
    //   steps {
    //     sh './deploy.sh' // ou qualquer comando de deploy
    //   }
    // }
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
