FROM node:boron

# Install Apache
RUN apt-get update && \
	apt-get install -y vim apache2
RUN a2enmod headers rewrite && \
	service apache2 restart

# Install npm modules
RUN npm install
RUN npm install --save-dev babel-cli
RUN npm install babel-preset-env webpack babel-loader --save-dev

# Copy app Apache configuration
COPY ClientApp.conf /etc/apache2/sites-available/ClientApp.conf

# Create app directory
WORKDIR /var/www/node

# Copy application dependencies
COPY ./application /var/www/node

# Enable clientapp site
RUN a2ensite ClientApp && \
	service apache2 restart

# Manage runable command file
COPY run.sh /opt/run.sh
RUN chmod +x /opt/run.sh

CMD ["/opt/run.sh"]