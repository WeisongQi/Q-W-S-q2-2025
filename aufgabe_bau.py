import os
from datetime import date, datetime

# 1. 创建日期格式的目录
# folder_name = f"Aufgabe-{date.today().strftime('%d%m%y')}"
# os.makedirs(folder_name, exist_ok=True)

# === 配置区域 ===
config = {
    "prefix": "Aufgabe",  # 目录前缀
    # "date_format": "%Y-%m-%d",  # 日期格式
    "with_timestamp": False,  # 是否添加时间戳
    "base_dir": "C:/Coding/Q-W-S-q2-2025",  # 基础路径
    "custom_suffix": "_v1",  # 自定义后缀
}
# 可自定义的日期格式选项
date_formats = {
    "ddmmyy": "%d%m%y",  # 230625（默认）
    "ddmmyyyy": "%d%m%Y",  # 23062025
    "yymmdd": "%y%m%d",  # 250623
    "yyyy-mm-dd": "%Y-%m-%d",  # 2025-06-23
}

selected_format = "ddmmyy"  # 在此修改格式
# ================

# 生成目录名
folder_name = (
    config["prefix"] + "-" + date.today().strftime(date_formats[selected_format])
)

if config["with_timestamp"]:
    folder_name += "_" + datetime.now().strftime("%H%M")

# folder_name += config["custom_suffix"]

# 处理基础路径
if not os.path.exists(config["base_dir"]):
    os.makedirs(config["base_dir"], exist_ok=True)

full_path = os.path.join(config["base_dir"], folder_name)
os.makedirs(full_path, exist_ok=True)

print(f"Index: {full_path}")

# 2. 创建 readme.md
with open(os.path.join(folder_name, "readme.md"), "w") as f:
    f.write("# Project Documentation\n")

# 3. 用 VS Code 打开文件 (Windows系统)
os.system(f"code {os.path.join(folder_name, 'readme.md')}")
