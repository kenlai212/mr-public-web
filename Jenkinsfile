pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "kenlai212/mr-public-web:sandbox"
        TARGET_DEPLOY_SERVER_SSH_ACCOUNT = "kenlai212"
        TARGET_DEPLOY_SERVER_IP = "10.0.1.4"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build($DOCKER_IMAGE)
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
                    //sh "ssh -l kenlai212 10.0.1.4 'docker pull kenlai212/mr-public-web:sandbox && docker stop mr-public-web || true && docker rm mr-public-web || true && docker run -d --name mr-public-web -p 3000:3000 --network app-network kenlai212/mr-public-web:sandbox'"
                    sh "ssh -l " + "kenlai212 10.0.1.4 'docker pull kenlai212/mr-public-web:sandbox && docker stop mr-public-web || true && docker rm mr-public-web || true && docker run -d --name mr-public-web -p 3000:3000 --network app-network kenlai212/mr-public-web:sandbox'"
                }
            }
        }
    }
}