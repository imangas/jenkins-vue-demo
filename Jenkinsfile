pipeline {
  agent any
  stages {
    stage('Checkout') {
      parallel {
        stage('frontend') {
          steps {
              git(url: 'https://github.com/imangas/jenkins-vue-demo.git', branch: env.BRANCH_NAME, credentialsId: env.BITBUCKET_CREDENTIAL_ID)
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
          sh 'npm -v'
          sh 'node -v'
      }
    }
  }
  environment {
    GITHUB_CREDENTIAL_ID = '4742ccd1-e1f1-41ca-8087-ff7d6914d13a'
  }
  options {
    //skipDefaultCheckout()
    disableConcurrentBuilds()
  }
}
