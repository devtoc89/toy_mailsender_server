PROJECT_LOG_PATH="/home/ec2-user/project/log"
PROJECT_ROOT="/home/ec2-user/project/forduellee_server"
DEPLOY_LOG="$PROJECT_LOG_PATH/server_deploy.log"

TIME_NOW=$(date +%c)

# build 파일 복사
mkdir $PROJECT_LOG_PATH 2> dev/null
echo "$TIME_NOW > 파일 복사" >> $DEPLOY_LOG
node main

