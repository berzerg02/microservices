pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'ibronn/microservices:latest'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/berzerg02/microservices.git'
            }
        }
        stage('Build') {
            steps {
                bat 'gradlew.bat clean build'
            }
        }
        stage('Verify JAR Exists') {
            steps {
                bat 'if not exist build\\libs\\*.jar exit /b 1'
            }
        }
        stage('Docker Build') {
            steps {
                bat 'docker build -t %DOCKER_IMAGE% .'
            }
        }
        stage('Push Docker Image') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                    bat 'docker push %DOCKER_IMAGE%'
                }
            }
        }
        stage('Deploy') {
            steps {
                bat 'docker run -d -p 8080:8080 %DOCKER_IMAGE%'
            }
        }
    }
}
