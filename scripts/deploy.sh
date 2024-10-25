PROJECT_ROOT="/home/ec2-user/project/forduellee_server"
DEPLOY_LOG="$PROJECT_ROOT/server_deploy.log"

TIME_NOW=$(date +%c)

# build 파일 복사
echo "$TIME_NOW > 파일 복사" >> ../$DEPLOY_LOG
node main

