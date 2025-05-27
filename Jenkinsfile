pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                git branch: 'development', 'https://github.com/kenlai212/mr-public-web'
            }
        }
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build("kenlai212/mr-public-web:sandbox")
                }
            }
        }
    }
}