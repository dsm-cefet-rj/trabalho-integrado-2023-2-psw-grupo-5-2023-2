@echo off
echo O script ira instalar as dependencias do frontend e do backend.
echo Esse script ira usar o comando npm install em ambos os diretórios.
echo Feche o terminal para cancelar.
PAUSE
@echo on
cd react-easycook/project
start cmd /c call npm install
cd ../backend
call npm install
cd ../..
start cmd /k project-run | exit