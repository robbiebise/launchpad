node {
    stage('SCM') {
        git 'https://github.com/robbiebise/launchpad'
    }
    stage('SonarQube analysis') {
        def scannerHome = tool 'sonar-scanner-cli'
        withSonarQubeEnv('SonarQube') { 
            if (env.CHANGE_ID) { // Check if this is a PR
                sh "${scannerHome}/bin/sonar-scanner -Dsonar.pullrequest.key=${env.CHANGE_ID} -Dsonar.pullrequest.branch=${env.CHANGE_BRANCH} -Dsonar.pullrequest.base=${env.CHANGE_TARGET}"
            } else {
                sh "${scannerHome}/bin/sonar-scanner"
            }
        }
    }
}
