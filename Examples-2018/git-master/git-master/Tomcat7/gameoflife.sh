#!/bin/sh
sudo apt-get update
sudo apt-get install tomcat7 -y
sudo wget https://github.com/QT-DevOps/DevOpsIssues/files/2130588/gameoflife.zip
sudo apt-get install unzip -y
sudo unzip gameoflife.zip 
sudo cp gameoflife.war /var/lib/tomcat7/webapps/gameoflife.war
sudo service tomcat7 restart