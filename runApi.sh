#!/bin/bash

kill -9 $(lsof -i:3000 -t) 2> /dev/null
node api/index.js
