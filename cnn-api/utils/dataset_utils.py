import pandas as pd

#Create a dataframe that reads our CK+ dataset
dataframe = pd.read_csv("data/ckextended.csv")
print(dataframe.head())
print(dataframe.info())

#Check missing and duplicate values
processed_dataframe = dataframe.drop_duplicates()
processed_dataframe = dataframe.dropna()
print(f"Number of Non-Missing Values: {processed_dataframe.notna().sum()}")
print(f"Number of duplicated values: {processed_dataframe.duplicated().sum}")

#Extracting dataframe features
columns = processed_dataframe.columns     # ["emotion", "pixels", "usage"]
print(columns)       

#Sort the array by emotion index just for control purposes
processed_dataframe = processed_dataframe.sort_values(by="emotion", ascending=True)
print(processed_dataframe.head())