@echo off
:start
SET choice=
SET /p choice= Deseja rodar o projeto? [Y/N]: 
IF NOT '%choice%'=='' SET choice=%choice:~0,1%
IF '%choice%'=='Y' GOTO yes
IF '%choice%'=='y' GOTO yes
GOTO no

:no
EXIT

:yes
echo Iniciando frontend e backend do projeto
cd react-easycook/backend
start cmd /k npm run dev
cd ../project
call npm start