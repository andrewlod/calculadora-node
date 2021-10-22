#!/bin/bash
sudo rm  /opt/bitnami/nginx/html/index.html
sudo mv /var/consulta-ui/index.html /opt/bitnami/nginx/html/index.html
sudo rm -r /var/consulta-ui/