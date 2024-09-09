import os
import shutil
import cv2 as cv

#New Image SIZE
WIDTH  = 256
HEIGHT = 256

#PATH to the Images folder
PATH = "images"

IMAGES = []
count = 0
counter = 0

#New PATH for training and test Images
TEST_PATH = "data/test"
TRAINING_PATH = "data/training"

#List each of the 18 folders
subfolders = os.scandir(PATH)
print(subfolders)


for folder in subfolders:
    for image_entry in os.scandir(folder):
        if image_entry.is_file():
            # Read the image
            image_path = image_entry.path
            image = cv.imread(image_path)
            
            if image is not None:
                # Resize the image
                resized_image = cv.resize(image, (WIDTH, HEIGHT), interpolation=cv.INTER_LINEAR)
                IMAGES.append(resized_image)
                count += 1
                print(f"Processed image {count}: {image_entry.name}")
            else:
                print(f"Failed to read image: {image_entry.name}")
            print(resized_image.shape)


#os.mkdir(TEST_PATH)
#os.mkdir(TRAINING_PATH)

print(len(IMAGES))

for i, image in enumerate(IMAGES):
    new_name = f"photo {i}.jpg"
    if i < 132:
        new_path = os.path.join(TRAINING_PATH, new_name)    
    else:
        new_path = os.path.join(TEST_PATH, new_name)
    
    # Save the image
    cv.imwrite(new_path, image)

    
    