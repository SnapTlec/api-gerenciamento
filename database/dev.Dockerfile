FROM mysql as development

WORKDIR /app

ENV MYSQL_ROOT_PASSWORD=root