import cv2
import pytesseract
import numpy as np
import os

# عدّل المسار لو لازم
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

old_word = "6Valley"
new_word = "e-commerceKing"

# دالة تقدّر حجم الخط وسمكه بناءً على ارتفاع الـ bounding box
def estimate_font_params(box_h):
    # مقاييس تقريبية؛ عدّل إذا احتجت تكبير/تصغير
    font_scale = max(0.5, box_h / 30.0)
    thickness = max(1, int(box_h / 10))
    return font_scale, thickness

# امسح المنطقة القديمة بتمويه بسيط ثم اكتب الأبيض بسُمك
def replace_text_in_image(img, x, y, w, h):
    # تأكد من حدود الصورة
    H, W = img.shape[:2]
    x1 = max(0, x)
    y1 = max(0, y)
    x2 = min(W, x + w)
    y2 = min(H, y + h)

    roi = img[y1:y2, x1:x2]

    # تمويه للمنطقة لإزالة النص القديم
    # لو تحب مسح بمستطيل أبيض بدل التمويه استخدم cv2.rectangle(...,(255,255,255), -1)
    blur = cv2.GaussianBlur(roi, (31, 31), 0)
    img[y1:y2, x1:x2] = blur

    # إعدادات الكتابة: أبيض وسميك
    font = cv2.FONT_HERSHEY_SIMPLEX
    font_scale, thickness = estimate_font_params(y2 - y1)
    color = (255, 255, 255)  # أبيض

    # موضع الكتابة: نحطها داخل الـ bounding box قليلاً للأسفل لظهور أفضل
    text_x = x1
    text_y = y2 - 5

    # كتابة النص الجديد
    cv2.putText(img, new_word, (text_x, text_y), font, font_scale, color, thickness, lineType=cv2.LINE_AA)

# مسح المجلدات وكل الصور
for root, dirs, files in os.walk("."):
    for file in files:
        if file.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
            path = os.path.join(root, file)
            img = cv2.imread(path)

            if img is None:
                continue

            # OCR
            data = pytesseract.image_to_data(img, output_type=pytesseract.Output.DICT)

            replaced = False
            for i, text in enumerate(data["text"]):
                if text and old_word in text:
                    x = int(data["left"][i])
                    y = int(data["top"][i])
                    w = int(data["width"][i])
                    h = int(data["height"][i])

                    replace_text_in_image(img, x, y, w, h)
                    replaced = True

            if replaced:
                cv2.imwrite(path, img)  # يكتب فوق الملف الأصلي
                print(f"✔ تم استبدال '{old_word}' بـ '{new_word}' في: {path}")

print("انتهى التعديل.")
