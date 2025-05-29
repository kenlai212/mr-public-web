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
        stage('Push') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                sshagent(credentials : ['kenlai212']) {
                    sh 'ssh kenlai212@10.0.1.4'
                    sh 'docker pull kenlai212/mr-public-web:sandbox'
                    sh 'docker network create app-network'
                    sh 'docker run -d --name mr-public-web -p 3000:3000 --network app-network kenlai212/mr-public-web:sandbox'
                }
            }
        }
    }
}