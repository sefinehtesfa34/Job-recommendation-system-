import pandas as pd 
import re 
import numpy as np 
import nltk
from string import punctuation
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer 
from sklearn.ensemble import RandomForestClassifier 
from sklearn.model_selection import train_test_split 
import pickle
# nltk.download('stopwords')
class Preprocessor:
    def __init__(self, description) -> None:
        self.cleaned_text = np.array(self.cleanResume(description)).reshape(1,)
        self.category = self.predictor()
    def cleanResume(self, resumeText):
        resumeText = re.sub('http\S+\s*', ' ', resumeText)  # remove URLs
        resumeText = re.sub('RT|cc', ' ', resumeText)  # remove RT and cc
        resumeText = re.sub('#\S+', '', resumeText)  # remove hashtags
        resumeText = re.sub('@\S+', '  ', resumeText)  # remove mentions
        resumeText = re.sub('[%s0-9]' % re.escape(punctuation), ' ', resumeText)  # remove punctuations
        resumeText = re.sub(r'[^\x00-\x7f]',r' ', resumeText) 
        resumeText = re.sub('\s+', ' ', resumeText)  # remove extra whitespace
        resumeText = re.sub(r'\b\w\b', '', resumeText)
        return resumeText
    def predictor(self):
        with open('recommender/preprocessor/helper/vectorizer.pkl', 'rb') as file:
            vectorizer = pickle.load(file)
        with open('recommender/preprocessor/helper/saved_model.pkl', 'rb') as file:
            model = pickle.load(file)
        with open('recommender/preprocessor/helper/hashmap.pkl', 'rb') as file:
            hashmap = pickle.load(file)
        vector_form = vectorizer.transform(self.cleaned_text)
        class_type = model.predict(vector_form)
        return hashmap[class_type[0]]
