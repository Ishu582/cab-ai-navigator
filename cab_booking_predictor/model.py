
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
from datetime import datetime, timedelta

class CabBookingPredictor:
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100, random_state=42)
        self.scaler = StandardScaler()
        
    def prepare_data(self, bookings):
        """Convert booking data into features for prediction"""
        df = pd.DataFrame(bookings)
        
        # Convert timestamps to datetime objects
        df['scheduled_time'] = pd.to_datetime(df['scheduled_time'])
        
        # Extract temporal features
        df['day_of_week'] = df['scheduled_time'].dt.dayofweek
        df['hour_of_day'] = df['scheduled_time'].dt.hour
        df['month'] = df['scheduled_time'].dt.month
        
        return df

    def train(self, bookings):
        """Train the model on historical booking data"""
        df = self.prepare_data(bookings)
        
        # Prepare features and target
        features = df[['day_of_week', 'hour_of_day', 'month']]
        features = self.scaler.fit_transform(features)
        
        # Use booking frequency as target
        df['count'] = 1
        target = df.groupby(['day_of_week', 'hour_of_day', 'month'])['count'].count().reset_index()
        
        # Train the model
        self.model.fit(features, target['count'])
        
    def predict_patterns(self, user_bookings):
        """Predict booking patterns for a user"""
        if len(user_bookings) < 5:
            return []
            
        df = self.prepare_data(user_bookings)
        patterns = []
        
        # Analyze patterns by day and hour
        for day in range(7):
            for hour in range(24):
                day_hour_bookings = df[
                    (df['day_of_week'] == day) & 
                    (df['hour_of_day'] == hour)
                ]
                
                if len(day_hour_bookings) > 0:
                    # Get most common locations
                    common_pickup = day_hour_bookings['pickup_location'].mode()[0]
                    common_destination = day_hour_bookings['destination'].mode()[0]
                    
                    # Calculate confidence based on frequency
                    confidence = (len(day_hour_bookings) / len(df)) * 100
                    
                    if confidence > 10:  # Only include patterns with >10% confidence
                        patterns.append({
                            'day_of_week': day,
                            'hour_of_day': hour,
                            'common_pickup': common_pickup,
                            'common_destination': common_destination,
                            'prediction_confidence': confidence
                        })
        
        return sorted(patterns, key=lambda x: x['prediction_confidence'], reverse=True)

