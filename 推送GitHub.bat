@echo off
chcp 65001 >nul
echo ========================================
echo  药学知识指南 - 推送到 GitHub
echo ========================================
echo.
cd /d "E:\workbuddy\2026-06-10-18-48-39\pharmacy-app"
git push https://superwalkman:walkman0097@github.com/superwalkman/pharmacy-guide.git main
echo.
echo 推送完成！按任意键关闭...
pause >nul
