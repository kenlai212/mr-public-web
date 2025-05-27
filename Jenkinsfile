pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build("kenlai212/mr-public-web:sandbox")
                }
            }
        }
    }
}