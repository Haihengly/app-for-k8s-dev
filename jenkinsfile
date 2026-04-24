@Library('jenkins-shared-library') _

def config = [
    branch: 'master',
    repoUrl: 'https://github.com/Haihengly/app-for-k8s-dev',

    dockerImage: 'haihengly/react-app',
    dockerTag: "${env.BUILD_NUMBER}",
    dockerCredentialsId: 'dockerhub-credentials-id',

    ansibleCredentialID: 'ansible-ssh-key',

    stages: [
        [name: 'Check', type: 'check'],
        [name: 'Build', type: 'build'],
        [name: 'Deploy', type: 'deploy', enabled: 'false']
    ]
]

fullPipeline(config)