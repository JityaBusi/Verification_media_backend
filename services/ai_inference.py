# import sys
# import torch
# import timm
# import torch.nn as nn
# from torchvision import transforms
# from PIL import Image
# import json

# device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# transform = transforms.Compose([
#     transforms.Resize((224, 224)),
#     transforms.ToTensor(),
#     transforms.Normalize(mean=[0.485, 0.456, 0.406],
#                          std=[0.229, 0.224, 0.225])
# ])

# def load_model():
#     model = timm.create_model("efficientnet_b0", pretrained=False)
#     model.classifier = nn.Linear(model.classifier.in_features, 2)
#     model.load_state_dict(torch.load("media_detector.pth", map_location=device))
#     model.to(device)
#     model.eval()
#     return model

# def predict(image_path):
#     model = load_model()
#     image = Image.open(image_path).convert("RGB")
#     image = transform(image).unsqueeze(0).to(device)

#     with torch.no_grad():
#         output = model(image)
#         probabilities = torch.softmax(output, dim=1)
#         confidence, predicted = torch.max(probabilities, 1)

#     return {
#         "isAI": bool(predicted.item()),
#         "confidence": round(confidence.item() * 100, 2)
#     }

# if __name__ == "__main__":
#     image_path = sys.argv[1]
#     result = predict(image_path)
#     print(json.dumps(result))
