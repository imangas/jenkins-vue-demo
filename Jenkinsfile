pipeline {
  agent any
  stages {
    stage('Checkout') {
      parallel {
        stage('frontend') {
          steps {
            echo "downloading"
            git(url: 'https://github.com/imangas/jenkins-vue-demo.git', branch: env.BRANCH_NAME, credentialsId: env.GITHUB_CREDENTIAL_ID)
          }
        }
      }
    }

    stage('Build') {
      agent {
        docker {
          reuseNode true
          label 'NodeJS'
          image 'node:9.9.0-alpine'
          args "-u root"
        }
      }
      steps {
          sh 'chmod +x jenkins/scripts/install.sh'
          sh 'jenkins/scripts/install.sh'
      }
    }
  }
  environment {
    GITHUB_CREDENTIAL_ID = '183e8a51-ef0b-404c-8e63-d490a068f44a'
  }
  options {
    skipDefaultCheckout()
    disableConcurrentBuilds()
  }
}
