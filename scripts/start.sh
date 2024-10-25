PROJECT_ROOT="/home/ec2-user/project/forduellee_server"
cd $PROJECT_ROOT

pm2 start "npm run start:prod"