import os
from datetime import date

# 1. 创建日期格式的目录
folder_name = f"Aufgabe-{date.today().strftime('%d%m%y')}"
os.makedirs(folder_name, exist_ok=True)

# 2. 创建 readme.md
with open(os.path.join(folder_name, "readme.md"), "w") as f:
    f.write("# Project Documentation\n")

# 3. 用 VS Code 打开文件 (Windows系统)
os.system(f"code {os.path.join(folder_name, 'readme.md')}")
