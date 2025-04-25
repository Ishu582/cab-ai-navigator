
from model import CabBookingPredictor
from datetime import datetime, timedelta
import random

def generate_sample_data(num_bookings=100):
    """Generate sample booking data for testing"""
    locations = ['Downtown', 'Airport', 'Shopping Mall', 'University', 'Business District']
    bookings = []
    
    start_date = datetime.now() - timedelta(days=90)
    
    for _ in range(num_bookings):
        # Generate booking with some patterns (e.g., more airport trips in the morning)
        hour = random.randint(0, 23)
        pickup = random.choice(locations)
        
        if 6 <= hour <= 9:  # Morning pattern
            destination = 'Airport' if random.random() < 0.6 else random.choice(locations)
        elif 16 <= hour <= 19:  # Evening pattern
            destination = 'Downtown' if random.random() < 0.7 else random.choice(locations)
        else:
            destination = random.choice(locations)
            
        booking_time = start_date + timedelta(
            days=random.randint(0, 89),
            hours=hour,
            minutes=random.randint(0, 59)
        )
        
        bookings.append({
            'pickup_location': pickup,
            'destination': destination,
            'scheduled_time': booking_time.isoformat(),
            'status': 'completed'
        })
    
    return bookings

def main():
    # Create and train the predictor with sample data
    predictor = CabBookingPredictor()
    sample_bookings = generate_sample_data()
    
    print("Training model with sample data...")
    predictor.train(sample_bookings)
    
    print("\nPredicting patterns...")
    patterns = predictor.predict_patterns(sample_bookings)
    
    print("\nDetected booking patterns:")
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    
    for pattern in patterns:
        print(f"\nDay: {days[pattern['day_of_week']]}")
        print(f"Time: {pattern['hour_of_day']:02d}:00")
        print(f"Common pickup: {pattern['common_pickup']}")
        print(f"Common destination: {pattern['common_destination']}")
        print(f"Confidence: {pattern['prediction_confidence']:.1f}%")

if __name__ == "__main__":
    main()

