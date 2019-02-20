#!/bin/sh
curl https://api.csswg.org/bikeshed/ -F file=@rfc0001.bs -F force=1 > rfc0001.html
