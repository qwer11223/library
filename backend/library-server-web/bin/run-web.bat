@echo off
echo.
echo [info] using Vite command to running Web project.
echo.

%~d0
cd %~dp0

cd ..
npm run dev

pause