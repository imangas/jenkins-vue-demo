pipeline {
  agent any
  stages {
    stage('Checkout') {
      parallel {
        stage('frontend') {
          steps {
              git(url: 'https://bitbucket.org/imangas_romvo/build-npm.git', branch: env.BRANCH_NAME, credentialsId: env.BITBUCKET_CREDENTIAL_ID)
            
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
        // sh 'sudo ./frontend/jenkins/scripts/install.sh'
        // 'npm install --production'
        /* sh './node_modules/.bin/env-cmd' */
        
      }
    }
    
    /*stage('Build') {
      agent {
        docker {
          image 'node:9.9.0-alpine'
          args "-u root"
        }
      }
      steps {
        sh "ls -l"
        sh "cat jenkins/scripts/install.sh"
      }
    }

    /*stage('Build') {
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
        
        // sh 'sudo ./frontend/jenkins/scripts/install.sh'
        // 'npm install --production'
        /* sh './node_modules/.bin/env-cmd' *
        
      }
    }*/

  }
  environment {
    BITBUCKET_CREDENTIAL_ID = '2ec0f61b-0c97-4a12-ba1f-3a4eeab0a24f'
  }
  options {
    skipDefaultCheckout()
    disableConcurrentBuilds()
  }
}
