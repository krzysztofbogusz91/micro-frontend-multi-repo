#!/bin/sh
npm --prefix ./remote-react run start &
npm --prefix ./remote-angular run start &
npm --prefix ./host-angular run start &
npm --prefix ./host-react run start