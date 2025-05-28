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
                script {
                    sh '''
                        ssh -tt kenlai212@10.0.1.4 'bash -s << 'ENDSSH'
                        sudo docker pull kenlai212/mr-public-web:sandbox
                        cd /home/kenlai212/mr-public-deployment/
                        sudo docker compose up -d
                    '''
                }
            }
        }
    }
}