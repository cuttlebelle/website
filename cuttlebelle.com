# NGINX CONFIG FOR MUDDELS.COM
#

# http to https redirect
#
server {
	server_name  www.cuttlebelle.com cuttlebelle.com;
	root         /var/www/html/cuttlebelle;
	return 301   https://cuttlebelle.com$request_uri;
}


# www to https redirect
#
server {
	listen       443 ssl;
	listen       [::]:443 ssl;
	server_name  www.cuttlebelle.com;

	ssl on;
	ssl_certificate            /etc/letsencrypt/live/bronzies.com/fullchain.pem;
	ssl_certificate_key        /etc/letsencrypt/live/bronzies.com/privkey.pem;
	ssl_session_timeout        1d;
	ssl_session_cache          shared:SSL:50m;
	ssl_session_tickets        off;
	ssl_protocols              TLSv1 TLSv1.1 TLSv1.2;
	ssl_prefer_server_ciphers  on;
	ssl_dhparam                /etc/nginx/ssl/dhparam.pem;
	ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256';  #generate here: https://mozilla.github.io/server-side-tls/ssl-config-generator/
	ssl_stapling               on;
	ssl_stapling_verify        on;

	location ~ /\.ht {
		deny  all;
	}

	return 301  https://cuttlebelle.com$request_uri;
}


# ssl and http2 config
#
server {
	listen       443 ssl http2;
	listen       [::]:443 ssl http2;
	server_name  cuttlebelle.com;
	root         /var/www/html/cuttlebelle;

	ssl on;
	ssl_certificate      /etc/letsencrypt/live/bronzies.com/fullchain.pem;
	ssl_certificate_key  /etc/letsencrypt/live/bronzies.com/privkey.pem;

	ssl_session_timeout  1d;
	ssl_session_cache    shared:SSL:50m;
	ssl_session_tickets  off;

	ssl_protocols              TLSv1 TLSv1.1 TLSv1.2;
	ssl_prefer_server_ciphers  on;
	ssl_dhparam                /etc/nginx/ssl/dhparam.pem;
	ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256';  #generate here: https://mozilla.github.io/server-side-tls/ssl-config-generator/

	# OCSP Stapling ---
	# fetch OCSP records from URL in ssl_certificate and cache them
	ssl_stapling         on;
	ssl_stapling_verify  on;

	# root server
	#
	location / {
		root   /var/www/html/cuttlebelle;
		index  index.html index.htm;
	}


	# deny access to .htaccess files, if Apache's document root
	# concurs with nginx's one
	#
	location ~ /\.ht {
		deny  all;
	}
}
