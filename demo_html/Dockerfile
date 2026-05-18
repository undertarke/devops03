#cài image nginx từ hub docker
FROM nginx  

WORKDIR /usr/share/nginx/html

# đưa source vào container
COPY . .

# nhận biết port private, ứng dụng, phía trọng
EXPOSE 80

# docker build . -t img-html
# docker run -d -p 3001:80 --name cons-html img-html