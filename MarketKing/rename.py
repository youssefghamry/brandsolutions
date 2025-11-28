import os

old_word = "marketking"
new_word = "MarketKing"

# ضع هنا مسار المجلد الرئيسي اللي فيه كل الملفات
root_folder = r"."

for root, dirs, files in os.walk(root_folder, topdown=False):

    # إعادة تسمية الملفات
    for filename in files:
        if old_word in filename:
            old_path = os.path.join(root, filename)
            new_filename = filename.replace(old_word, new_word)
            new_path = os.path.join(root, new_filename)
            os.rename(old_path, new_path)
            print(f"✔ Renamed file: {filename} → {new_filename}")

    # إعادة تسمية المجلدات
    for dirname in dirs:
        if old_word in dirname:
            old_path = os.path.join(root, dirname)
            new_dirname = dirname.replace(old_word, new_word)
            new_path = os.path.join(root, new_dirname)
            os.rename(old_path, new_path)
            print(f"✔ Renamed folder: {dirname} → {new_dirname}")

print("\n🔚 Done! كل الملفات والمجلدات اتغير اسمها.")
