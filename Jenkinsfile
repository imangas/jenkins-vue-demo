pipeline {
  agent any
  stages {
    stage('Checkout') {
      parallel {
        stage('frontend') {
          steps {
              git(url: 'https://bitbucket.org/romvo/frontend.git', branch: env.BRANCH_NAME, credentialsId: env.BITBUCKET_CREDENTIAL_ID)
            
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
    BITBUCKET_CREDENTIAL_ID = 'd9c583f6-46a2-463b-8361-27353df4cd90'
    GITHUB_CREDENTIAL_ID = '4742ccd1-e1f1-41ca-8087-ff7d6914d13a'
  }
  options {
    //skipDefaultCheckout()
    disableConcurrentBuilds()
  }
}
