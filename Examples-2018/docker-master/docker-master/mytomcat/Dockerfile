FROM tomcat:8
LABEL "organization"="srikarthikeya pg"
LABEL "owner"="ramana"
ADD wget http://s3-us-west-2.amazonaws.com/qt-aws-first-bucket/gameoflife.war /usr/local/tomcat/webapps/gameoflife.war
EXPOSE 8080
CMD ["catalina.sh", "run"]