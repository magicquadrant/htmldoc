## Sample HTML Document
<hr>


1. vagrant up
1. vagrant ssh
1. cd /vagrant/html
1. python -m SimpleHTTPServer

A message similar to ```Serving HTTP on 0.0.0.0 port 8000 ...``` should appear in terminal
A webserver is now listening on port 8000 within the vagrant machine.

The ```Vagrantfile`` has been configured to forward all requests from Host Machine
port 8000 to the Guest Vagrant Machine Port 8000.


On Host Machine, visit http://localhost:8000 using a browser. 
With the correct configuration in place, the request will be forwarded from host port 8000 to guest port 8000

You should see the html document display and links/script ref's within HTML document function correctly.



 