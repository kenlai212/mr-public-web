pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "kenlai212/mr-public-web:sandbox"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build(env.DOCKER_IMAGE)
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
            environment{
                TARGET_DEPLOY_SERVER_SSH_ACCOUNT = "kenlai212"
                TARGET_DEPLOY_SERVER_IP = "10.0.1.4"
                CONTAINER_NAME = "mr-public-web"
                CONTAINER_PORT_MAPPING = "3000:3000"
            }

            steps {
                sshagent(credentials : ['kenlai212']) {
                    //sh "ssh -l kenlai212 10.0.1.4 'docker pull kenlai212/mr-public-web:sandbox && docker stop mr-public-web || true && docker rm mr-public-web || true && docker run -d --name mr-public-web -p 3000:3000 --network app-network kenlai212/mr-public-web:sandbox'"
                    sh "ssh -l " + env.TARGET_DEPLOY_SERVER_SSH_ACCOUNT + " " + env.TARGET_DEPLOY_SERVER_IP + " 'docker pull " + env.DOCKER_IMAGE + " && docker stop " + env.CONTAINER_NAME + " || true && docker rm " + env.CONTAINER_NAME + " || true && docker run -d --name " + env.CONTAINER_NAME + " -p " + env.CONTAINER_PORT_MAPPING + " --network app-network "+ env.DOCKER_IMAGE +"'"
                }
            }
        }
    }
}