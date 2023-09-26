@echo off
echo.
echo [info] install Web project,generate node_modules files¡£
echo.

%~d0
cd %~dp0

cd ..
npm i --registry https://registry.npmmirror.com

pause