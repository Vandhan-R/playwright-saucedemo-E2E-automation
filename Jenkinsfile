pipeline {
    agent any

    tools {
        nodejs 'Node20'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --project=chromium --reporter=html'
            }
        }

        stage('Archive HTML Report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**'
            }
        }
    }

    post {
        always {
            echo "✅ CI Pipeline Finished — Check artifacts for report"
        }
    }
}
