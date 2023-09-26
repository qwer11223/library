@echo off
echo.
echo [info] packing Web project,generate dist directory.
echo.

%~d0
cd %~dp0

cd ..
npm run build:prod

pause